import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { KeyMetrics } from "@/components/KeyMetrics";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stack } from "@/components/Stack";

export default function Home() {
    return (
        <div className="text-white">
            <Navbar />

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <Hero />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <Stack />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <Skills />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <LogoAnimation />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <About />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <Experience />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <Portfolio />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <KeyMetrics />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <Services />
            </section>

            <section className="py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                <Contact />
            </section>

            <Footer />
        </div>
    );
}
