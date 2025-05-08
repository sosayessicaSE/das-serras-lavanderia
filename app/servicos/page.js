import { BadgeDollarSign, Clock, Factory, Home, MessageCircle, Truck } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

export default function Servicos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Header />
      
      {/* Promoções Section */}
      <section className="pt-24 pb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-center mb-4 drop-shadow-lg">
          Promoções Semanais
        </h2>
        <div className="flex justify-center mb-10">
          <span className="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-200"></span>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-6xl w-full">
            {/* Monday Promotion */}
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100">
              <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Segunda-feira
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Promoção de Edredom</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$80</span>
                <span className="text-blue-500 font-extrabold text-4xl">R$70</span>
              </div>
              <p className="text-gray-600 text-sm">Por peça</p>
            </div>

            {/* Tuesday Promotion */}
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100">
              <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Terça-feira
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Promoção de Sábanas</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$30</span>
                <span className="text-blue-500 font-extrabold text-4xl">R$25</span>
              </div>
              <p className="text-gray-600 text-sm">6 sábanas (sem passar)</p>
            </div>

            {/* Friday Promotion */}
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100">
              <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Sexta-feira
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Promoção de Roupas</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$25</span>
                <span className="text-blue-500 font-extrabold text-4xl">R$22</span>
              </div>
              <p className="text-gray-600 text-sm">Lavagem de 3 kilos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-center mb-4 drop-shadow-lg">
          Nossos Serviços
        </h2>
        <div className="flex justify-center mb-10">
          <span className="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-200"></span>
        </div>
       
        <div className="flex justify-center items-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-6xl w-full">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100 flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Home className="w-8 h-8 text-blue-500" />
              </div>
             
              <h4 className="text-lg font-bold text-blue-500 mb-2">Lavanderia Doméstica</h4>
              <div className="w-full mb-4 mt-8 ">
                <div className="grid grid-cols-2 gap-x-6">
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">LAVAGEM</span>
                    <span className="block text-xs text-gray-400">(3 KILOS)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$25</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">LAVAGEM</span>
                    <span className="block text-xs text-gray-400">(1 PEÇA)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$10</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">SECAGEM</span>
                    <span className="block text-xs text-gray-400">(3 KILOS)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$20</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">SECAGEM</span>
                    <span className="block text-xs text-gray-400">(1 KILO)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$10</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">CLAREAMENTO</span>
                    <span className="block text-xs text-gray-400">(1 PEÇA)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$15</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">TIRA-MANCHAS</span>
                    <span className="block text-xs text-gray-400">(1 PEÇA)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$15</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">EDREDOM</span>
                    <span className="block text-xs text-gray-400">(1 PEÇA)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$80</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">TERNOS</span>
                    <span className="block text-xs text-gray-400">(COMPLETO)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$70</div>
                  <div className="text-left mb-4">
                    <span className="font-bold text-gray-700">TÊNIS</span>
                    <span className="block text-xs text-gray-400">(1 PEÇA)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right mb-4">R$25</div>
                  <div className="text-left">
                    <span className="font-bold text-gray-700">VESTIDO</span>
                    <span className="block text-xs text-gray-400">(1 PEÇA)</span>
                  </div>
                  <div className="text-blue-500 font-extrabold text-2xl text-right">R$70-100</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100 flex flex-col items-center text-left">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Truck className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-bold text-blue-500 mb-1 text-left w-full">Serviço de Recolhimento e Entrega</h4>
              <div className="text-blue-400 font-semibold text-sm mb-4 text-center w-full">Retiramos e entregamos suas roupas com comodidade!</div>
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <BadgeDollarSign className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-blue-500 text-xs">VALORES</span>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm">
                  <div className="text-left">Recolher e entregar:</div>
                  <div className="text-blue-500 font-extrabold text-xl text-right">R$ 25</div>
                  <div className="text-left">Apenas recolher ou apenas entregar:</div>
                  <div className="text-blue-500 font-extrabold text-xl text-right">R$ 15</div>
                </div>
              </div>
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-blue-500 text-xs">HORÁRIOS DE ENTREGA</span>
                </div>
                <div className="text-gray-700 text-sm">
                  <div>Segunda a sexta: <span className="font-semibold">18h às 19h</span></div>
                  <div>Sábado: <span className="font-semibold">13h às 14h</span></div>
                </div>
              </div>
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-blue-500 text-xs">COMUNICAÇÃO</span>
                </div>
                <ul className="space-y-2 mb-1 pl-2 text-left">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">Entramos em contato por SMS ou WhatsApp:</li>
                  <ul className="ml-8 space-y-1 text-xs text-blue-400 text-left">
                    <li className="flex items-start gap-2"> <span className="w-2 h-2 mt-2 rounded-full bg-blue-200 inline-block"></span> Uma mensagem pela manhã </li>
                    <li className="flex items-start gap-2"> <span className="w-2 h-2 mt-2 rounded-full bg-blue-200 inline-block"></span> Outra 30 minutos antes da entrega </li>
                  </ul>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">Ligamos ao chegar para garantir que a entrega seja feita com sucesso.</li>
                </ul>
              </div>
              
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100 flex flex-col items-center text-left">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Factory className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-bold text-blue-500 mb-2 w-full text-center">Lavanderia Industrial</h4>
              <div className="text-blue-400 font-semibold text-sm mb-4 w-full text-center">Especializada para hotéis, empresas e grandes volumes.</div>
              {/* Hotel Room Package */}
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="font-bold text-blue-500 text-xs mb-2">PACOTE PARA HOTÉIS</div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 text-sm">Todos os elementos de uma habitação/quarto de hotel <span className='text-gray-400'>(ex: 2 lençóis, 2-4 fronhas de almofada, 2-4 toalhas)</span></span>
                    <span className="text-blue-500 font-extrabold text-xl text-right min-w-[70px]">R$ 35</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">Cliente recorrente (por pacote):</span>
                    <span className="text-blue-500 font-extrabold text-xl text-right min-w-[70px]">R$ 30</span>
                  </div>
                </div>
              </div>
              {/* Sabanas Pricing */}
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="font-bold text-blue-500 text-xs mb-2">LAVAGEM DE SABANAS</div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 text-sm">6 sabanas (sem passar):</span>
                    <span className="text-blue-500 font-extrabold text-xl text-right min-w-[70px]">R$ 30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">6 sabanas (passadas):</span>
                    <span className="text-blue-500 font-extrabold text-xl text-right min-w-[70px]">R$ 35</span>
                  </div>
                </div>
              </div>
              {/* Uniforme de Trabalho */}
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="font-bold text-blue-500 text-xs mb-2">LAVAGEM DE UNIFORME DE TRABALHO</div>
                <div className="text-gray-700 text-sm mb-2">Serviço especializado para empresas, indústrias e estabelecimentos comerciais.</div>
                <div className="text-sm text-blue-400">Entre em contato para um orçamento personalizado.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
