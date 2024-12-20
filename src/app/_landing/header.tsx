import { Button } from "@/_core/components/fragments/ui/moving-border";
import Image from "next/image";

export default function LandingPageHeader() {
  return (
    <header className="app-container py-12 flex gap-4 items-center justify-between">
      <Image
        width={200}
        height={100}
        alt="CENFORTINF"
        src="/images/logo/white-h.svg"
      />

      <Button
        borderRadius="1rem"
        className="h-14 bg-white text-foreground mobile:w-full"
      >
        Matricule-se já
      </Button>
    </header>
  );
}
