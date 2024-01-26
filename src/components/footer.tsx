export const Footer = () => {
  return (
    <footer className="bg-[#222222] sm:mt-10 pt-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="space-y-4">
            <h3 className="font-bold capitalize text-lg text-red-600">Dúvidas</h3>
            <div className='self-start border-t-2 border-red-600 mb-1 mt-2 w-6'></div>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Entregas
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Garantia
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Como comprar
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Formas de pagamento
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold capitalize text-lg text-red-600">Institucional</h3>
            <div className='self-start border-t-2 border-red-600 mb-1 mt-1 w-6'></div>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Quem somos?
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Nossa empresa
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Nossas Lojas
                </a>
              </li>
              
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold capitalize text-lg text-red-600">Ajuda</h3>
            <div className='self-start border-t-2 border-red-600 mb-1 mt-2 w-6'></div>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  SAC
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Fale conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:text-red-600 transition-all">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}