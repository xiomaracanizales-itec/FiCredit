import React from "react"
import { NavBar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ProductCardItem, ProductCardsGrid } from "@/components/ProductsCardsGrid"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { TrustSection } from "@/components/TrustSection"

const accountsData: ProductCardItem[] = [
    {
        title: "Inversión a Plazo Fijo",
        description: "La opción ideal para hacer crecer tu capital con tasas de interés preferenciales a un plazo determinado.",
        benefitsTitle: "Beneficios",
        benefits: [
            "Plazos flexibles desde 30 días hasta 1 año.",
            "Tasas de interés competitivas garantizadas.",
            "Monto mínimo de apertura accesible.",
        ],
        ctaText: "Ver Detalles del Producto",
        ctaHref: "/personas/cuentas/plazo-fijo",
    },
    {
        title: "Ahorro Corriente",
        description: "Maneja tus fondos con total disponibilidad y la seguridad que exige tu ritmo de vida.",
        benefitsTitle: "Beneficios",
        benefits: [
            "Disponibilidad de tus fondos cuando los necesites.",
            "Generación de intereses sobre saldos diarios.",
            "Sin cargos ocultos por manejo de cuenta.",
        ],
        ctaText: "Ver Detalles del Producto",
        ctaHref: "/personas/cuentas/ahorro-corriente",
    }
]

export default function CuentasPersonasPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <NavBar />

            <main className="flex-grow">
                <HeroSection 
                    title = {
                        <>
                            <span className="text-accent-yellow">Ahorro e Inversión</span> con Respaldo y Rentabilidad
                        </>
                    }
                    description = {
                        <>
                            <strong className="font-semibold text-white">Haz crecer tu capital</strong> de forma segura con opciones diseñadas para brindarte liquidez o los mejores rendimientos del mercado.
                        </>
                    }
                    isHome={false}
                    flatBg={true}
                />

            {/* breadcrumbs & seccion de productos */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs 
                    items = {[
                        { label: "Inicio", href: "/" },
                        { label: "Personas", href: "/" },
                        { label: "Cuentas e Inversión" },
                    ]}
                />
            </div>

            <ProductCardsGrid 
                title="Nuestras Cuentas de Ahorro e Inversión"
                subtitle="Elije la opción que mejor se adapte a tus metas de rendimiento y disponibilidad."
                products={accountsData}
            />

            <TrustSection />

            <ContactSection />

            </main>

            <Footer />

        </div>
    )
}