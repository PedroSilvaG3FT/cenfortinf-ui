import { Handshake } from "lucide-react";
import Each from "@/_shared/components/app-each";
import LandingPageModuleCard from "./elements/module-card.element";
import { Button } from "@/_core/components/fragments/button";
import Image from "next/image";

export default function LandingPageAbout() {
  const mock = {
    title: `Titulo do módulo`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
  };

  const services = [
    { icon: Handshake, ...mock },
    { icon: Handshake, ...mock },
    { icon: Handshake, ...mock },
    { icon: Handshake, ...mock },
    { icon: Handshake, ...mock },
    { icon: Handshake, ...mock },
    { icon: Handshake, ...mock },
    { icon: Handshake, ...mock },
  ];

  return (
    <article className="bg-background rounded-tr-[16rem_5rem]">
      <section className="app-container py-12">
        <div className="grid grid-cols-[30%_1fr] mobile:grid-cols-1">
          <figure className="p-0 w-full flex items-center justify-center">
            <Image
              width={400}
              height={400}
              alt="CENFORTINF"
              src="/images/landing/hero-image.png"
              className="-scale-x-100"
            />
          </figure>

          <section>
            <h2 className="mb-4">Sobre nós</h2>

            <p className="w-4/5">
              Somos uma equipe dedicada a compartilhar o conhecimento da Palavra
              de Deus de forma clara, acessível e transformadora. Nosso curso de
              teologia foi desenvolvido para ajudar você a aprofundar sua fé,
              compreender as Escrituras e aplicá-las no dia a dia.
              <br />
              <br />
              Com materiais completos, professores especializados e suporte
              contínuo, proporcionamos uma jornada de aprendizado que une teoria
              e prática, fortalecendo sua vida espiritual e seu propósito.
            </p>
          </section>
        </div>

        <h4 className="font-semibold my-6">Confira alguns modulos: </h4>

        <section className="w-full grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 relative z-10">
          <Each
            data={services}
            render={(item, index) => (
              <LandingPageModuleCard index={index} {...item} />
            )}
          />
        </section>

        <div className="mt-4 flex justify-center">
          <Button variant="outline">Saiba mais</Button>
        </div>
      </section>
    </article>
  );
}
