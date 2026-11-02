import React from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

export interface ProductCardItem {
    title: string;
    description: string;
    benefitsTitle?: string;
    benefits: string[];
    ctaText?: string;
    ctaHref: string;
}

interface ProductCardsGridProps {
    title: string;
    subtitle?: string;
    products: ProductCardItem[];
}

export const ProductCardsGrid: React.FC<ProductCardsGridProps> = ({
    title,
    subtitle,
    products
}) => {
    const gridColsClass =
        products.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3"

    return (
        <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* encabezado */}
                <div className="max-w-3xl mb-10">
                    <h2 className="font-heading text-[24px] leading-[32px] md:text-[34px] md:leading-[42px] font-bold text-night-blue mb-2.5">
                        { title }
                    </h2>
                    {subtitle && (
                        <p className="font-body text-[15px] md:text-[16px] text-night-blue/70 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
                {/* cuadricula de tarjetas */}
                <div className={`grid grid-cols-1 ${gridColsClass} gap-8 lg:gap-10 w-full`}>
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-card p-6 md:p-8 border border-border-gray shadow-sm hover:shadow-md transition-shadow
                                flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="font-heading text-xl md:text-2xl font-bold text-night-blue mb-3">
                                    {product.title}
                                </h3>
                                <p className="font-body text-sm md:text-base text-night-blue/75 leading-relaxed mb-6">
                                    {product.description}
                                </p>
                                <h4 className="font-heading text-sm font-bold text-night-blue mb-3">
                                    Beneficios
                                </h4>
                                <ul className="space-y-2.5 mb-8">
                                    {product.benefits.map((benefit, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-2.5">
                                            <div className="mt-0.5 rounded-full p-0.5 text-accent-yellow shrink-0">
                                                <Check className="w-4 h-4 stroke-[3]" />
                                            </div>
                                            <span className="font-body text-sm text-night-blue/80 leading-snug">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* boton CTA */}
                            <div className="pt-2">
                                <Link
                                    href={product.ctaHref}
                                    className="inline-flex items-center justify-center gap-2 bg-accent-yellow border-accent-yellow text-night-blue
                                        font-heading font-semibold text-xs md:text-sm px-5 py-2.5 rounded-card transition-all duration-200 shadow-sm
                                        border-2 hover:bg-transparent hover:shadow"
                                >    
                                    <span>{product.ctaText || "Ver Detalles"}</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}