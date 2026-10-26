"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Menu,
    X,
    ShieldCheck,
    Building2,
    Coins,
    UserCheck,
    Scale,
    FileText,
    LineChart,
} from "lucide-react"
import { navigationData, SubCategory } from "@/config/navigation"

export const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeTabId, setActiveTabId] = useState<string | null>(null)
    const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeMobileTabId, setActiveMobileTabId] = useState<string | null>("personas")
    const [activeMobileSubCategoryId, setActiveMobileSubCategoryId] = useState<string | null>("cuentas-personas")

    const toggleMobileTab = (tabId: string) => {
        if(activeMobileTabId === tabId) {
            setActiveMobileTabId(null)
            setActiveMobileSubCategoryId(null)
        } else {
            setActiveMobileTabId(tabId)
            setActiveMobileSubCategoryId(null)
        }
    }

    const toggleMobileSubCategory = (subCatId: string) => {
        setActiveMobileSubCategoryId((prev) => (prev === subCatId ? null : subCatId))
    }

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    const activeTab = navigationData.find((tab) => tab.id === activeTabId)

    useEffect(() => {
        if (activeTab && activeTab.subCategories.length > 0) {
            setActiveSubCategoryId(activeTab.subCategories[0].id)
        } else {
            setActiveSubCategoryId(null)
        }
    }, [activeTabId])

    const activeSubCategory = activeTab?.subCategories.find(
        (sub) => sub.id === activeSubCategoryId
    )
    
    const renderIcon = (iconName: SubCategory["iconName"]) => {
        const iconClass = "w-5 h-5 text-primary"
        switch (iconName) {
            case "accounts":
                return <ShieldCheck className={iconClass}/>
            case "credits":
                return <Building2 className={iconClass}/>
            case "exchange":
                return <Coins className={iconClass}/>
            case "about":
                return <UserCheck className={iconClass}/>
            case "governance":
                return <FileText className={iconClass}/>
            case "transparency":
                return <Scale className={iconClass}/>
            case "financial":
                return <LineChart className={iconClass}/>
            default:
                return <ShieldCheck className={iconClass} />
        }
    }

    return (
        <header
        className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300
            ${
                isScrolled || isMobileMenuOpen
                ? "bg-primary shadow-lg"
                : "bg-transparent"
            }
        `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-20">

                    {/* logo */}
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/images/logo.png"
                            alt="FiCredit - Soluciones Financieras"
                            width={147}
                            height={40}
                            priority
                            style={{width: "auto"}}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* menu principal desktop */}
                    <nav className="hidden md:flex items-center space-x-2 pt-4">
                        {navigationData.map((tab) => {
                            const isActive = activeTabId === tab.id
                            return (
                                <div
                                    key={tab.id}
                                    onMouseEnter={() => setActiveTabId(tab.id)}
                                    className="relative"
                                >
                                    <Link
                                        href={tab.href}
                                        onClick={() => setActiveTabId(null)}
                                        className={`inline-block px-6 py-3 font-heading font-semibold 
                                            text-base transition-all duration-50
                                            ${
                                                isActive
                                                ? "bg-white text-primary rounded-t-xl shadow-md font-bold"
                                                : "text-white hover:text-accent-yellow"
                                            }
                                            `}
                                    >
                                        {tab.label}
                                    </Link>
                                </div>
                            )
                        })}
                    </nav>

                    {/* boton hamburguesa mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white hover:text-accent-yellow"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* tarjeta desplegable - desktop */}
                    {activeTab && (
                        <div
                            className="hidden md:block absolute top-full right-4 lg:right-8 z-50 w-[650px]
                                bg-white rounded-b-xl rounded-tl-xl shadow-2xl border border-border-gray
                                overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
                            onMouseLeave={() => setActiveTabId(null)}
                        >
                            <div className="grid grid-cols-12 min-h-[250px]">
                                {/* col izquierda */}
                                <div className="col-span-6 bg-slate-50 border-r border-border-gray p-4 flex-col space-y-2">
                                    {activeTab?.subCategories.map((subCat) => {
                                        const isSubActive = activeSubCategoryId === subCat.id
                                        return (
                                            <div
                                                key={subCat.id}
                                                onMouseEnter={() => setActiveSubCategoryId(subCat.id)}
                                            >
                                                <Link
                                                    href={subCat.href}
                                                    onClick={() => setActiveTabId(null)}
                                                    className={`flex  items-center justify-between p-3 roundend-lg
                                                        text-left transition-colors font-medium text-sm
                                                        ${
                                                            isSubActive
                                                                ? "bg-white text-primary shadow-sm font-bold border border-border-gray/50"
                                                                : "text-night-blue/80 hover:bg-slate-100"
                                                        }
                                                    `}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        {renderIcon(subCat.iconName)}
                                                        <span>{subCat.title}</span>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-primary" />
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* col derecha */}
                                <div className="col-span-6 bg-white p-6 relative flex flex-col justify-start space-y-4">
                                    {/* boton cerrar X */}
                                    <button
                                        onClick={() => setActiveTabId(null)}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-night-blue transition-colors p-1"
                                        aria-label="Cerrar menú"
                                    >
                                        <X size={18} />
                                    </button>
                                    {/* lista subcategorias */}
                                    <div className="pt-2 flex flex-col space-y-3">
                                        {activeSubCategory?.items.map((item, idx) => (
                                            item.isPdf 
                                            ? (
                                                <a
                                                    key={idx}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => setActiveTabId(null)}
                                                    className="text-base text-gray-500 hover:text-primary hover:font-semibold font-medium flex items-center justify-between"
                                                >
                                                    <span>{item.title}</span>
                                                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono">
                                                        PDF
                                                    </span>
                                                </a>
                                            )
                                            : (
                                                <Link
                                                    key={idx}
                                                    href={item.href}
                                                    onClick={() => setActiveTabId(null)}
                                                    className="text-base text-gray-500 hover:text-primary hover:font-semibold font-medium transition-colors duration-150"
                                                >
                                                    {item.title}
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* menu responsivo mobile */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed top-20 inset-x-0 bottom-0 bg-white z-50 overflow-y-auto pb-12">
                        {navigationData.map((tab) => {
                            const isTabActive = activeMobileTabId === tab.id

                            return (
                                <div key={tab.id} className="border-b border-border-gray/40">
                                    {/* nivel 1 - categoria */}
                                    <button
                                        type="button"
                                        onClick={() => toggleMobileTab(tab.id)}
                                        className={`w-full flex items-center justify-between px-5 py-4 text-left font-heading text-base font-bold transition-colors
                                            ${ isTabActive
                                                ? "bg-slate-100 text-night-blue"
                                                : "bg-slate-50/80 text-night-blue/80 hover:bg-slate/100 hover:text-primary"
                                            }
                                            `}
                                    >
                                        <span>{tab.label}</span>
                                        <ChevronRight 
                                            className={`w-4 h-4 text-primary transition-transform duration-200
                                                ${ isTabActive ? "rotate-90" : ""}
                                                `}
                                        />
                                    </button>
                                    {/* contenido desplegado de la pestana activa */}
                                    {isTabActive && (
                                        <div className="bg-white">
                                            {tab.subCategories.map((subCat) => {
                                                const isSubExpanded = activeMobileSubCategoryId === subCat.id
                                                return(
                                                    <div key={subCat.id} className="border-b border-gray-100 last:border-b-0">
                                                        {/* nivel 2 - subcategoria */}
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleMobileSubCategory(subCat.id)}
                                                            className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-night-blue
                                                                hover:text-primary transition-colors"   
                                                        >
                                                            <span>{subCat.title}</span>
                                                            {isSubExpanded ? (
                                                                <ChevronUp className="w-4 h-4 text-primary" /> 
                                                            ) : (
                                                                <ChevronRight className="w-4 h-4 text-primary" />
                                                            )
                                                        }
                                                        </button>
                                                        {/* nivel 3 - pgs finales */}
                                                        {isSubExpanded && (
                                                            <div className="bg-slate-50/60 pb-1">
                                                                {subCat.items.map((item, idx) =>
                                                                    item.isPdf ? (
                                                                        <a
                                                                            key={idx}
                                                                            href={item.href}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                            className="flex items-center justify-between pl-10 pr-6 py-3 text-sm text-gray-700 hover:text-primary
                                                                                hover:bg-slate-100 transition-colors"
                                                                        >
                                                                            <span>{item.title}</span>
                                                                            <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">PDF</span>
                                                                        </a>
                                                                    ) : (
                                                                        <Link
                                                                            key={idx}
                                                                            href={item.href}
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                            className="flex items-center justify-between pl-10 pr-6 py-3 text-sm text-gray-700 hover:text-primary
                                                                            hover:bg-slate-100 transition-colors"
                                                                        >
                                                                            <span>{item.title}</span>
                                                                            <ChevronRight className="w-4 h-4 text-primary" />
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        }
                        )}

                    </div>
                )}
            </div>
        </header>
    )
}