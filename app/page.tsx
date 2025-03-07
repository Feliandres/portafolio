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

const sections = [
    { id: "hero", component: <Hero /> },
    { id: "skills", component: <Skills /> },
    { id: "logo-animation", component: <LogoAnimation /> },
    { id: "about", component: <About /> },
    { id: "experience", component: <Experience /> },
    { id: "portfolio", component: <Portfolio /> },
    { id: "key-metrics", component: <KeyMetrics /> },
    { id: "services", component: <Services /> },
    { id: "contact", component: <Contact /> },
];

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="text-white space-y-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                {sections.map(({ id, component }) => (
                    <section key={id} id={id} className="py-16">
                        {component}
                    </section>
                ))}
            </main>

            <Footer />
        </>
    );
}
