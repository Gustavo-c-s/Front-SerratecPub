import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FotoMembro = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8.6vh;
  padding: 60px;
  margin-left: 10%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin-left: 25%;
    padding: 8px;
    margin-left: 20%;
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;
export const Membro = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const ImagemMembro = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const Descricao = styled.div`
  font-size: larger;
  color: #555;
  font-family: Arvo, serif;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Nome = styled.span`
  font-family: Arvo, serif;
  font-weight: bold;
  color: #555;
`;

export const GithubIcon = styled(FontAwesomeIcon)`
  color: #333;
  font-size: 1.5em;
  display: block;
  text-align: center;
  margin-top: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 50px;
  font-size: 0.9em;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    font-size: 0.8em;
    padding: 8px;
  }
`;
