import { faGithub } from "@fortawesome/free-brands-svg-icons";
import gustavoFt from "../../assets/images/gustavoFt.jpeg";
import murilo from "../../assets/images/murilo.jpg";
import renataFt from "../../assets/images/renataFt.jpeg";
import isabellaFt from "../../assets/images/isabellaFt.jpeg";
import eduardaFt from "../../assets/images/eduardaFt.jpeg";
import lucasFt from "../../assets/images/lucasFt.jpeg";
import thiago from "../../assets/images/thiago.png";
import {
  FotoMembro,
  Membro,
  Descricao,
  ImagemMembro,
  GithubIcon,
  Nome,
} from "./Sobre.js";
import Garcom from "../../assets/images/Garcom.jpg";

export function SobrePage() {
  return (
    <FotoMembro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/gustavo-c-s-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={gustavoFt} alt="Gustavo" />
        </a>
        <Descricao>
          <Nome>Gustavo Santos</Nome>
          <br />
          Mestre do Café e das Noites em Claro
          <a
            href="https://github.com/Gustavo-c-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/murilobongard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={murilo} alt="Murilo" />
        </a>
        <Descricao>
          <Nome>Murilo Bongard</Nome>
          <br />
          Rei das Noites de Código e Happy Hours
          <a
            href="https://github.com/murilobongard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/lucas-c-071903265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={lucasFt} alt="Lucas" />
        </a>
        <Descricao>
          <Nome>Lucas Coco</Nome>
          <br />
          UX Designer e Degustador Oficial de Brejas
          <a
            href="https://github.com/lucauxs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/eduarda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={eduardaFt} alt="Eduarda" />
        </a>
        <Descricao>
          <Nome>Eduarda Goulart</Nome>
          <br />
          Especialista em DevOps e Rodadas de Chopp
          <a
            href="https://github.com/Eduarda-goular"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/isabellaoliveira-pinheiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={isabellaFt} alt="Isabella" />
        </a>
        <Descricao>
          <Nome>Isabella Pinheiro</Nome>
          <br />
          Caçadora de Bugs e Entusiasta dos Drinks Exóticos
          <a
            href="https://github.com/isb-op"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/rerodrigs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={renataFt} alt="Renata" />
        </a>
        <Descricao>
          <Nome>Renata Rodrigues</Nome>
          <br />
          Fullstack das Linhas de Código e da Caipirinha
          <a
            href="https://github.com/itsrerodrigs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/thiago-branco-nf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={thiago} alt="Thiago" />
        </a>
        <Descricao>
          <Nome>Thiago Branco</Nome>
          <br />
          Project Manager e Sommelier de Cervejas Artesanais
          <a
            href="https://github.com/thiagobranconf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
        <ImagemMembro src={Garcom} alt="Garcom" />
        </a>
        <Descricao>
          <Nome>Clerinton Savio</Nome>
          <br />
          Eu entrego e me humilho pra receber dinheiro de gorjeta
        </Descricao>
      </Membro>
    </FotoMembro>
  );
}
