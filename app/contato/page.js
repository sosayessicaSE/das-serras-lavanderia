import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css"


export default function Contato() {
  return (
    <div>
      <Header />
      <main className="main">
        <h1>Entre em Contato</h1>
        <p>Telefone: (XXX) XXX-XXXX</p>
        <p>E-mail: info@lavanderiapicadacafe.com</p>
      </main>
      <Footer />
    </div>
  );
}
