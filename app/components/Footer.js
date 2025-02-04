import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto px-4 text-black" >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p>&copy; 2025 Lavanderia Das Serras</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center space-x-6 text-black">
              <li>
                <a
                  href="https://www.facebook.com/LavanderiaPicadaCafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/LavanderiaPicadaCafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@lavanderiapicadacafe.com.br"
                  className="hover:text-gray-400"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a
                  href="tel:+5554997040128"
                  className="hover:text-gray-400"
                >
                  (54) 99704-0128
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
