export default function Footer() {
    return (
        <footer className="w-full bg-[#031f3d] text-gray-300 py-8 text-center">
            <div className="max-w-3xl mx-auto px-4 mb-5">
                <nav className="space-x-4 text-sm">
                    <a href="/legal" className="hover:text-white hover:underline">Política de Privacidad</a>
                    <a href="/legal" className="hover:text-white hover:underline">Aviso Legal</a>
                    <a href="mailto:cacara890@gmail.com" className="hover:text-white hover:underline">Contacto</a>
                </nav>
            </div>
            <p className="text-xs"><strong>
                &copy; {new Date().getFullYear()} Innovate Pro Bono & Asociados. Todos los derechos reservados. {/* Year by Date object to auto numerate */}
            </strong></p>
        </footer>
    );
}