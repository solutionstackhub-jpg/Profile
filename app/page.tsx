import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";
import Outcomes from "@/components/Outcomes";
import Statement from "@/components/Statement";
import Method from "@/components/Method";
import Assurances from "@/components/Assurances";
import Cases from "@/components/Cases";
import Stack from "@/components/Stack";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Divisions />
        <Outcomes />
        <Statement />
        <Method />
        <Assurances />
        <Cases />
        <Stack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
