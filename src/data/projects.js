import cryptoImg from "../assets/img/projects-logo/cryptotracker.webp";
import portfolioImg from "../assets/img/projects-logo/portfolio.webp";


export const PROJECTS = [
  {
    id: 1,
    title: "CryptoTracker",
    description:
      "Aplicação para monitoramento de criptomoedas em tempo real, consumindo APIs externas e estruturando o fluxo de dados para atualização eficiente da interface.",
    stack: ["React", "API REST", "Node.js", "MySQL"],
    image: cryptoImg,
  },
  {
    id: 2,
    title: "Portfolio v2",
    description:
      "Aplicação full-stack com backend em PHP para envio de mensagens, incluindo validações, proteção contra spam e separação clara de responsabilidades entre frontend e backend.",
    stack: ["React", "Tailwind", "PHP"],
    image: portfolioImg,
  },


];