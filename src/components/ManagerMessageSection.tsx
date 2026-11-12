import React from "react"
import Image from "next/image"

interface ManagerMessageSectionProps {
    title?: string;
    message: string;
    author: string;
    imageSrc?: string;
}

export const ManagerMessageSection: React.FC<ManagerMessageSectionProps> = ({
    title = "Mensaje de Gerencia General",
    message,
    author,
    imageSrc
}) => {
    return (
        <section className="bg-primary text-white py-6 md:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-10 text-center md:text-left">
                    {title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* texto de la cita */}
                    <div className="lg:col-span-8 space-y-6">
                        <blockquote className="font-heading text-lg md:text-xl font-medium leading-relaxed text-blue-50">
                            <span className="text-blue-300/40 text-3xl font-serif mr-2">“</span>
                            {message}
                            <span className="text-blue-300/40 text-3xl font-serif ml-2">”</span>
                        </blockquote>

                        <p className="font-body text-sm text-blue-200 font-medium">
                            {author}
                        </p>
                    </div>
                    {/* foto gerente */}
                    <div className="lg:col-span-4 flex justify-center lg:justify-end">
                        <div className="w-44 h-56 md:w-48 md:h-60 bg-white rounded-card overflow-hidden shadow-xl relative 
                            flex items-center justify-center border-4 border-white/10">
                                {imageSrc ? (
                                    <Image
                                        src={imageSrc}
                                        alt={author}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="text-night-blue/40 font-body text-xs text-center p-4">
                                        Fotografía Gerencia
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}