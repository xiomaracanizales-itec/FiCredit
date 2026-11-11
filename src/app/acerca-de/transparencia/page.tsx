import React from "react"
import { NavBar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

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

                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}