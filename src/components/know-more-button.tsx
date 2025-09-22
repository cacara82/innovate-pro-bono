interface LearnMoreButtonProps {
    href: string;
    text?: string;
}

export default function LearnMoreButton({ href, text = "Aprende más" }: LearnMoreButtonProps) {
    const handleClick = () => {
        window.location.href = href;
    };

    return (
        <div className="flex justify-center relative z-50">
            <button
                onClick={handleClick}
                className="bg-[#031f3d] text-white rounded-full px-6 py-3 mt-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex items-center gap-2 hover:bg-[#042a52]"
                aria-label={`${text}`}
            >
                <span className="text-sm font-medium">{text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}