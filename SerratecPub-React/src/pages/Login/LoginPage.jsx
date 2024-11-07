import { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { InputEmail, InputSenha } from "../../components/Input/Input";
import { api } from "../../services/api";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const enviar = (event) => {
    event.preventDefault();
    getCliente();
  };
  useEffect(() => {
    const usuario = localStorage.getItem("@Auth:user");
    if (usuario) {
      setCliente(JSON.parse(usuario));
      navigate("/");
    }
    setLoading(false);
  }, [navigate]);

  const getCliente = async () => {
    try {
      api.get(`/clientes/login/${email}/${senha}`).then((response) => {
        if (response.data) {
          localStorage.setItem("@Auth:user", JSON.stringify(response.data));
          setCliente(JSON.stringify(response.data));
          alert(`BEM VINDO ${response.data.nome}`);
          navigate("/produto");
          setEmail("");
          setSenha("");
        } else {
          alert("Erro ao fazer Login", response.error);
        }
      });
    } catch (error) {
      console.error("erro no login:", error);
    }
  };

  const handleNavigation = () => navigate("/cadastro");
  if (loading) {
    return <div>Carregando....</div>;
  }
  return (
    <>
      <div className={styles.corpo}>
        <div id="logi" className={styles.loginWrapper}>
          <div className={styles.containerh2}>
            <h2 className={styles.h2}>Login</h2>
          </div>
          <form onSubmit={enviar}>
            <InputEmail
              className={styles.input}
              texto="Email: "
              placeholder="Digite seu email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <InputSenha
                className={styles.input}
                texto="Senha: "
                value={senha}
                placeholder="Digite sua senha:"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.buttonEntrar}>
              Entrar
            </button>
            <div className={styles.divCadastro}>
              <p>Não possui login?</p>
              <button
                onClick={handleNavigation}
                className={styles.buttonCadastro}
              >
                Cadastre-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
