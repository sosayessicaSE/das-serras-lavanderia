import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Image from "next/image";
import "../styles/globals.css"


export default function Servicos() {
  return (
    <div>
      <Header />
      <section className="mt-20">
            <h3 className="text-3xl font-bold text-center text-blue-600">
              Nossos <span className="text-blue-600">Serviços</span>
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Cuidado especializado para suas roupas do dia a dia, garantindo
              frescor e limpeza a cada lavagem.
            </p>
            <div className="flex justify-center items-center px-4 mt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center max-w-screen-lg">
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <Image
          src="/images/domestica.png"
          alt="Lavanderia"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <h4 className="mt-2 text-base font-semibold">Lavanderia doméstica</h4>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <Image
          src="/images/reparto.png"
          alt="Lavagem a Seco"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <h4 className="mt-2 text-base font-semibold">Reparto</h4>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <Image
          src="/images/industrial.png"
          alt="Limpeza de Sapatos"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <h4 className="mt-2 text-base font-semibold">Lavanderia Industrial</h4>
      </div>
    </div>
  </div>

          </section>
      <Footer />
    </div>
  );
}
