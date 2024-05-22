import productService from './productService'
import HttpError from '../utils/HttpError'
import Kosarica from '../entities/Kosarica'
import Kupac from '../entities/Kupac'
import ProizvodKupac from '../entities/ProizvodKupac'
import Proizvod from '../entities/Proizvod'
import CartProductAddRequest from '../models/request/cartProductAddRequest'
import CartBuyerInformationRequest from '../models/request/cartBuyerInformationRequest'
import CartResponse from '../models/response/CartResponse'
import Racun from '../entities/Racun'
import NacinPlacanja from '../entities/NacinPlacanja'
import { randomUUID } from 'crypto'

// Cart servis gdje nam se nalazi cila nasa poslovna logika vezana za kosaricu
class CartService {
  async getCart(): Promise<Kosarica> {
    let nonProcessedCart = await Kosarica.findOne({
      relations: ['kupac', 'proizvodKupacs', 'proizvodKupacs.proizvod'],
      where: {
        obradjeno: false,
      },
    })

    if (!nonProcessedCart) {
      nonProcessedCart = new Kosarica()
      nonProcessedCart = await nonProcessedCart.save()
    }
    return nonProcessedCart
  }

  async getCartResponseById(cartId: number): Promise<CartResponse> {
    return (await this.getCartById(cartId)).toCartResponse()
  }

  async getCartById(cartId: number): Promise<Kosarica> {
    const foundCart = await Kosarica.findOne({
      relations: ['kupac', 'proizvodKupacs', 'proizvodKupacs.proizvod'],
      where: {
        id: cartId,
      },
    })

    if (!foundCart) throw new HttpError(404, `Cart with id ${cartId} not found`)
    return foundCart
  }

  // dodavanje produkta u kosaricu pomocu produkt id-a, uvijek uveca produkt za 1
  async addProductById(
    cartId: number,
    productId: number,
    cartProductAddRequest: CartProductAddRequest,
  ): Promise<Kosarica> {
    const cart = await this.getCartById(cartId)
    const product = await productService.getProductById(productId)

    this.checkIsQuantityValid(product, cartProductAddRequest.quantity)

    const existingProductInCart = cart.proizvodKupacs.find(
      (pk) => pk.proizvod.id === productId,
    )

    if (existingProductInCart) {
      existingProductInCart.kolicina += cartProductAddRequest.quantity
      await existingProductInCart.save()
    } else {
      const cartProduct = ProizvodKupac.CreateCartProduct(
        cart,
        product,
        cartProductAddRequest.quantity,
      )
      await cartProduct.save()
    }

    return this.getCartById(cartId)
  }

  async updateProductQuantity(
    cartId: number,
    productId: number,
    cartProductAddRequest: CartProductAddRequest,
  ): Promise<Kosarica> {
    const cart = await this.getCartById(cartId)
    const product = await productService.getProductById(productId)

    this.checkIsQuantityValid(product, cartProductAddRequest.quantity)

    const existingProductInCart = cart.proizvodKupacs.find(
      (pk) => pk.proizvod.id === productId,
    )

    if (existingProductInCart) {
      existingProductInCart.kolicina = cartProductAddRequest.quantity
      await existingProductInCart.save()
    }
    return cart
  }

  async removeProductFromCart(
    cartId: number,
    productId: number,
  ): Promise<Kosarica> {
    const cart = await this.getCartById(cartId)

    const existingProductInCart = cart.proizvodKupacs.find(
      (pk) => pk.proizvod.id === productId,
    )

    if (existingProductInCart) {
      await existingProductInCart.remove()
    }
    return this.getCartById(cartId)
  }

  checkIsQuantityValid(product: Proizvod, quantity: number): void {
    if (!product.kolicina || product.kolicina < quantity)
      throw new HttpError(
        404,
        `request quantity ${quantity} is larger then available product quantity(${product.kolicina})`,
      )
  }

  async purchaseCartById(
    cartId: number,
    buyerInformation: CartBuyerInformationRequest,
  ): Promise<Kosarica> {
    const cart = await this.getCartById(cartId)
    if (cart.obradjeno) {
      throw new HttpError(500, `Cart with id ${cartId} already processed`)
    }
    let dostava: Kupac | null = null
    if (buyerInformation.dostava) {
      dostava = await Kupac.CreateKupacFromBuyerInformation(
        buyerInformation.dostava,
      )
    }
    const kupac = await Kupac.CreateKupacFromBuyerInformation(
      buyerInformation.kupac,
    )
    if (dostava) {
      kupac.kupacDostava = dostava
      await kupac.save()
    }
    cart.kupac = kupac
    cart.obradjeno = true
    if (!cart.racun) {
      const racun = new Racun()
      racun.idUplate = randomUUID()
      racun.jir = randomUUID()
      racun.nacinPlacanja = new NacinPlacanja()
      racun.total = cart.total
      await racun.save()
      cart.racun = racun
    }
    await cart.save()
    return this.getCartById(cartId)
  }
  async clearCart(cartId: number): Promise<Kosarica> {
    let cart = await this.getCartById(cartId)
    await ProizvodKupac.remove(cart.proizvodKupacs)
    cart = await this.getCartById(cartId)
    await cart.UpdateTotal()
    return cart
  }
}

export default new CartService()
