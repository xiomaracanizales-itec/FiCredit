import React from "react"
import { NavBar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ProductCardsGrid, ProductCardItem } from "@/components/ProductsCardsGrid"
import { TrustSection } from "@/components/TrustSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

const creditosData: ProductCardItem[] = [
    {
        title: "Crédito Hipotecario",
        description: "Financiamiento para la compra de vivienda o consolidación inmobiliaria.",
        benefits: [
        "Tasas competitivas en Quetzales y Dólares.",
        "Plazos de hasta 20 años.",
        "Asesoría personalizada en todo el proceso.",
        ],
        ctaText: "Ver Detalles",
        ctaHref: "/personas/creditos/hipotecario",
  },
  {
    title: "Crédito Vehículo",
    description: "El financiamiento que necesitas para estrenar el vehículo que deseas.",
    benefits: [
      "Aprobación ágil.",
      "Plazos cómodos y cuotas fijas.",
      "Opciones para vehículos nuevos y seminuevos.",
    ],
    ctaText: "Ver Detalles",
    ctaHref: "/personas/creditos/vehiculo",
  },
  {
    title: "Consolidación de Deudas",
    description: "Unifica tus pagos en una sola cuota mensual con una tasa preferencial.",
    benefits: [
      "Reduce tus pagos mensuales.",
      "Mejora tu liquidez y orden financiero.",
      "Trámite rápido y transparente.",
    ],
    ctaText: "Ver Detalles",
    ctaHref: "/personas/creditos/consolidacion",
  },
]

export default function CreditosPersonasPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <NavBar />
       
            <main className="flex-grow">
                <HeroSection 
                    title={
                        <>
                            <span className="text-accent-yellow">Créditos y Financiamiento</span> a tu Alcance
                        </>
                    }
                    description="Soluciones crediticias ágiles y transparentes para alcanzar tus metqas personales y familianres."
                    isHome={false}
                    flatBg={true}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                    <Breadcrumbs 
                        items={[
                            {label: "Inicio", href: "/"},
                            {label: "Créditos"},
                        ]}
                    />
                </div>

                <ProductCardsGrid 
                    title="Nuestros Planes de Crédito"
                    subtitle="Encuentra el financiamiento que mejor se adapta a tus necesidades y capacidad de pago."
                    products={creditosData}
                />

                <TrustSection />
                <ContactSection />
            </main>

            <Footer />
         </div>
    )
}