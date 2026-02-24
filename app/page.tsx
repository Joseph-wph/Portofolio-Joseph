import Navbar from "@/components/containers/navbar/navbar";
import HeroSection from "@/components/containers/heroSection/heroSection";
import AsFrontendSection from "@/components/containers/asFrontendSection/asFrontendSection";
import CodeDesignSection from "@/components/containers/codeDesignSection/codeDesignSection";
import MoreThanSection from "@/components/containers/moreThanSection/moreThanSection";
import DesignAccuracySection from "@/components/containers/designAccuracySection/designAccuracySection";
import ExperienceSection from "@/components/containers/experienceSection/experienceSection";
import Testimoni from "@/components/containers/testimoni/testimoni";
import ClearSection from "@/components/containers/clearSection/clearSection";
import WorkSection from "@/components/containers/workSection/workSection";
import Footer from "@/components/containers/footer/footer";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="bg-[url('/assets/background/background.svg')] bg-cover bg-center max-w-full min-h-screen flex flex-col pt-24"
      >
        <Navbar />
        <HeroSection />
      </section>

      <section id="about">
        <AsFrontendSection />
      </section>

      <section id="skill">
        <CodeDesignSection />
      </section>

      <section>
        <MoreThanSection />
      </section>

      <section id="projects">
        <DesignAccuracySection />
      </section>

      <section>
        <ExperienceSection />
      </section>

      <section>
        <Testimoni />
      </section>

      <section id="faq">
        <ClearSection />
      </section>

      <section id="contact">
        <WorkSection />
      </section>

      <section className="bg-black font-heading text-white">
        <Footer />
      </section>
    </main>
  );
}
