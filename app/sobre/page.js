import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css"

export default function Sobre() {
  return (
    <div>
      <Header />
      <main className="main">
        <h1>Sobre a Lavanderia Picada Café</h1>
        <p>Somos uma lavanderia localizada em Picada Café, Rio Grande do Sul, oferecendo serviços de qualidade para Nova Petrópolis e Picada Café.</p>
      </main>
      <Footer />
    </div>
  );
}
