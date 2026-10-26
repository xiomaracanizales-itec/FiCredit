import React from "react"
import {
    MapPin,
    PhoneCall,
    MessageSquareText,
    ArrowRight
} from "lucide-react"

export const ContactSection = () => {
    return (
        <section className="py-16 md:py-20 bg-pale-sky">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-heading text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] font-bold text-night-blue mb-10 text-left">
                    Contacto
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
                    {/* tarjeta 1 */}
                    <div className="md:col-span-4 bg-white border border-border-gray rounded-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-night-blue mb-6">
                                Oficinas Centrales
                            </h3>
                            <p className="font-body text-[16px] text-night-blue/80 mb-6 leading-relaxed">
                                2ª. Calle 23-80 zona 15 Vista Hermosa II, Edificio Avante oficina 404
                            </p>
                            <div className="mb-6">
                                <span className="block font-bold text-sm text-night-blue mb-1">
                                    Horarios
                                </span>
                                <span className="font-body text-[16px] text-night-blue/80">
                                    Lunes a Viernes: 09:00 - 16:00
                                </span>
                            </div>
                        </div>
                        <a 
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1 mt-4"
                        >
                            Ver en Google Maps <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* tarjeta 2 */}
                    <div className="md:col-span-4 bg-white border border-border-gray rounded-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                <PhoneCall className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-night-blue mb-6">
                                Llámanos o Escríbenos
                            </h3>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <span className="block font-bold text-sm text-night-blue mb-1">
                                        Teléfono
                                    </span>
                                    <a 
                                        href="tel:22335300"
                                        className="fon-body text-[16px] text-primary font-medium hover:underline"
                                    >
                                        2233-5300
                                    </a>
                                </div>
                                <div>
                                    <span className="block font-bold text-sm text-night-blue mb-1">
                                        Correo electrónico
                                    </span>
                                    <a 
                                        href="mailto:info@ficredit.com.gt" 
                                        className="font-body text-[16px] text-primary font-medium hover:underline"
                                    >
                                        info@ficredit.com.gt
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a
                            href="mailto:info@ficredit.com.gt" 
                            className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1 mt-4"
                        >
                            Enviar un Mensaje <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* tarjeta 3 */}
                    <div className="md:col-span-4 bg-white border border-border-gray rounded-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                <MessageSquareText className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-night-blue mb-6">
                                Asistencia Inmediata
                            </h3>
                            <p className="font-body text-[16px] text-night-blue/80 mb-6 leading-relaxed">
                                Resuelve tus dudas o solicita información sobre créditos en tiempo real.
                            </p>
                        </div>
                        <a 
                            href="#"
                            className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1 mt-4"
                        >
                            Chatea con un Asesor <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}