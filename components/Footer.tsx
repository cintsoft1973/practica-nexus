export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
        <p>
          &copy; {currentYear} Mi Aplicación. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-4 mt-2 text-sm">
          <a href="#" className="hover:text-blue-600">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-blue-600">
            Contacto: Rakso of the king Cel. 72421056
          </a>
        </div>
      </div>
    </footer>
  );
}
