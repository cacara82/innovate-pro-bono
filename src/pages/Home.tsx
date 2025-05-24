import Footer from "../components/footer";
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
            
            <section className="w-full bg-white">
              <h1 className="font-montserrat text-3xl md:text-6xl text-center text-[#031f3d] font-bold py-16 my-8 transition-all duration-300 hover:tracking-wider">
                NADIE DEBERÍA EMPEZAR SOLO
              </h1>
              <div className="relative max-w-6xl mx-auto px-6 md:px-4 pb-16"> 
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#031f3d] -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                <div className="relative mb-16 md:mb-20 group">
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#031f3d] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 items-center"> 
                    <div className="md:pr-4"> 
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none rounded-lg overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <img src="home1.jpg" alt="Cada joven cuenta" className="w-full h-auto object-cover" />
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:pl-4">
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none flex flex-col justify-center">
                        <h2 className="font-montserrat text-2xl md:text-3xl text-center md:text-left text-[#031f3d] font-bold italic mb-4">
                          CADA JOVEN CUENTA
                        </h2>
                        <p className="text-center md:text-left font-titillium text-lg">
                          En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mb-16 md:mb-20 group">
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#031f3d] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 items-center">
                    <div className="md:pr-4 order-2 md:order-1"> 
                      <div className="mt-6 md:mt-0 mx-auto max-w-md md:mx-0 md:max-w-none flex flex-col justify-center">
                        <h2 className="font-montserrat text-2xl md:text-3xl text-center md:text-right text-[#031f3d] font-bold italic mb-4">
                          ¿POR QUÉ NOSOTROS?
                        </h2>
                        <p className="text-center md:text-right font-titillium text-lg">
                          En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas.
                        </p>
                      </div>
                    </div>
                    <div className="md:pl-4 order-1 md:order-2">
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none rounded-lg overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <img src="home2.jpg" alt="¿Por qué nosotros?" className="w-full h-auto object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mb-16 md:mb-20 group">
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#031f3d] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 items-center">
                    <div className="md:pr-4">
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none rounded-lg overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <img src="home3.jpg" alt="Nuestra misión" className="w-full h-auto object-cover" />
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:pl-4">
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none flex flex-col justify-center">
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
            </section>

            <div className="mt-20">
              <Footer />
            </div>
        </div>
    )
}