
export default function SeeBelowButton({section = "#"}) {

    // Section attribute value
    const sectionValue = section.startsWith("#") ? section : `#${section}`;

    return (
        <div className="flex justify-center relative z-50">
            <a href={sectionValue} className="bg-[#031f3d] rounded-full p-2 animate-bounce duration-1500 mt-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </div>
    )
}