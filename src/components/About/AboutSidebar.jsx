import { images } from '../../assets/images.js';
import { AsideBlogDetail } from '../Home/AsideBlogDetail.jsx';

function AboutSidebar({title}) {
    return (
        <div className="moreblog">
            <h2 className="secondary-font main-text-color">{title}</h2>
            
            <AsideBlogDetail 
                title={"Sretni blagdani!"} 
                image={"blogprev1"}
                url={"/blog/1"} 
                content={"Dragi naši posjetitelji, blagdani su stigli, a mi smo ovdje kako bismo vam olakšali pronalazak savršenih poklona za vaše najdraže. Bez obzira tražite li inovativne gadgete, vrhunsku elektroniku ili modernu opremu za pametni dom, naša pažljivo odabrana ponuda jamči da ćete pronaći nešto posebno za svakoga na vašem popisu."}
                />

            <AsideBlogDetail 
                title={"Rad od doma: kako cyber proizvodi čine radnu svakodnevicu efikasnijom"}
                image={"blogprev2"}
                url={"/blog/2"}
                content={"U današnjem sveprisutnom radu od doma, važno je opremiti svoj radni prostor najnovijom tehnologijom kako biste postigli najbolje rezultate. U ovom blogu, istražujemo kako naš cyber shop može unaprijediti vašu radnu svakodnevicu. Od ergonomskih stolica i pametnih monitora do brzih Wi-Fi usmjerivača, pronađite proizvode koji će poboljšati vašu produktivnost i olakšati rad od doma."}
                />
        </div>
    );
}

export { AboutSidebar };
