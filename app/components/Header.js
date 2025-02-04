import Link from "next/link";
import "../styles/globals.css"; 
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="image-container relative w-full h-[600px]"> {/* Adjust height here */}
      <Image
  src="/images/portada.png"
  alt="Lavanderia Das Serras"
  layout="intrinsic"
  width={1500}
  height={600}
  objectFit="cover"  
  unoptimized={true}
  className="header-image"
/>


      </div>

      <Image
        src="/images/uruguai.png"
        alt="Lavanderia Das Serras"
        layout="intrinsic"
        width={1500}
        height={600}
        objectFit="cover"
          unoptimized={true}

        className="uruguay-flag"
      />

      <nav>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre nós</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
