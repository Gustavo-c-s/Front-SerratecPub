import { useState } from "react";
import img from "../../assets/images/SERRATECpub.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);
  const handleHomeNavigation = () => handleNavigation("/");
  const handleSobreNavigation = () => handleNavigation("/sobre");
  const handleContatoNavigation = () => handleNavigation("/contato");
  const handleProdutoNavigation = () => handleNavigation("/produto");
  const handleLoginNavigation = () => handleNavigation("/login");
  return (
    <>
      <header className="flex justify-between items-center text-white py-6 px-8 md:px-32 bg-neutral-900 drop-shadow-md">
        <img
          src={img}
          alt="Logo"
          className="w-32 hover:scale-105 transition-all cursor-pointer"
          onClick={handleHomeNavigation}
        />

        <ul className="hidden xl:flex items-center gap-20 font-semibold text-base">
          <li
            onClick={handleHomeNavigation}
            className="link p-3 transition-all cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={handleSobreNavigation}
            className="link p-3 transition-all cursor-pointer"
          >
            Sobre
          </li>
          <li
            onClick={handleProdutoNavigation}
            className="link p-3 transition-all cursor-pointer"
          >
            Produtos
          </li>
          <li
            onClick={handleContatoNavigation}
            className="link p-3 transition-all cursor-pointer"
          >
            Contato
          </li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3 hover:bg-amber-500 hover:rounded-full h-10 w-10">
          <i
            className="bx bxs-user cursor-pointer text-2xl"
            onClick={handleLoginNavigation}
          ></i>
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        <div
          className={`z-50 absolute xl:hidden top-24 left-0 w-full bg-neutral-900 flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100 z-50 " : "opacity-0 pointer-events-none "
          }`}
          style={{
            transition: "transform 0.3s ease, opcaity 0.3s ease",
            zIndex: 50,
          }}
        >
          <i
            className="bx bxs-user list-none w-full text-center p-4 hover:bg-amber-500 hover:text-white transition-all cursor-pointer text-2xl"
            onClick={handleLoginNavigation}
          ></i>
          <li
            onClick={handleHomeNavigation}
            className="list-none w-full text-center p-4 hover:bg-amber-500 hover:text-white transition-all cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={handleSobreNavigation}
            className="list-none w-full text-center p-4 hover:bg-amber-500 hover:text-white transition-all cursor-pointer"
          >
            Sobre
          </li>
          <li
            onClick={handleProdutoNavigation}
            className="list-none w-full text-center p-4 hover:bg-amber-500 hover:text-white transition-all cursor-pointer"
          >
            Produtos
          </li>
          <li
            onClick={handleContatoNavigation}
            className="list-none w-full text-center p-4 hover:bg-amber-500 hover:text-white transition-all cursor-pointer"
          >
            Contato
          </li>
        </div>
      </header>
    </>
  );
}
