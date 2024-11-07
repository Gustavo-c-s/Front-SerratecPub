import style from "./ContatoPage.module.css";
import efeito from "../../assets/images/efeito-1.png";

export function ContatoPage() {
  return (
    <>
      <main className={style.main}>
        <h1>FALE COM A GENTE</h1>
        <img src={efeito} alt="efeito" />
      </main>
      <div className={style.contactcontainer}>
        <div className={style.contactcontent}>
          <div className={style.contactform}>
            <h2>
              Mande a sua
              <br />
              mensagem
            </h2>
            <div className={style.imagem}>
              <img src={efeito} alt="efeito" />
            </div>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="tel" placeholder="Telefone" />
              <textarea placeholder="Texto"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className={style.contactinfo}>
            <h2>HORÁRIO DE FUNCIONAMENTO</h2>
            <p>De terça a quarta, das 16h portaria fecha 00h</p>
            <p>Quinta a sábado, das 16h portaria fecha 1h30</p>
            <p>Domingo, das 15h portaria fecha 00h</p>
            <div className={style.horario}>
              <img src={efeito} alt="efeito" />
            </div>
            <h2>TELEFONES</h2>
            <p>+55 (24) 1557 7894</p>
            <p>+55 (21) 2354 7845</p>
            <div className={style.horario}>
              <img src={efeito} alt="efeito" />
            </div>
            <h2>INFORMAÇÕES</h2>
            <p>Permitida a entrada somente de maiores de 18 anos.</p>
            <p>Homens não é permitido a entrada vestindo regatas.</p>
            <p>Cobramos 10% de taxa de serviço.</p>
            <p>
              Aceitamos as seguintes formas de pagamento: Cartões – American
              Express, Visa, Mastercard, Dinners Club, Rede Maestro, Visa
              Electron, Rede Shop e Elo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
