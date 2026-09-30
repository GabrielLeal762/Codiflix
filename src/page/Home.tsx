import Banner from "../Componentes/Banner";
import StyledCard from "../Componentes/StyledCard";

function Home() {
  const fotos = [
    {
      titulos: "ORIGINAIS DA NETFLIX",

      photos: [
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie4.jpg",
        "large-movie6.jpg",
        "large-movie7.jpg",
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie4.jpg",
        "large-movie6.jpg",
        "large-movie7.jpg",
      ],
    },
    {
      titulos: "TERROR",

      photos: [
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie4.jpg",
        "large-movie2.jpg",
        "large-movie3.jpg",
        "large-movie1.jpg",
        "large-movie5.jpg",
        "large-movie4.jpg",
        "large-movie8.jpg",
        "large-movie7.jpg",
      ],
    },
    {
      titulos: "ANIMES",

      photos: [
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie4.jpg",
        "large-movie6.jpg",
        "large-movie5.jpg",
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie4.jpg",
        "large-movie5.jpg",
        "large-movie8.jpg",
      ],
    },
    {
      titulos: "COMÉDIA",

      photos: [
        "large-movie8.jpg",
        "large-movie2.jpg",
        "large-movie4.jpg",
        "large-movie6.jpg",
        "large-movie7.jpg",
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie4.jpg",
        "large-movie6.jpg",
        "large-movie7.jpg",
      ],
    },
    {
      titulos: "AÇÃO",

      photos: [
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie2.jpg",
        "large-movie6.jpg",
        "large-movie5.jpg",
        "large-movie1.jpg",
        "large-movie3.jpg",
        "large-movie8.jpg",
        "large-movie6.jpg",
        "large-movie7.jpg",
      ],
    },
  ];
  return (
    <>
      <Banner
        banner="banner.jpg"
        titulo="La casa de Papel"
        paragrafo="Oito  ladrões se trancam com reféns na Casa da Moeda da Espanha.
        Seu lider manipula a polícia para realizar um plano que pode ser o maior 
        roubo da história ou uma missão em vão"
      />
      <StyledCard props={fotos} />
    </>
  );
}

export default Home;
