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
            <h1 className="font-montserrat text-7xl text-center text-[#031f3d] font-bold p-20">NADIE DEBERÍA EMPEZAR SOLO</h1>
            <div className="grid grid-cols-2 mb-10 mt-10">
                <div>
                    <img src="home1.jpg" alt="home1" />
                </div>
                <div className="flex flex-col justify-center p-5">
                    <h2 className="font-montserrat text-4xl text-center text-[#031f3d] font-bold"><i>CADA JOVEN CUENTA</i></h2>
                    <p className="text-center font-titillium text-xl pt-7 pl-7 pr-7 font-semibold">En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas. </p>
                </div>
                <div className="flex flex-col justify-center p-5">
                    <h2 className="font-montserrat text-4xl text-center text-[#031f3d] font-semibold"><i>¿PORQUÉ NOSOTROS?</i></h2>
                    <p className="text-center font-titillium text-xl pt-7 pl-7 pr-7 font-semibold">En INNOVATE Pro-Bono partimos de una convicción: cada joven tiene talento, energía y capacidad para llegar lejos, si cuenta con las oportunidades adecuadas. </p>
                </div>
                <div>
                    <img src="home2.jpg" alt="home2" />
                </div>
            </div>
        </div>
    )
}