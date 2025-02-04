import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPiggyBank, faClock } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  
  return (
    
    <div className="bg-gray-100">
      <Header />
      <main className="py-12">
      <div className="container mx-auto px-4 py-12">
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
    <div className="w-full md:w-1/2 text-center md:text-left bg-blue-200 p-8 md:p-12 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-blue-600 leading-tight tracking-wide">
        Cuidado e{" "}
        <span className="text-blue-800">Tradição</span>
        <br /> em Cada Detalhe
      </h2>

      <p className="mt-4 text-gray-600">
        Você pode utilizar nossos serviços da maneira que for mais
        conveniente – a escolha é sua.
      </p>
      <button className="mt-4 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
        <a href="
https://api.whatsapp.com/send?phone=5554997040128&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido%20de%20lavanderia.%20Como%20posso%20enviar%20minhas%20roupas%20para%20voc%C3%AAs%3F%20%F0%9F%98%8A " target="_blank">        Agende Seu Pedido
</a>
      </button>

      <div className="mt-6 flex space-x-6 text-gray-600 justify-center md:justify-start">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLeaf} className="h-6 w-6 text-green-500" />
          <span className="ml-2">Eco Friendly</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPiggyBank} className="h-6 w-6 text-blue-500" />
          <span className="ml-2">Economia de Dinheiro</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="h-6 w-6 text-yellow-500" />
          <span className="ml-2">Economia de Tempo</span>
        </div>
      </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-40 flex justify-center">
      <Image
  src="/images/laundry-image.png"
  alt="Serviço de Lavanderia"
  width={500}
  height={500}
  layout="intrinsic" 
  objectFit="cover"
  unoptimized={true}
  className="rounded-xl"
  priority
/>
      </div>
    </div>

          <section className="mt-12">
            <h3 className="text-3xl font-bold text-center text-blue-600">
              Nossos <span className="text-blue-600">Serviços</span>
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Cuidado especializado para suas roupas do dia a dia, garantindo
              frescor e limpeza a cada lavagem.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                <Image
                  src="/laundry.jpg"
                  alt="Lavanderia"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h4 className="mt-4 text-lg font-semibold">Lavanderia</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                <Image
                  src="/dry-cleaning.jpg"
                  alt="Lavagem a Seco"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h4 className="mt-4 text-lg font-semibold">Lavagem a Seco</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                <Image
                  src="/shoe-cleaning.jpg"
                  alt="Limpeza de Sapatos"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h4 className="mt-4 text-lg font-semibold">Limpeza de Sapatos</h4>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Anterior
              </button>
              <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Próximo
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
