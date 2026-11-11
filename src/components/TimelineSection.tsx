import React from "react"

export interface MileStoneItem {
    title: string;
    description: string;
}

interface TimelineSectionProps {
    title: string;
    items: MileStoneItem[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
    title, items }) => {
        return (
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-[24px] md:text-[32px] font-bold text-night-blue mb-10
                        max-w-2xl leading-snug">
                        { title }
                    </h2>

                    <div className="space-y-8 pl-2 md:pl-4 border-l-2 border-primary/20">
                        { items.map((milestone, idx) => (
                            <div key={idx} className="relative pl-6 md:pl-8">
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white-4 border-primary" /> 
                                <h3 className="font-heading text-lg md:text-xl font-bold text-night-blue mb-2">
                                    { milestone.title }
                                </h3>
                                <p className="font-body text-sm md:text-base text-night-blue/70 leading-relaxed max-w-3xl">
                                    { milestone.description }
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }