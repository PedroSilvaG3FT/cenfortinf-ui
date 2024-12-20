import ContactContent from "./elements/contact/_contact-content";
import ContactForm from "./elements/contact/_contact-form";

export default function LandingPageContact() {
  return (
    <section className="bg-app-dark-blue/20 mobile:py-12">
      <section className="app-container grid gap-12 items-center grid-cols-1 lg:grid-cols-[1fr_40%]">
        <ContactContent />
        <ContactForm />
      </section>
    </section>
  );
}
