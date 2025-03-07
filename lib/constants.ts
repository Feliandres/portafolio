import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { LogoAnimation } from "@/components/LogoAnimation";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

// Declarar el tipo correcto para los componentes
type Section = {
    id: string;
    component: React.FC;
};

export const sections: Section[] = [
    { id: "hero", component: Hero },
    { id: "skills", component: Skills },
    { id: "logo-animation", component: LogoAnimation },
    { id: "about", component: About },
    { id: "experience", component: Experience },
    { id: "portfolio", component: Portfolio },
    { id: "key-metrics", component: KeyMetrics },
    { id: "services", component: Services },
    { id: "contact", component: Contact },
];
