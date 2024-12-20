import LandingPageHero from "./hero";
import LandingPageAbout from "./about";
import LandingPageFooter from "./footer";
import LandingPageLesson from "./lesson";
import LandingPageContact from "./contact";

export default function LandingPage() {
  return (
    <>
      <section className="bg-app-dark-blue">
        <LandingPageHero />
        <LandingPageAbout />
      </section>

      <LandingPageLesson />
      <LandingPageContact />
      <LandingPageFooter />
    </>
  );
}
