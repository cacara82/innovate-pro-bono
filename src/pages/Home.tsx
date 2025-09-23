import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SeeBelowButton from "../components/see-below-button";
import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import LearnMoreButton from "../components/know-more-button";

export default function Home() {

    // useEffect
    useEffect(() => {
        const driverObj = driver({ // driverObject config
            showProgress: true,
            steps: [
                {
                    element: '#timeline-section-1',
                    popover: {
                        title: 'CADA JOVEN CUENTA',
                        description: 'Dentro de cada joven existe un espíritu único que no siempre se puede explorar como se debería.',
                        side: "left",
                        align: 'start'
                    }
                },
                {
                    element: '#timeline-section-2',
                    popover: {
                        title: '¿POR QUÉ NOSOTROS?',
                        description: 'Porque sabemos que no todos nacemos con las mismas oportunidades.',
                        side: "right",
                        align: 'start'
                    }
                },
                {
                    element: '#timeline-section-3',
                    popover: {
                        title: 'NUESTRA MISIÓN',
                        description: 'Queremos dar apoyo para la formación profesional y académica de nuestro futuro.',
                        side: "left",
                        align: 'start'
                    }
                }
            ],
            nextBtnText: 'Siguiente →',
            prevBtnText: '← Anterior',
            doneBtnText: 'Finalizar'
        });

        // Driver accessible from any point of the current window
        (window as any).startTour = () => {
            driverObj.drive();
        };

        // Cleanup when destroying the driver component
        return () => {
            delete (window as any).startTour;
        };

    }, []);

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
                        <SeeBelowButton onTourStart={() => (window as any).startTour?.()} />
                    </div>
                </div>
            </div>
            
            <section className="w-full bg-white" id="timeline-content">
              
              <h1 className="font-montserrat text-3xl md:text-6xl text-center text-[#031f3d] font-bold py-16 my-8 mt-10 mb-15">
                NADIE DEBERÍA EMPEZAR SOLO
              </h1>
              <div className="relative max-w-6xl mx-auto px-6 md:px-4 pb-16"> 
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#031f3d] -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                
                {/* TIMELINE GROUP 1 */}
                <div className="relative mb-16 md:mb-20 group" id="timeline-section-1">
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#031f3d] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 items-center"> 
                    <div className="md:pr-4"> 
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none rounded-lg overflow-hidden shadow-md">
                        <img src="home1.jpg" alt="Cada joven cuenta" className="w-full h-auto object-cover hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform" />
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

                {/* TIMELINE GROUP 2 */}
                <div className="relative mb-16 md:mb-20 group" id="timeline-section-2">
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
                          Porque acogemos a menores extutelados para ofrecerles oportunidades reales de crecimiento personal y profesional, confiando en su potencial y acompañándolos en su camino hacia una vida autónoma.
                        </p>
                      </div>
                    </div>
                    <div className="md:pl-4 order-1 md:order-2">
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none rounded-lg overflow-hidden shadow-md">
                        <img src="home2.jpg" alt="¿Por qué nosotros?" className="w-full h-auto object-cover hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* TIMELINE GROUP 3 */}
                <div className="relative mb-16 md:mb-20" id="timeline-section-3">
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#031f3d] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 items-center">
                    <div className="md:pr-4">
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none rounded-lg overflow-hidden shadow-md">
                        <img src="home3.jpg" alt="Nuestra misión" className="w-full h-auto object-cover hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform" />
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:pl-4">
                      <div className="mx-auto max-w-md md:mx-0 md:max-w-none flex flex-col justify-center">
                        <h2 className="font-montserrat text-2xl md:text-3xl text-center md:text-left text-[#031f3d] font-bold italic mb-4">
                          NUESTRA MISIÓN
                        </h2>
                        <p className="text-center md:text-left font-titillium text-lg">
                          Nos dedicamos a crear redes de apoyo y oportunidades significativas para que cada joven pueda desarrollar su potencial mediante un equipo de profesionales adaptados a sus necesidades.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-[#031f3d] mt-20 pb-20">
              <h2 className="text-white font-montserrat text-3xl md:text-5xl text-center font-bold py-16 my-8 mt-15 mb-5 md:pt-25">SABEMOS QUE...</h2>
              <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
                <p className="text-white text-center text-lg font-semibold flex items-center mb-20 mt-10 ms-20 me-20">Solo el 4% de jóvenes extutelados logra acceder a estudios universitarios. La mayoría enfrenta la necesidad de emanciparse de forma acelerada entre los 21 y 23 años, muchas veces sin contar con una red familiar o un soporte económico sólido.</p>
                <img src="sabemos-que-1.png" alt="Sabemos que 1" className="md:w-full md:mb-20 rounded-xl md:flex md:items-center md:max-w-sm md:mx-auto md:block hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform px-5 pe-5 mb-10" />
                <img src="sabemos-que-2.png" alt="Sabemos que 2" className="md:w-full rounded-xl flex md:items-center md:max-w-sm md:mx-auto md:block hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform px-5 pe-5" />
                <p className="text-white text-center text-lg font-semibold flex items-center mb-10 mt-10 ms-20 me-20">Los jóvenes extutelados se enfrentan a la creación de barreras psicosociales que dificultan su desarrollo personal y profesional. Con frecuencia, acceden únicamente a empleos temporales incluso cuando cuentan con una cualificación que podría abrirles otras oportunidades más estables.</p>
              </div>
            </div>

            <p className="font-montserrat text-2xl md:text-3xl text-center font-bold py-16 my-8 mt-15 ms-20 me-20">Si todos somos iguales ante la Ley, <u>¿por qué siguen existiendo barreras que impiden a muchos jóvenes extutelados acceder a las mismas oportunidades que el resto?</u></p>
            <LearnMoreButton href="/nuestra-mision" />

            <div className="mt-20">
              <Footer />
            </div>
        </div>
    )
}