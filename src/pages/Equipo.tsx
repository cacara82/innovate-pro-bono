import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Equipo() {
    return (
        <div>
            <Navbar />

            <h1 className="font-montserrat text-3xl md:text-5xl text-center text-[#031f3d] font-bold m-16">
                CONÓCENOS
            </h1>

            <div className="bg-gray-400 m-10 rounded-xl">
                <div className="md:grid md:grid-cols-2 md:grid-rows-1 gap-2 p-5">
                    
                    <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="" className="w-50" />
                    <div>
                        <h2 className="">
                            JAIME MOROS GONZÁLEZ
                        </h2>
                        <h3 className="italic semibold">
                            Founder & CEO
                        </h3>
                        <p>
                            Jaime es un apasionado de la justicia social que...
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="bg-gray-400 m-10 rounded-xl">
                <div className="md:grid md:grid-cols-2 md:grid-rows-1 gap-2 p-5">
                    
                    <div>
                        <h2>
                            PERSONA 2
                        </h2>
                        <h3 className="italic semibold">
                            Cargo 2
                        </h3>
                        <p>
                            Profesional apasionada por la gestión de proyectos...
                        </p>
                    </div>
                    <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="" className="w-50" />
                    
                </div>
            </div>

            <div className="bg-gray-400 m-10 rounded-xl">
                <div className="md:grid md:grid-cols-2 md:grid-rows-1 gap-2 p-5">
                    
                    <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="" className="w-50" />
                    <div>
                        <h2 className="">
                            CARLOS CARVAJAL RAMOS
                        </h2>
                        <h3 className="italic semibold">
                            Responsable de Desarrollo Web
                        </h3>
                        <p>
                            Carlos empezó como Responsable del Desarrollo Web de Innovate Pro-Bono cuando...
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="bg-gray-400 m-10 rounded-xl">
                <div className="md:grid md:grid-cols-2 md:grid-rows-1 gap-2 p-5">
                    
                    <div>
                        <h2>
                            PERSONA 4
                        </h2>
                        <h3 className="italic semibold">
                            Cargo 4
                        </h3>
                        <p>
                            Graduado en Ciencias Empresariales - Management en la <i>Universitat Pompeu Fabra</i> con mención...
                        </p>
                    </div>
                    <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="" className="w-50" />
                    
                </div>
            </div>

            <Footer />
        </div>
    )
}