import { Building2, Ruler, FileText, Plug, Palette } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const services = [
    {
        icon: Building2,
        title: "Architectural Planning & Design",
        description: "Comprehensive architectural solutions from concept to completion, creating functional and visually stunning structures.",
    },
    {
        icon: Ruler,
        title: "Elevation Design",
        description: "Eye-catching exterior facades that reflect your style and enhance the architectural character of your building.",
    },
    {
        icon: FileText,
        title: "Structural Design & Documentation",
        description: "Detailed structural plans and documentation ensuring safety, compliance, and seamless construction execution.",
    },
    {
        icon: Plug,
        title: "Electrical & Plumbing Design",
        description: "Efficient EPD layouts optimized for functionality, safety, and modern living requirements.",
    },
    {
        icon: Palette,
        title: "Interior Design",
        description: "Luxurious interior spaces that harmonize aesthetics with comfort, tailored to your lifestyle and preferences.",
    },
];

const ServicesSection = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

    return (
        <section id="services" className="py-24 bg-secondary/30 relative">
        <div className="absolute inset-0 geometric-pattern" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-hidden ${headerVisible ? 'scroll-visible' : ''}`}
            >
            <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
                What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Our <span className="text-gradient-silver">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From initial concept to final execution, we provide end-to-end design solutions 
                that transform spaces into extraordinary experiences.
            </p>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <div
                key={service.title}
                className={`group bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-card hover:-translate-y-1 scroll-hidden-scale stagger-${index + 1} ${gridVisible ? 'scroll-visible-scale' : ''}`}
                >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                    </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default ServicesSection;
