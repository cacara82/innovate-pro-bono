import Navbar from "../components/navbar";
import SeeBelowButton from "../components/see-below-button";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-screen relative overflow-hidden">
                <img src={"/hero.jpg"} alt="Banner" className="w-full h-full object-cover" />
                <div className="flex flex-col mt-10 absolute inset-0 flex items-center justify-center px-4" style={{ paddingBottom: '8rem' }}>
                    <div className="relative z-10 bg-white bg-opacity-60 rounded-lg p-6 md:p-8 backdrop-blur-sm max-w-lg mx-auto">
                        <img src="banner.png" alt="INNOVATE PRO BONO" />
                    </div>
                    <div className="mt-6">
                        <SeeBelowButton />
                    </div>
                </div>
            </div>
            <h1 className="font-montserrat text-6xl text-center text-[#031f3d] font-bold p-20">NADIE DEBERÍA EMPEZAR SOLO</h1>
            <div className="grid grid-cols-2 mb-10 mt-10">
                <div>
                    <img src="home1.jpg" alt="home1" />
                </div>
                <div className="flex flex-col justify-center p-5">
                    <h2 className="font-montserrat text-4xl text-center text-[#031f3d] font-semibold">CADA JOVEN CUENTA</h2>
                    <p className="text-center pt-7 pl-7 pr-7">En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas. Muchos jóvenes extutelados, al cumplir la mayoría de edad, se encuentran en una etapa decisiva sin una red de apoyo clara. Aunque existen ayudas, el acceso a los recursos y al acompañamiento real suele ser limitado. Por eso, creamos puentes entre ellos y las empresas, para que puedan desarrollar todo su potencial. Nuestro modelo no parte del asistencialismo, sino de la colaboración. Apostamos por la innovación social y por el compromiso de empresas que quieren generar impacto real. Con formación, mentoría y experiencia laboral, estos jóvenes no solo se insertan en el mercado laboral, sino que construyen un proyecto de vida autónomo, estable y con futuro. </p>
                </div>
                <div className="flex flex-col justify-center p-5">
                    <h2 className="font-montserrat text-4xl text-center text-[#031f3d] font-semibold">¿PORQUÉ NOSOTROS?</h2>
                    <p className="text-center pt-7 pl-7 pr-7">En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas. Muchos jóvenes extutelados, al cumplir la mayoría de edad, se encuentran en una etapa decisiva sin una red de apoyo clara. Aunque existen ayudas, el acceso a los recursos y al acompañamiento real suele ser limitado. Por eso, creamos puentes entre ellos y las empresas, para que puedan desarrollar todo su potencial. Nuestro modelo no parte del asistencialismo, sino de la colaboración. Apostamos por la innovación social y por el compromiso de empresas que quieren generar impacto real. Con formación, mentoría y experiencia laboral, estos jóvenes no solo se insertan en el mercado laboral, sino que construyen un proyecto de vida autónomo, estable y con futuro. </p>
                </div>
                <div>
                    <img src="home2.jpg" alt="home2" />
                </div>
            </div>
        </div>
    )
}