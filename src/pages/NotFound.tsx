import Footer from "../components/footer";
import LearnMoreButton from "../components/know-more-button";
import Navbar from "../components/navbar";

export default function NotFound() {
    return(
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col items-center justify-center px-4 py-16 flex-1">
               
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                    <img src="not-found.gif" alt="Página no encontrada" />
                </div>
               
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-4" style={{color: '#031f3d'}}>
                    404. Te has topado con un error
                </h1>
               
                <p className="text-lg md:text-xl text-center mb-8 max-w-2xl" style={{color: '#031f3d'}}>
                    Ups! Parece que esta página no existe.
                </p>
               
                <p className="text-sm md:text-base text-center opacity-70" style={{color: '#031f3d'}}>
                    Comprueba que hayas escrito bien el enlace, o vuelve a la página principal.
                </p>

                <div className="mt-5">
                    <LearnMoreButton text="Volver" href={"/"} />
                </div>

            </div>
            <Footer />
        </div>
    );
}