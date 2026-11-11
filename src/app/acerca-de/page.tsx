import { NavBar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { SolutionCard, SolutionsGrid } from "@/components/SolutionsGrid"
import { QuoteSection } from "@/components/QuoteSection"

const citaAcerca = "Operamos bajo estrictos estándares de gobernanza, auditoría continua y supervisión de la Superintendencia de Bancos, asegurando la máxima protección de los activos de nuestros clientes."
const solucionesAcerca: SolutionCard[] = [
    {
        icon: "/images/iconos/quienes-somos.png",
        title: "Quienes Somos",
        description: "Conoce la trayectoria, el propósito y los valores fundamentales que guían nuestras operaciones y el compromiso con nuestros clientes.",
        href: "/acerca-de/quienes-somos#historia",
        linkText: "Ver Historia y Valores"
    },
    {
        icon: "/images/iconos/gob-cop.png",
        title: "Gobierno Corporativo",
        description: "Nuestra estructura directiva, comités de administración y prácticas de buen gobierno garantizan una toma de decisiones responsable.",
        href: "/docs/consejo-admin.pdf",
        linkText: "Ver Junta Directiva"
    },
    {
        icon: "/images/iconos/cumplimiento.png",
        title: "Transparencia y Cumplimiento",
        description: "Políticas de prevención de lavado de dinero, marco legal y normativas de auditoría que respaldan la seguridad de tus fondos.",
        href: "/acerca-de/transparencia",
        linkText: "Ver Normativas y Reportes"
    },
]

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <NavBar />

            <main className="flex-grow">
                <HeroSection 
                    title="Solidez Financiera e Innovación al Servicio del Desarrollo de Guatemala"
                    description="Construimos relaciones de confianza a largo plazo mediante una gestión transparente, un estricto cumplimiento normativo y soluciones financieras a la medida."
                    ctaText="Conocer Gobierno Corporativo"
                    ctaHref="/acerca-de/gobierno-corporativo"
                    isHome={true}
                    backgroundImage="/images/heros-acerca-de/hero.jpg"
                />
                <SolutionsGrid 
                    title="Soluciones Financieras Integrales para el Ciclo Operativo de tu Empresa"
                    subtitle="Centraliza la gestión de tu tesorería, accede a líneas de financiamiento ágiles y optimiza tus operaciones cambiarias con la solvencia y atención personalizada que tu negocio exige."
                    solutions={solucionesAcerca}
                />
                <QuoteSection 
                    quote={citaAcerca}
                />
                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}