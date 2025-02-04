import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css"

export default function Sobre() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-semibold text-blue-600">
      Sobre <span className="text-blue-800">Nós</span>
    </h2>
    <p className="mt-4 text-gray-600">
      Na [Nome da Empresa], oferecemos serviços de lavanderia e limpeza a seco de alta qualidade, garantindo que suas roupas recebam o cuidado e a atenção que merecem. Nossa equipe dedicada utiliza técnicas avançadas e produtos ecológicos para assegurar a satisfação de nossos clientes.
    </p>
    <div className="mt-6 flex justify-center space-x-4">
      <div className="w-1/3">
        <img
          src="https://unsplash.com/photos/3k9PGKWt7ik/download?force=true&w=640"
          alt="Funcionário da lavanderia passando camisa"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="w-1/3">
        <img
          src="https://unsplash.com/photos/8manzosDSGM/download?force=true&w=640"
          alt="Roupas limpas penduradas"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="w-1/3">
        <img
          src="https://unsplash.com/photos/6bKpHAun4d8/download?force=true&w=640"
          alt="Máquina de lavar roupa industrial"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
    <a
      href="/sobre"
      className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
    >
      Saiba Mais
    </a>
  </div>
</section>
      <Footer />
    </div>
  );
}
