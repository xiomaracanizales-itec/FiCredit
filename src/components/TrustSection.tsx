import React from "react"
import Image from "next/image"

export interface TrustItem {
    icon: string;
    title: string;
    description: string;
}

interface TrustSectionProps {
    title?: string;
    items?: TrustItem[]
    columns?: 2 | 3 | 4
}

const defaultTrustItems: TrustItem[] = [
    {
        icon: "/images/iconos/sib.png",
        title: "Supervisión SIB",
        description: "Entidad regulada y supervisada por la Superintendencia de Bancos de Guatemala."
    },
    {
        icon: "/images/iconos/transparencia.png",
        title: "Transparencia",
        description: "Publicación periódica de nuestros estados financieros auditados."
    },
    {
        icon: "/images/iconos/asistencia-personalizada.png",
        title: "Atención Personalizada",
        description: "Asesoría financiera directa para optimizar el rendimiento de tu capital."
    },
]

export const TrustSection:React.FC<TrustSectionProps> = ({
    title = "Tu Inversión Respaldada y Segura",
    items = defaultTrustItems,
    columns = 3,
}) => {
    const gridColsClass =
        columns === 2
        ? "md:grid-cols-2"
        : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-3"

    return (
        <section className="py-14 md:py-20 bg-pale-sky">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* titulo */}
                <h2 className="font-heading text-[22px] leading-[30px] md:text-[32px] md:leading-[40px]
                    font-bold text-night-blue text-center mb-10 md:mb-12">
                    {title}
                </h2>
                {/* tarjetas */}
                <div className={`grid grid-cols-1 ${gridColsClass} gap-6 lg:gap-8`}>
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-card p-10 md:p-8 border border-border-gray shadow-sm
                                text-center flex flex-col items-center hover:shadow-md transition-shadow"
                        >
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
                            <h3 className="font-heading text-lg font-bold text-night-blue mb-2.5">
                                {item.title}
                            </h3>
                            {/* descripcion */}
                            <p className="font-body text-sm text-night-blue/70 leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}