export interface SubCategoryItem{
    title: string;
    href: string;
    isPdf?: boolean;
}

export interface SubCategory {
    id: string;
    title: string;
    href: string;
    iconName: "accounts" | "credits" | "exchange" | "about" | "governance" | "transparency" | "financial";
    items: SubCategoryItem[];
}

export interface MainNavTab {
    id: "personas" | "empresas" | "acerca-de";
    label: string;
    href: string;
    subCategories: SubCategory[];
}

export const navigationData: MainNavTab[] =[
    {
        id: "personas",
        label: "Personas",
        href: "/personas",
        subCategories: [
            {
                id: "cuentas-personas",
                title: "Cuentas de Ahorro",
                href: "/personas/cuentas",
                iconName: "accounts",
                items: [
                    { title: "Plazo Fijo", href: "/personas/cuentas/plazo/fijo" },
                    { title: "Ahorro Corriente", href: "/personas/cuentas/ahorro-corriente"},
                ],
            },
            {
                id: "creditos-personas",
                title: "Créditos",
                href: "/personas/creditos",
                iconName: "credits",
                items: [
                    { title: "Crédito Hipotecario", href: "/personas/creditos/hipotecario" },
                    { title: "Crédito Vehículo", href: "/personas/creditos/vehiculo" },
                    { title: "Consolidación Deudas", href: "/personas/creditos/consolidacion" },
                    { title: "Crédito Fácil", href: "/personas/creditos/facil" },
                    { title: "Crédito Back to Back", href: "/personas/creditos/back-to-back" },
                ],
            },
            {
                id: "divisas-personas",
                title: "Cambio Divisas",
                href: "/personas/divisas",
                iconName: "exchange",
                items: [
                    { title: "Compra y Venta de Divisas", href: "/personas/divisas" },
                    { title: "Cotización del Día", href: "/personas/divisas#cotizacion" }
                ]
            }
        ],
    },
    {
        id: "empresas",
        label: "Empresas",
        href: "/empresas",
        subCategories: [
            {
                id: "cuentas-empresas",
                title: "Cuentas",
                href: "/empresas/cuentas",
                iconName: "accounts",
                items: [
                    { 
                        title: "Depósito de Ahorro", 
                        href: "/empresas/cuentas/deposito-ahorro" 
                    },
                    { 
                        title: "Depósito a Plazos", 
                        href: "/empresas/cuentas/depostio-plazos" 
                    }
                ]
            },
            {
                id: "creditos-empresas",
                title: "Créditos",
                href: "/empresas/creditos",
                iconName: "credits",
                items: [
                    { 
                        title: "Crédito Revolvente", 
                        href: "/empresas/creditos/revolvente" 
                    },
                    { 
                        title: "Crédito Empresarial para Inversión", 
                        href: "/empresas/creditos/inversion" 
                    },
                    { 
                        title: "Crédito Back to Back", 
                        href: "/empresas/creditos/back-to-back" 
                    },
                    { 
                        title: "Crédito Importación de Bienes", 
                        href: "/empresas/creditos/importacion" 
                    }
                ]
            },
            {
                id: "divisas-empresas",
                title: "Cambio Divisas",
                href: "/empresas/divisas",
                iconName: "exchange",
                items: [
                    { title: "Operaciones de Divisas Empresariales", href: "/empresas/divisas" }
                ]
            }
        ],
    },
    {
        id: "acerca-de",
        label: "Acerca de",
        href: "/acerca-de",
        subCategories: [
            {
                id: "quienes-somos",
                title: "Institucional",
                href: "/acerca-de/quienes-somos",
                iconName: "about",
                items: [
                    {   title: "Historia", 
                        href: "/acerca-de/quienes-somos#historia"
                    },
                    {
                        title: "Misión y Visión",
                        href: "/acerca-de/quienes-somos#mision-vision"
                    },
                    {
                        title: "Valores",
                        href: "/acerca-de/quienes-somos#valores"
                    },
                    {
                        title: "Mensaje de Gerencia",
                        href: "/acerca-de/quienes-somos#mensaje-gerencia"
                    },
                ],
            },
            {
                id: "gobierno-corporativo",
                title: "Gobierno Corporativo",
                href: "/acerca-de/gobierno-corporativo",
                iconName: "governance",
                items: [
                    { 
                        title: "Informe Anual", 
                        href: "/docs/informe-anual.pdf",
                        isPdf: true 

                    },
                    { 
                        title: "Manual de Gobierno", 
                        href: "/docs/manual-gobierno.pdf",
                        isPdf: true

                    },
                    { 
                        title: "Consejo de Administración", 
                        href: "/docs/consejo-admin.pdf",
                        isPdf: true 

                    },
                ]
            },
            {
                id: "transparencia",
                title: "Transparencia y Cumplimiento",
                href: "/acerca-de/transparencia",
                iconName: "transparency",
                items: [
                    { 
                        title: "Memorias de Labores", 
                        href: "/acerca-de/docs/memorias",
                        isPdf: true 

                    },
                    { 
                        title: "Regulaciones y Leyes", 
                        href: "/acerca-de/docs/regulaciones",
                        isPdf: true 

                    },
                    { 
                        title: "Tarifario Ahorro Corriente", 
                        href: "/acerca-de/docs/tarifario-ahorro-corriente",
                        isPdf: true  

                    },
                    { 
                        title: "Tarifario Ahorro Fijo", 
                        href: "/acerca-de/docs/tarifacio-ahorro-fijo",
                        isPdf: true  

                    }
                ]
            }, 
            {
                id: "informacion-financiera",
                title: "Información Financiera",
                href: "/acerca-de/informacion-financiera",
                iconName: "financial",
                items: [
                    {
                        title: "Balance General", 
                        href: "/acerca-de/informacion-finaciera?tab=balance"

                    },
                    {
                        title: "Estado de Resultados", 
                        href: "/acerca-de/informacion-finaciera?tab=resultados"

                    },
                    {
                        title: "Indicadores Financieros", 
                        href: "/acerca-de/informacion-finaciera?tab=indicadores"

                    }
                ]
            }  
       ],
    }      
]