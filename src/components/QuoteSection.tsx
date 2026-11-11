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
                    <blockquote className="font-heading text-[20px] leading-[32px] md:text-[28px] md:leading-[44px] lg:text-[32px] lg:leading-[48px] font-medium text-white tracking-tight">
                        <span className="inline-block text-blue-300/40 text-3xl md:text-5xl font-serif leading-none align-top -translate-y-1 md:-transtalte-y-2 mr-2 select-none">
                            “
                        </span>
                            {quote}
                        <span className="inline-block text-blue-300/40 text-3xl md:text-5xl font-serif leading-none align-top -translate-y-1 md:-transtalte-y-2 ml-2 select-none">
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