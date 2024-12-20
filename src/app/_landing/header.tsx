import { Button } from "@/_core/components/fragments/button";
import Image from "next/image";

export default function LandingPageHeader() {
  return (
    <header className="app-container py-12 flex items-center justify-between">
      <Image
        width={200}
        height={100}
        alt="CENFORTINF"
        src="/images/logo/white-h.svg"
      />

      <Button variant="outline">Matricule-se já</Button>
    </header>
  );
}
