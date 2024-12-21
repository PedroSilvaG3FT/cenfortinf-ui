import Image from "next/image";
import LandingPageSubscribeButton from "./elements/subscribe-button";

export default function LandingPageHeader() {
  return (
    <header className="app-container py-12 flex gap-4 items-center justify-between mobile:justify-center">
      <Image
        width={200}
        height={100}
        alt="CENFORTINF"
        src="/images/logo/white-h.svg"
      />

      <LandingPageSubscribeButton className="w-56 mobile:hidden" />
    </header>
  );
}
