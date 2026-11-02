import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center flex-wrap gap-1.5 text-xs md:text-sm text-night-blue/60 font-body">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1
                    return (
                        <li key={index} className="flex items-center gap-1.5">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={isLast ? "text-night-blue/90 font-medium" : ""}>
                                    {item.label}
                                </span>
                            )
                        }
                        {!isLast && (
                            <ChevronRight className="w-3.5 h-3.5 text-night/blue/40" />
                        )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}