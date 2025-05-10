import Navbar from "../components/navbar";

export default function Home() {
    return (
        <div>
            
            <Navbar />
        <div className="w-full h-screen relative overflow-hidden"> {/* Hero Section */}
            <div className="h-screen w-full bg-gray-900">
                <img src={"/hero.jpg"} alt="Innovate Pro Bono" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="absolute inset-0 mt-10 flex items-center justify-center px-4" style={{ paddingBottom: '8rem' }}>
                <div className="relative z-10 bg-white bg-opacity-60 rounded-lg p-6 md:p-8 backdrop-blur-sm max-w-xl mx-auto">
                    <img src={"/banner.png"} alt="MotoGP scene" className="w-full h-full object-cover opacity-70" />
                </div>
            </div>
        </div>
        </div>
        
    )
}