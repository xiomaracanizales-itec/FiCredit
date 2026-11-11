import React from "react"
import { NavBar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { TimelineSection } from "@/components/TimelineSection"
import { TrustSection } from "@/components/TrustSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { ManagerMessageSection } from "@/components/ManagerMessageSection"

const historiaHitos = [
    {
        title: "Constitución de FiCredit",
        description: "Constitución de FICredit como entidad financiera orientada a dinamizar el acceso a créditos de desarrollo y soluciones de ahorro estructuradas en Guatemala.",
    },
    {
        title: "Fortalecimiento del marco patrimonial",
        description: "Fortalecimiento del marco patrimonial, consolidación de la supervisión bajo la Superintendencia de Bancos (SIB) e incorporación de la línea de Servicios Corporativos y Divisas.",
    },
    {
        title: "Lanzamiento del nuevo ecosistema web ",
        description: "Lanzamiento del nuevo ecosistema web institucional y corporativo, optimizando la experiencia de consulta para Personas y Empresas, la integración con la Mesa de Cambio y la transparencia de la información financiera.",
    },
]

const pilares = [
    { 
        icon: "/images/iconos/asesoria.png",
        title: "Nuestra Misión",
        description: "Proveer soluciones financieras integrales, transparentes y competitivas a personas y empresas, respaldados por un talento humano calificado, innovación tecnológica y una gestión prudente del riesgo que garantice la sostenibilidad y el crecimiento de nuestros clientes."
    },
    { 
        icon: "/images/iconos/asesoria.png",
        title: "Nuestra Visión",
        description: "Ser la institución financiera de preferencia en Guatemala por nuestra solidez, agilidad en la atención y capacidad de estructurar soluciones a la medida, destacándonos por la excelencia operativa y la estricta transparencia institucional."
    },
]

const valoresFiCredit = [
    { 
        icon: "/images/iconos/asesoria.png",
        title: "Integridad y Transparencia",
        description: "Actuamos con total claridad y apego al marco regulatorio en cada transacción."
    },
    {
        icon: "/images/iconos/asesoria.png",
        title: "Solidez y Prudencia",
        description: "Administramos el capital de nuestros clientes con los más altos estándares de gestión de riesgo."
    },
    {
        icon: "/images/iconos/asesoria.png",
        title: "Agilidad Orientada al Cliente",
        description: "Simplificamos procesos para responder con rapidez a las necesidades de personas y negocios."
    },
    {
        icon: "/images/iconos/asesoria.png",
        title: "Agilidad Orientada al Cliente",
        description: "Impulsamos proyectos que generan impacto económico y social positivo en Guatemala."
    }
]

export default function QuienesSomosPage() {
    return(
        <div className="min-h-screnn flex flex-col justify-between">
            <NavBar />

            <main className="flex-grow">
                <HeroSection 
                    title = {
                        <>
                            <span className="text-accent-yellow">Construyendo un Futuro </span>Financiero de Guatemala con Solidez y Confianza.
                        </>
                    }
                    description = {
                        <>
                            <strong className="font-semibold text-white">Una trayectoria guiada </strong>por principios éticos, innovación tecnológica constante y el compromiso inquebrantable de respaldar las metas de nuestras personas y empresas.
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
                        { label: "Quienes Somos"}
                    ]}
                    />
                </div>

                {/* 1. historia */}
                <TimelineSection 
                    title="Una Historia de Crecimiento, Respaldo y Evolución Constante"
                    items={historiaHitos}
                />

                {/* 2. misión y visión */}
                <TrustSection 
                    title="Los Pilares que Guían Nuestra Razón de Ser"
                    items={pilares}
                    columns={2}
                />

                {/* 3. mensaje gerencia */}
                <ManagerMessageSection 
                    message="En FiCredit entendemos que detrás de cada proyecto, empresa o depósito a plazo hay un sueño de desarrollo. Nuestra prioridad es ser ese pilar institucional seguro y ágil que transforma el capital en crecimiento real para la sociedad guatemalteca, operando siempre bajo los más estrictos estándares de ética y gobernanza."
                    author="Nombre Gerente General - FiCredit Guatemala"
                />

                <TrustSection 
                    title="Principios Éticos que Rigen Cada una de Nuestras Decisiones"
                    items={valoresFiCredit}
                    columns={2}
                />

                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}