export default function Footer() {
    return (
        <footer className="w-full bg-[#031f3d] text-gray-300 py-8 text-center">
            <div className="max-w-3xl mx-auto px-4"> {/* Contenedor para limitar el ancho del contenido y añadir padding */}
                <p className="text-sm mb-3">
                &copy; {new Date().getFullYear()} Innovate Pro-Bono. Todos los derechos reservados.
                </p>
                <nav className="space-x-4 text-xs">
                <a href="/politica-privacidad" className="hover:text-white hover:underline">Política de Privacidad</a>
                <a href="/aviso-legal" className="hover:text-white hover:underline">Aviso Legal</a>
                <a href="/contacto" className="hover:text-white hover:underline">Contacto</a>
                {/* Puedes añadir más enlaces esenciales si es necesario, pero mantenlo breve */}
                </nav>
            </div>
        </footer>
    );
}