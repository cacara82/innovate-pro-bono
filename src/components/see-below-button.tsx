// interface for button function
interface SeeBelowButtonProps {
    section?: string;
    onTourStart?: () => void;
}

export default function SeeBelowButton({ section = "#timeline-content", onTourStart }: SeeBelowButtonProps) {

    const sectionValue = section.startsWith("#") ? section : `#${section}`; // if section starts with #, will be the section, if not add it
    const handleClick = (e: React.MouseEvent) => { // handleClick to start tour
        e.preventDefault();
        const targetElement = document.querySelector(sectionValue); // If the target element exists, we scroll smoothly into it
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            setTimeout(() => { // Timeout for starting the tour
                onTourStart?.();
            }, 800);
        }

    };

    return (
        <div className="flex justify-center relative z-50">
            <button 
                onClick={handleClick}
                className="bg-[#031f3d] rounded-full p-2 animate-bounce duration-1500 mt-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                aria-label="Ver contenido y iniciar tour"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>
        </div>
    );
}