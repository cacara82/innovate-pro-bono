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
            <div className="w-full bg-white">
  <h1 className="font-montserrat text-4xl md:text-6xl text-center text-[#031f3d] font-bold py-16 my-8 transition-all duration-300 hover:tracking-wider hover:text-5xl md:hover:text-7xl">
    NADIE DEBERÍA EMPEZAR SOLO
  </h1>
  
  <div className="relative max-w-6xl mx-auto px-4">
    <div className="absolute left-1/2 w-0.5 h-full bg-[#031f3d] hidden md:block"></div>
    
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-20">
      <div className="md:pr-10">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
          <img src="home1.jpg" alt="Cada joven cuenta" className="w-full" />
        </div>
      </div>
      
      <div className="flex flex-col justify-center">
        <h2 className="font-montserrat text-2xl md:text-3xl text-center md:text-left text-[#031f3d] font-bold italic mb-4">
          CADA JOVEN CUENTA
        </h2>
        <p className="text-center md:text-left font-titillium text-lg">
          En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas.
        </p>
      </div>
    </div>
    
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-20">
      <div className="flex flex-col justify-center order-2 md:order-1">
        <h2 className="font-montserrat text-2xl md:text-3xl text-center md:text-right text-[#031f3d] font-bold italic mb-4">
          ¿POR QUÉ NOSOTROS?
        </h2>
        <p className="text-center md:text-right font-titillium text-lg">
          En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas.
        </p>
      </div>
      
      <div className="md:pl-10 order-1 md:order-2">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
          <img src="home2.jpg" alt="¿Por qué nosotros?" className="w-full" />
        </div>
      </div>
    </div>

    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-20">
      <div className="md:pr-10">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
          <img src="imagen3.jpg" alt="Nuestra misión" className="w-full" />
        </div>
      </div>
      
      <div className="flex flex-col justify-center">
        <h2 className="font-montserrat text-2xl md:text-3xl text-center md:text-left text-[#031f3d] font-bold italic mb-4">
          NUESTRA MISIÓN
        </h2>
        <p className="text-center md:text-left font-titillium text-lg">
          Nos dedicamos a crear redes de apoyo y oportunidades significativas para que cada joven pueda desarrollar su potencial.
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}