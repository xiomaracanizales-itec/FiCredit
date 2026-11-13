import React from "react"
import { NavBar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { DocCardsSection } from "@/components/DocCardsSection"

const transparenciaDocs = [
    { 
        title: "Tarifario",
        pdfUrl: "/docs/transparencia/tarifario.pdf"
    },
    { 
        title: "Memoria de Labores",
        pdfUrl: "/docs/transparencia/memoria-labores.pdf"
    }
]

const regulacionesDocs = [
    { 
        title: "Reglamento Depósitos a Plazo Fijo",
        pdfUrl: "/docs/transparencia/reglamento-depositos-plazo.pdf"
    },
    { 
        title: "Reglamento Depósitos de Ahorro",
        pdfUrl: "/docs/transparencia/reglamento-depositos-ahorro.pdf"
    }
]

export default function TransparenciaPage() {
    return(
        <div className="min-h-screnn flex flex-col justify-between">
            <NavBar />

            <main className="flex-grow">
                <HeroSection 
                    title = {
                        <>
                            <span className="text-accent-yellow">Compromiso Inquebrantable </span>y Transparencia Financiera
                        </>
                    }
                    description = {
                        <>
                            <strong className="font-semibold text-white">Procesos diseñados </strong>para garantizar la transparencia en cada transacción y mitigar riesgos operativos y legales.
                        </>
                    }
                    isHome={false}
                    flatBg={true}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                    <Breadcrumbs 
                        items = {[
                        { label: "Inicio", href: "/" },
                        { label: "Acerca de", href: "/acerca-de" },
                        { label: "Transparencia y Cumplimiento"}
                    ]}
                    />
                </div>

                {/* seccion 1 */}
                <DocCardsSection 
                    title="Transparencia y Cumplimiento"
                    subtitle="Acceso a tarifarios oficiales, memorias institucionales y reglamentos de productos de ahorro de FiCredit."
                    documents={transparenciaDocs}
                />

                {/* seccion 2 */}
                <DocCardsSection 
                    title="Regulaciones y Leyes"
                    subtitle="Reglamentos oficiales aplicables a las cuentas de depósito de FiCredit."
                    documents={regulacionesDocs}
                />

                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}