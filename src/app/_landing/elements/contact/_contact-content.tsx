import Link from "next/link";
import { Mail } from "lucide-react";
import Each from "@/_shared/components/app-each";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/_core/components/fragments/button";
import { WhatsAppUtil } from "@/_shared/utils/whatsapp.util";
import { Separator } from "@/_core/components/fragments/separator";

export default function ContactContent() {
  const phoneNumberRedirect = WhatsAppUtil.buildLink(
    WhatsAppUtil.contacts.service,
    `Olá, gostaria de conversar com um representante.`
  );

  const items = [
    {
      title: `Suporte ao cliente`,
      description: `Tem dúvidas ou precisa de ajuda? Fale conosco para suporte imediato.`,
    },
    {
      title: `Sugestões`,
      description: `Envie suas sugestões e ajude-nos a melhorar nossos serviços.`,
    },
    {
      title: `Parcerias`,
      description: `Interessado em parcerias? Fale conosco para explorar oportunidades de colaboração.`,
    },
  ];

  return (
    <section>
      <h2 className="mb-4">Contato</h2>
      <p className="w-3/4 mobile:w-full">
        Entre em contato conosco para obter suporte, enviar sugestões ou
        discutir parcerias. Estamos sempre prontos para ajudar.
      </p>

      <section className="mt-6 flex gap-2">
        <Button asChild variant="secondary" className="rounded-full">
          <Link href={phoneNumberRedirect} target="_blank">
            <IconBrandWhatsapp />
          </Link>
        </Button>

        <Button variant="secondary" asChild className="rounded-full">
          <Link href="mailto:contato@cenfortinf.com.br">
            <Mail />
          </Link>
        </Button>
      </section>

      <Separator className="my-6" />

      <section className="grid gap-4 grid-cols-3 mobile:grid-cols-1">
        <Each
          data={items}
          render={(item) => (
            <article>
              <h5 className="font-semibold mb-4">{item.title}</h5>
              <p>{item.description}</p>
            </article>
          )}
        />
      </section>
    </section>
  );
}
