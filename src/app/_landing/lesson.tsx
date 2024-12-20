import VideoPlayer from "./elements/video-player";

export default function LandingPageLesson() {
  const videoData = {
    label: `25 minutos`,
    title: `Cosmovisão`,
    url: `https://www.dropbox.com/s/oxrbxi4b9dwv7yj/AmyCuddy_2012G-480p.mp4?dl=1`,
    description: `Uma descrição sobre um pouco da aula`,
    thumbnailURL: `https://fbb.br/wp-content/uploads/2022/03/Banner-Evento-2-1.jpg`,
  };

  return (
    <section>
      <section className="app-container">
        <h2 className="mobile:text-center">Experimente Nossa Aula Gratuita</h2>
        <p className="my-6 mobile:text-center">
          Descubra a qualidade do nosso ensino com uma aula gratuita.
          <br />
          Mergulhe em conteúdos relevantes, apresentados de forma clara e
          prática, para entender como nosso curso pode transformar sua caminhada
          espiritual.
        </p>

        <VideoPlayer {...videoData} />
      </section>
    </section>
  );
}
