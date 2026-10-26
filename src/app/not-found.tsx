import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen w-full bg-primary flex flex-col items-center justify-center p-6 text-center
                text-white relative overflow-hidden">
            {/* fondo con degradado */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#003875] to-[#002654] z-0" /> 
            {/* circulos decorativos */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-400/20 blur-3xl -top-24 -left-24 pointer-events-none z-[1]" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-yellow/20 blur-3xl -bottom-20 -right-20 pointer-events-none z-[1]" />

            <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
                {/* logo */}
                <div className="mb-8">
                    <Image 
                        src="/images/logo.png"
                        alt="FiCredit"
                        width={160}
                        height={44}
                        priority
                        className="h-11 w-auto object-contain"
                    />
                </div>
                <span className="font-heading font-extrabold text-7xl md:text-9xl text-white tracking-tight leading-none select-none mb-4">
                    404
                </span>
                <h1 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                    Página no encontrada
                </h1>
                <p className="font-body text-base text-blue-100/90 leading-relaxed mb-8">
                    Lo sentimos, la página que buscas no existe o se encuentra temporalmente en construcción.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2.5 font-heading font-semibold text-base px-8 py-3.5 rounded-card border-2 
                        border-accent-yellow bg-accent-yellow text-night-blue hover:bg-transparent hover:text-white transition-all duration-200
                        shadow-lg hover:shadow-none focus:outline-none focus:ring-0"
                >
                    <Home className="w-5 h-5" />
                        <span>Volver al Inicio</span>
                </Link>
            </div>

            <div className="absolute bottom-6 text-xs text-blue-200/60 font-body">
                FiCredit — Institución Financiera Supervisada por la SIB
            </div>
        </main>
    )
}