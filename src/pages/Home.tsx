import Navbar from "../components/navbar";
import SeeBelowButton from "../components/see-below-button";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-screen relative overflow-hidden">
                <img src={"/hero.jpg"} alt="Banner" className="w-full h-full object-cover" />
                <div className="flex flex-col absolute inset-0 flex items-center justify-center px-4" style={{ paddingBottom: '8rem' }}>
                    <div className="relative z-10 bg-white bg-opacity-60 rounded-lg p-6 md:p-8 backdrop-blur-sm max-w-lg mx-auto">
                        <img src="banner.png" alt="INNOVATE PRO BONO" />
                    </div>
                    <div>
                        <SeeBelowButton />
                    </div>
                </div>
            </div>
        </div>
    )
}