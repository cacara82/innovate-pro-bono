import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function UnderConstruction() {
    return(
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center px-4 py-16 min-h-[60vh]">
                
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Imagen placeholder</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-4" style={{color: '#031f3d'}}>
                    Página en construcción
                </h1>
                
                <p className="text-lg md:text-xl text-center mb-8 max-w-2xl" style={{color: '#031f3d'}}>
                    Ups! Parece que esta página aún está en construcción...
                </p>
                
                <p className="text-sm md:text-base text-center opacity-70" style={{color: '#031f3d'}}>
                    Vuelve pronto para más novedades de Innovate Pro-Bono!
                </p>
            </div>
            <Footer />
        </div>
    );
}