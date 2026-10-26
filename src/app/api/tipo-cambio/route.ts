import { NextResponse } from "next/server"

export async function  GET() {
    try {
        const soapEnvelope = `<?xml version="1.0" encoding="utf-8"?>
            <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <TipoCambioDia xmlns="http://www.banguat.gob.gt/variables/ws/" />
            </soap:Body>
            </soap:Envelope>`
        
        const response = await fetch(
            "https://banguat.gob.gt/variables/ws/TipoCambio.asmx",
            {
                method: "POST",
                headers: {
                    "Content-Type": "text/xml; charset=utf-8",
                    SOAPAction: "http://www.banguat.gob.gt/variables/ws/TipoCambioDia",
                },
                body: soapEnvelope,
                next: { revalidate: 3600 },
            }
        )

        if (!response.ok) {
            throw new Error(`Error HTTP de Banguat: ${response.status}`)
        }

        const xmlText = await response.text()

        // extraer el valor del tag <referencia>7.XX</referencia>
        const match = xmlText.match(/<referencia>([\d.]+)<\/referencia>/)
        const referencia = match ? parseFloat(match[1]) : 7.64

        // calcular compra y venta con margen bancario estandar si se requiere
        const tasa = referencia.toFixed(2)
        const spread = 0.05
        const compra = (referencia - spread).toFixed(2)
        const venta = (referencia + spread).toFixed(2)
        return NextResponse.json({
            success: true,
            venta: venta,
            compra: compra,
            referencia: referencia,
            fecha: new Date().toISOString()
        })
    } catch (error) {
        // fallback de seguridad si el servidor de Banguat esta lento o no responde
        return NextResponse.json({
            success: false,
            venta: "7.69",
            compra: "7.59",
            fallback: true,
        })
    }
}