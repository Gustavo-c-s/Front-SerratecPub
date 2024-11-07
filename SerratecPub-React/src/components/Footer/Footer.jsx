import { useNavigate } from "react-router-dom";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);
  const handleHomeNavigation = () => handleNavigation("/");
  const handleSobreNavigation = () => handleNavigation("/sobre");
  const handleContatoNavigation = () => handleNavigation("/contato");
  const handleProdutoNavigation = () => handleNavigation("/produto");
  const handleClienteNavigation = () => handleNavigation("/cliente");
  const handleLoginNavigation = () => handleNavigation("/login");
  return (
    <div className={style.containerHeader}>
      <p>Todos os direitos reservados © Serratec Pub 2024</p>
      <nav>
        <ul className={style.containerNav}>
        
          <li>
            <button onClick={handleSobreNavigation} className={style.link}>
              Sobre
            </button>
          </li>
          
       
          <li>
            <button onClick={handleContatoNavigation} className={style.link}>
              Contato
            </button>
          </li>
          <button
            onClick={handleLoginNavigation}
            className={style.link}
          ></button>
        </ul>
      </nav>
      <FontAwesomeIcon
        onClick={() => (window.location.href = "https://www.facebook.com")}
        icon={faFacebook}
        className={style.icon}
      />
      <FontAwesomeIcon
        onClick={() => (window.location.href = "https://www.instagram.com")}
        icon={faInstagram}
        className={style.icon}
      />
    </div>
  );
}
