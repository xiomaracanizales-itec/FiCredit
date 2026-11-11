import { ContactSection } from "@/components/ContactSection"
import { ExchangeRateBar } from "@/components/ExchangeRateBar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { NavBar } from "@/components/Navbar"
import { QuoteSection } from "@/components/QuoteSection"
import { SolutionsGrid, SolutionCard } from "@/components/SolutionsGrid"

const citaEmpresas = "Optimizamos la gestión financiera de tu negocio con soluciones de crédito, divisas e inversión estructuradas a la medida de tu industria, brindando la firmeza financiera y la agilidad que el mercado exige."
const solucionesEmpresas: SolutionCard[] = [
  {
    icon: "/images/iconos/cuentas.png",
    title: "Cuentas e Inversión Corporativa",
    description: "Administra la liquidez diaria de tu empresa con total disponibilidad o rentabiliza tus excedentes de capital mediante certificados de inversión con rendimiento preferencial.",
    href: "/empresas/cuentas",
    linkText: "Conocer cuentas"
  },
  {
    icon: "/images/iconos/credito.png",
    title: "Crédito Empresarial",
    description: "Impulsa el crecimiento de tu negocio con soluciones de crédito diseñadas para optimizar el flujo de caja, adquirir activos fijos o respaldar importaciones.",
    href: "/empresas/creditos",
    linkText: "Explorar Líneas de Crédito"
  },
  {
    icon: "/images/iconos/cambio.png",
    title: "Divisas y Mesa de Cambio",
    description: "Ejecuta compra y venta de divisas con cotizaciones competitivas en tiempo real, asesoría directa para pagos a proveedores internacionales y giros comerciales.",
    href: "/empresas/cuentas",
    linkText: "Cotizar Tipo de Cambio"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* menu navegacion */}
      <NavBar />

      {/* contenido principal */}
      <main className="flex-grow">
        <HeroSection 
          title="Solidez Financiera y Liquidez Estratégica para tu Empresa."
          description="Impulsamos el crecimiento de tu negocio con soluciones de crédito, inversión y tesorería adaptadas al ciclo operativo de tu industria."
          ctaText="Solicitar Solución Empresarial"
          ctaHref="/solicitar-solucion"
          isHome={true}
          backgroundImage="/images/heros-empresas/empresas.jpg"
        />
        <SolutionsGrid 
          title="Soluciones Financieras Integrales para el Ciclo Operativo de tu Empresa"
          subtitle="Centraliza la gestión de tu tesorería, accede a líneas de financiamiento ágiles y optimiza tus operaciones cambiarias con la solvencia y atención personalizada que tu negocio exige."
          solutions={solucionesEmpresas}
        />
        <ExchangeRateBar />
        <QuoteSection 
            quote={citaEmpresas}
        />
        <ContactSection />
      </main>
      
      {/* footer */}
      <Footer />
    </div>
  )
}