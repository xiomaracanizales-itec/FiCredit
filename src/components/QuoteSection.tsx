import React from "react"

interface QuoteSectionProps {
    quote?: string;
    author?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
    quote = "Más que un aliado financiero, somos la base sólida sobre la cual nuestros clientes construyen sus proyectos de vida y expansión empresarial.",
    author = "FiCredit — Institución Financiera Supervisada por la SIB.",
}) => {
    return (
        <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003B74] via-primary to-[#002652] opacity-90 z-0"/>
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="relative inline-block mb-8">
                    <blockquote className="font-heading text-[22px] leading-[34px] md:text-[32px] md:leading-[46px] font-medium text-white tracking-tight">
                        <span className="text-blue-300/40 text-4xl md:text-6xl font-serif mr-2 select-none">
                            “
                        </span>
                            {quote}
                        <span className="text-blue-300/40 text-4xl md:text-6xl font-serif ml-2 select-none">
                            ”
                        </span>
                    </blockquote>
                </div>
                {author && (
                    <p  className="font-body text-sm md:text-base text-blue-100/80 tracking-wide font-normal">
                        {author}
                    </p>
                )}
            </div>
        </section>
    )
}