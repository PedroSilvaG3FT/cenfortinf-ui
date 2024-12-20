import Image from "next/image";

export default function LandingPageFooter() {
  return (
    <footer className="bg-app-dark-blue text-white py-2">
      <section className="app-container flex items-center justify-center">
        <Image
          width={150}
          height={100}
          alt="CENFORTINF"
          src="/images/logo/white-h.svg"
        />
      </section>
    </footer>
  );
}
