"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="w-full">
            <div className="bg-[#00428A]/30 border-t border-border-gray py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 lg:gap-12">
                        {/* col1 - legales */}
                        <div className="md:col-span-3 space-y-4">
                            <h4 className="font-heading text-lg font-bold text-night-blue">
                                Legales
                            </h4>
                            <ul className="space-y-2.5 font-body text-[16px] text-night-blue/80">
                                <li>
                                    <Link 
                                        href="/legales/informacion-financiera"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Información Financiera
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/legales/terminos-condiciones"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Términos y Condiciones
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* col2 - quienes somos */}
                        <div className="md:col-span-3 space-y-4">
                            <h4 className="font-heading text-lg font-bold text-night-blue">
                                Quiénes Somos
                            </h4>
                            <ul className="space-y-2.5 font-body text-[16px] text-night-blue/80">
                                <li>
                                    <Link 
                                        href="/quienes-somos/conoce-ficredit"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Conoce FiCredit
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/quienes-somos/gobierno-corporativo"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Gobierno Corporativo
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/quienes-somos/transparencia-cumplimiento"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Transparencia y Cumplimiento
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* col3 accesos rapidos */}
                        <div className="md:col-span-3 space-y-4">
                            <h4 className="font-heading text-lg font-bold text-night-blue">
                                Accesos Rápidos
                            </h4>
                           <ul className="space-y-2.5 font-body text-[16px] text-night-blue/80">
                                <li>
                                    <Link 
                                        href="/calculadora"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Calculadoras Financieras
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/tarifarios"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Tarifarios
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/contactanos"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Contáctanos
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/mapa-sitio"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Mapa del Sitio
                                    </Link>
                                </li>

                            </ul> 
                        </div>

                        {/* col4 - social media */}
                        <div className="md:col-span-3 space-y-4">
                            <h4 className="font-heading text-lg font-bold text-night-blue">
                                Síguenos
                            </h4>
                            <ul className="space-y-2.5 font-body text-[16px] text-night-blue/80">
                                <li>
                                    <Link 
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <a 
                                        href="https://wa.me/50222335300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* pie de pagina */}
            <div className="bg-primary text-white py-4 border-t border-primary-dark/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
                    {/* logo */}
                    <div className="flex justify-center sm:justify-start">
                        <Link
                            href="/"
                            className="flex items-center"
                        >
                            <Image 
                                src="/images/logo.png"
                                alt="FiCredit"
                                width={130}
                                height={35}
                                style={{width: "auto"}}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                    </div>
                    <p className="font-body text-sm font-medium text-white text-center">
                        Ciudad de Guatemala, {currentYear}
                    </p>
                    <div className="hidden sm:block" />
                </div>
            </div>
        </footer>
    )
}