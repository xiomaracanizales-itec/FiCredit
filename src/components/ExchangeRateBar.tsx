"use client"

import React, { useEffect, useState } from "react"

export const ExchangeRateBar = () => {
    const [rates, setRates] = useState<{ venta: string; compra: string }>({
        venta: "0.00",
        compra: "0.00"
    })

    useEffect(() => {
        fetch("/api/tipo-cambio")
            .then((res) => res.json())
            .then((data) => {
                if (data.venta && data.compra) {
                    setRates({ venta: data.venta, compra: data.compra })
                }
            })
            .catch(() => {
                // mantiene el valor por defecto en caso de error
            })
    }, [])

    // formato de fecha en español
    const todayFormatted = new Intl.DateTimeFormat("es-GT", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    .format(new Date())
    .toUpperCase()

    return (
        <section className="bg-white border-y border-border-gray py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* titulo y fecha */}
                    <div className="text-center md:text-left">
                        <h3 className="font-heading text-2xl font-bold text-night-blue tracking-tight">
                            Cambio del día
                        </h3>
                        <p className="font-body text-xs text-night-blue/60 tracking-wider font-semibold mt-1">
                            {todayFormatted}
                        </p>
                    </div>
                    {/* venta y compra */}
                    <div className="flex items-center gap-8 md:gap-12">
                        {/* venta */}
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs uppercase tracking-wider font-bold text-night-blue/70">
                                VENTA
                            </span>
                            <span className="font-heading text-2xl md:text-3xl font-extrabold text-night-blue">
                                Q {rates.venta}
                            </span>
                        </div>
                        {/* compra */}
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs uppercase tracking-wider font-bold text-night-blue/70">
                                COMPRA
                            </span>
                            <span className="font-heading text-2xl md:text-3xl font-extrabold text-night-blue">
                                Q {rates.compra}
                            </span>
                        </div>
                    </div>
                    
                    
                    {/* compra */}
                </div>
            </div>
        </section>
    )
}