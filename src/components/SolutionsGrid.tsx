import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface SolutionCard {
    icon: string;
    title: string;
    description: string;
    href: string;
    linkText: string;
}

interface SolutionGridProps {
    title?: string;
    subtitle?: string;
    solutions?: SolutionCard[];
}

const defaultSolutions: SolutionCard[] = [
    {
        icon: "/images/iconos/cuentas.png",
        title: "Cuentas de Ahorro e Inversión",
        description: "Protege y haz crecer tu capital con nuestras opciones de inversión a plazo fijo y cuentas de ahorro con tasas altamente competitivas.",
        href:"/personas/cuentas",
        linkText: "Conocer Cuentas",
    },
    {
        icon: "/images/iconos/credito.png",
        title: "Créditos y Financiamiento",
        description: "Impulsa tus proyectos con líneas de crédito empresariales e hipotecarias adaptadas a tus plazos y capacidad de pago.",
        href: "/personas/creditos",
        linkText: "Explorar Créditos",
    },
    {
        icon: "/images/iconos/cambio.png",
        title: "Intercambio de monedas",
        description: "Realiza tus operaciones cambiarias con atención preferencial, agilidad y un tipo de cambio competitivo para tu negocio.",
        href: "/personas/divisas",
        linkText: "Ver Tipo de Cambio",
    },
]

export const SolutionsGrid: React.FC<SolutionGridProps> = ({
    title = "Soluciones Financieras a tu Medida",
    subtitle = "Descubre nuestros productos diseñados para potenciar tus metas personales.",
    solutions = defaultSolutions,
}) => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* cabecera de la seccion */}
                <div className="max-w-3xl mb-12">
                    <h2 className="font-heading text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] font-bold text-night-blue mb-3">
                        {title}
                    </h2>
                    <p className="font-body text-[16px] text-night-blue/70 leading-relaxed">
                        {subtitle}
                    </p>
                </div>
                {/* cuadricula de 3 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {solutions.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 border border-border-gray/70 shadow-sm hover:shadow-xl hover:-translate-y-1
                                transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* icono */}
                                <div className="w-16 h-16 relative mb-6">
                                    <Image 
                                        src={item.icon}
                                        alt={item.title}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                {/* titulo */}
                                <h3 className="font-heading text-xl font-bold text-night-blue mb-3 leading-snug">
                                    {item.title}
                                </h3>
                                {/* descripcion */}
                                <p className="font-body text-[15px] leading-relaxed text-night-blue/75 mb-6">
                                    {item.description}
                                </p>
                            </div>

                        <Link
                            href={item.href}
                            className="group inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline mt-4"
                        >
                            <span>{item.linkText}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}