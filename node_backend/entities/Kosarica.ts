import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Kupac from './Kupac'
import Racun from './Racun'
import ProizvodKupac from './ProizvodKupac'
import StringToFloatTransformer from '../utils/stringToFloatTransformer'
import CartResponse from '../models/response/CartResponse'

@Index('Kosarica_pkey', ['id'], { unique: true })
@Index('Kosarica_racun_id_key', ['racunId'], { unique: true })
@Entity('Kosarica', { schema: 'public' })
export default class Kosarica extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id!: number

  @Column('boolean', { name: 'obradjeno', nullable: true })
  obradjeno!: boolean | null

  @Column('character varying', { name: 'status', nullable: true, length: 256 })
  status!: string | null

  @Column('numeric', {
    name: 'total',
    nullable: true,
    precision: 10,
    scale: 2,
    transformer: new StringToFloatTransformer(),
  })
  total!: number | null

  @Column('integer', { name: 'racun_id', nullable: true, unique: true })
  racunId!: number | null

  @ManyToOne(() => Kupac, (kupac) => kupac.kosaricas)
  @JoinColumn([{ name: 'kupac_id', referencedColumnName: 'id' }])
  kupac!: Kupac

  @OneToOne(() => Racun, (racun) => racun.kosarica)
  @JoinColumn([{ name: 'racun_id', referencedColumnName: 'id' }])
  racun!: Racun

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.kosarica)
  proizvodKupacs!: ProizvodKupac[]

  public get products() {
    return this.proizvodKupacs.map((pk) => {
      const product = pk.proizvod
      product.updateQuantityAndPrice(pk.kolicina, pk.cijena)
      return product
    })
  }

  public async UpdateTotal(): Promise<void> {
    this.total = 0
    this.proizvodKupacs.forEach((pk) => {
      if (this.total != null) this.total += pk.cijena * pk.kolicina
      else this.total = pk.cijena * pk.kolicina
    })
    this.save()
  }

  toCartResponse(): CartResponse {
    const cartResponse = new CartResponse()
    cartResponse.cartId = this.id
    cartResponse.invoice = this.racun
    cartResponse.total = this.total
    cartResponse.isProcessed = this.obradjeno
    cartResponse.status = this.status
    cartResponse.cartProducts = this.proizvodKupacs.map((pk) =>
      pk.toCartProductsResponse(),
    )

    cartResponse.buyerInformation = this.kupac?.toUserResponse()
    cartResponse.deliveryInformation = (
      this.kupac.kupacDostava ? this.kupac.kupacDostava : this.kupac
    ).toUserResponse()

    return cartResponse
  }
}
