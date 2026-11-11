import React from "react"
import { ArrowRight, FileText } from "lucide-react"

export interface DocItem {
    title: string;
    pdfUrl: string;
}

interface DocCardsSectionProps {
    title: string;
    subtitle?: string;
    documents: DocItem[];
}

export const DocCardsSection: React.FC<DocCardsSectionProps> = ({
    title,
    subtitle,
    documents,
}) => {
    return (
        <section className="py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* encabezado */}
                <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-[22px] md:text-[28px] font-bold text-night-blue md-2">
                        { title }
                    </h2>
                    {subtitle && (
                        <p className="font-body text-sm md:text-base text-night-blue/70 leading-relaxed">
                            { subtitle }
                        </p>
                    )}
                </div>

                {/* tarjetas de descarga */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8">
                    {documents.map((doc, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-card p-6 md:p-8 border border-border-gray shadow-sm 
                                hover:shadow-md transition-shadow flex flex-col justify-between min-h-[160px]"
                        >
                            <h3 className="font-heading text-lg md:text-xl font-bold text-night-blue mb-4">
                                {doc.title}
                            </h3>

                            <div>
                                <a 
                                    href={doc.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold 
                                        text-primary hover:undrline group"
                                >
                                    <span>Descargar PDF</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}