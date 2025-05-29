export default function Footer() {
    return (
        <footer className="w-full bg-[#031f3d] text-gray-300 py-8 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <p className="text-sm mb-3">
                    &copy; {new Date().getFullYear()} Innovate Pro-Bono. Todos los derechos reservados. {/* Year by Date object to auto numerate */}
                </p>
                <nav className="space-x-4 text-xs">
                    <a href="/legal" className="hover:text-white hover:underline">Política de Privacidad</a>
                    <a href="/legal" className="hover:text-white hover:underline">Aviso Legal</a>
                    <a href="mailto:cacara890@gmail.com" className="hover:text-white hover:underline">Contacto</a>
                </nav>
            </div>
        </footer>
    );
}