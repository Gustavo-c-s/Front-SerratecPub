import { useNavigate } from "react-router-dom";
import styles from './NotFoundPage.module.css'; 
import { Botao } from "../../components/Botao/Botao";
//import { Header } from "../../components/Header/Header"; 
//import { Footer } from "../../components/Footer/Footer"; 

export function NotFoundPage() {
  const navigate = useNavigate();
  const handleNavigation = () => navigate('/');
  
  return (
    <>
      <div className={styles.notfoundcontainer}>
        <h1 className={styles.notfoundTitle}>Erro 404</h1>
        <h2 className={styles.notfoundMessage}>Bebida...oops! Página não encontrada!</h2>
        <Botao handleClick={handleNavigation} texto="Voltar à página inicial"/>
      </div>
    </>
  );
};
