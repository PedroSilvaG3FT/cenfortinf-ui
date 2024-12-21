import { Button } from "@/_core/components/fragments/button";
import { cn } from "@/_core/components/lib/utils";
import { WhatsAppUtil } from "@/_shared/utils/whatsapp.util";
import Link from "next/link";

interface IProps {
  className?: string;
}

export default function LandingPageSubscribeButton(props: IProps) {
  const { className } = props;

  const phoneNumberRedirect = WhatsAppUtil.buildLink(
    WhatsAppUtil.contacts.service,
    `Olá, gostaria de conversar com um representante.`
  );

  return (
    <Button
      asChild
      variant="outline"
      className={cn("text-foreground", className)}
    >
      <Link href={phoneNumberRedirect}>Matricule-se já</Link>
    </Button>
  );
}
