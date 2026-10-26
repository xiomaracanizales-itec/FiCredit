import React from "react"
import Link from "next/link"
import Image from "next/image"

// props que acepta el hero
interface HeroSectionProps {
    title: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
    backgroundImage?: string;
    badge?: string;
    isHome?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    ctaText,
    ctaHref,
    backgroundImage,
    badge,
    isHome = false
}) => {
    return (
        <section
            className={`relative w-full overflow-hidden bg-primary text-white flex items-center
                ${
                    isHome
                    ? "pt-32 pb-20 md:pt-44 md:pb-32 min-h-[560px] md:min-h-[660px]"
                    : "pt-28 pb-14 md:pt-36 md:pb-20 min-h-[380px] md:min-h-[440px]"
                }
                `}
        >
            {backgroundImage ? (
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={backgroundImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    {/* capa con opacidad */}
                    <div className="absolute inset-0 bg-primary/65 z-10" />
                </div>
            ) : (
                /* degradado si no hay imagen */
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#003875] to-[#002654] z-0" />
            )}
            {/* contenedor principal */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-9 lg:col-span-8 space-y-6">
                        {/* badge - etiqueta opcional */}
                        {badge && (
                            <span className="inline-block bg-white/10 background-blur-sm border border-white/20 text-accent-yellow
                                    text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                {badge}
                            </span>
                        )}
                        {/* titulo H1 */}
                        <h1 className="font-heading font-extrabold text-[30px] leading-[38px] md:text-[48px] md:leading-[56px] text-white tracking-tight">
                            {title}
                        </h1>
                        {/* texto de cuerpo */}
                        {description && (
                            <p className="font-body text-[16px] leading-relaxed text-blue-100 max-w-2xl">
                                {description}
                            </p>
                        )}
                        {/* boton CTA */}
                        {ctaText && ctaHref && (
                            <div className="pt-2">
                                <Link
                                    href={ctaHref}
                                    className="inline-flex items-center justify-center font-heading text-base px-8 py-3.5 rounded-card border-2
                                        border-accent-yellow bg-accent-yellow text-night-blue hover:bg-transparent hover:text-white shadow-md 
                                        hover:shadow-none transition-all duration-200 outline-none focus:ring-0"
                                >
                                    {ctaText}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}



                    