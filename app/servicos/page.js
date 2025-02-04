import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import "../styles/globals.css"


export default function Servicos() {
  return (
    <div>
      <Header />
      <main className="main">
        <h1>Nossos Serviços</h1>
        <div className="services">
          <ServiceCard 
            title="Lavagem de roupas"
            description="Lavagem e secagem rápida e eficiente."
            imageUrl="/images/lavagem.jpg"
          />
          <ServiceCard 
            title="Passadoria"
            description="Passamos suas roupas com precisão."
            imageUrl="/images/passadoria.jpg"
          />
          <ServiceCard 
            title="Limpeza de tapetes"
            description="Limpeza especializada para seus tapetes."
            imageUrl="/images/tapete.jpg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
