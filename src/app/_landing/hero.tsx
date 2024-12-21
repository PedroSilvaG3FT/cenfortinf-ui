import LandingPageHeader from "./header";
import LandingPageSocialProof from "./social-proof";
import { TESTIMONY_DATA } from "./_data/testimony.data";
import { CardStack } from "@/_core/components/fragments/card-stack";
import { FlipWords } from "@/_core/components/fragments/ui/flip-words";
import LandingPageSubscribeButton from "./elements/subscribe-button";

export default function LandingPageHero() {
  return (
    <section className="pb-8 relative rounded-bl-[4rem]">
      <article className="absolute bottom-0 left-0  w-16 h-16 rounded-bl-[5rem] landing-hero-border"></article>

      <LandingPageHeader />

      <section className="app-container gap-2 grid grid-cols-[1fr_45%] text-white mobile:grid-cols-1">
        <article>
          <h1 className="font-semibold whitespace-pre-line mobile:text-center">
            {`Jornada de fé e conhecimento\nda palavra de Deus`}
          </h1>

          <FlipWords
            className="text-xl relative -left-2 mt-4 !text-white mobile:w-full mobile:text-center mobile:mt-4"
            words={[
              "Viva o Evangelho",
              "Aprofunde sua fé",
              "Aprenda com mestres",
              "Transforme sua visão",
              "Compreenda as Escrituras",
            ]}
          />

          <section className="hidden mt-4 mobile:flex items-center justify-center">
            <LandingPageSubscribeButton />
          </section>

          <p className="my-12 mobile:text-center mobile:my-6">
            Nosso curso oferece um estudo profundo da Palavra de Deus, com
            materiais atualizados e suporte contínuo para transformar sua visão
            espiritual.
          </p>

          <LandingPageSocialProof />
        </article>

        <section className="p-0 flex flex-col items-center justify-center mobile:mt-14 mobile:w-full">
          <CardStack items={TESTIMONY_DATA} />
        </section>
      </section>
    </section>
  );
}
