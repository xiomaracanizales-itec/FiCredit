import React from "react"
import { NavBar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function GobiernoCorporativoPage() {
    return(
        <div className="min-h-screnn flex flex-col justify-between">
            <NavBar />

            <main className="flex-grow">
                <HeroSection 
                    title = {
                        <>
                            <span className="text-accent-yellow">Marco Directivo y </span>Control Orientado a la Transparencia y Sostenibilidad.
                        </>
                    }
                    description = {
                        <>
                            <strong className="font-semibold text-white">Nuestra estructura organizativa </strong>garantiza la independencia en la toma de decisiones, una rigurosa gestión integral de riesgos y la máxima protección de los activos de nuestros clientes e inversionistas.
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
                        { label: "Gobierno Corporativo"}
                    ]}
                    />
                </div>

                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}