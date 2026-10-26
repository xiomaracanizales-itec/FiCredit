import { ContactSection } from "@/components/ContactSection"
import { ExchangeRateBar } from "@/components/ExchangeRateBar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { NavBar } from "@/components/Navbar"
import { QuoteSection } from "@/components/QuoteSection"
import { SolutionsGrid } from "@/components/SolutionsGrid"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* menu navegacion */}
      <NavBar />

      {/* contenido principal */}
      <main className="flex-grow">
        <HeroSection 
          title="El impulso que necesitas para alcanzar tus metas."
          description="Soluciones financieras transparentes con tasas 
          competitivas para la compra de vivienda o consolidación de metas personales."
          ctaText="Solicitar Crédito"
          ctaHref="/solicitar-credito"
          isHome={true}
          backgroundImage="/images/heros-personas/hero-home.jpg"
        />
        <SolutionsGrid />
        <ExchangeRateBar />
        <QuoteSection />
        <ContactSection />
      </main>
      
      {/* footer */}
      <Footer />
    </div>
  )
}