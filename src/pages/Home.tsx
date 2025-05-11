import Navbar from "../components/navbar";
import SeeBelowButton from "../components/see-below-button";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-screen relative"> {/* Hero Section */}
                <div className="h-screen w-full bg-gray-900">
                    <img src={"/hero.jpg"} alt="Banner" className="w-full h-full object-cover opacity-70" />
                </div>
                <div className="absolute inset-0 mt-27 items-center justify-center px-4" style={{ paddingBottom: '8rem' }}>
                    <div className="relative z-10 bg-white bg-opacity-60 rounded-lg p-6 md:p-8 backdrop-blur-sm max-w-xl mx-auto">
                        <img src={"/banner.png"} alt="Innovate Pro Bono Logo" className="w-full h-full object-cover opacity-70" />
                    </div>
                    <div className="mt-16">
                        <SeeBelowButton section="about" />
                    </div>
                </div>
            </div>         
        </div>
    )
}