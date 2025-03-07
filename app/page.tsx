import { sections } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="text-white space-y-16 px-4 sm:px-8 lg:px-16 xl:px-32">
                {sections.map(({ id, component: Component }) => (
                    <section key={id} id={id} className="py-16">
                        <Component />  {/* Se renderiza el componente */}
                    </section>
                ))}
            </main>

            <Footer />
        </>
    );
}
