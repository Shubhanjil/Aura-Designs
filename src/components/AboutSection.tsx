import { Award, Users, Home, Clock } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Logo from "./Logo";

// const startYear = Number(import.meta.env.VITE_START_YEAR);
// const yearsOfExperience = new Date().getFullYear() - startYear;

const stats = [
    { icon: Home, value: "250+", label: "Projects Completed" },
    { icon: Users, value: "180+", label: "Happy Clients" },
    { icon: Award, value: "6+", label: "Years Experience" },
    { icon: Clock, value: "100%", label: "On-Time Delivery" },
    ];

    const AboutSection = () => {
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
    const { ref: decorRef, isVisible: decorVisible } = useScrollAnimation();
    const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div ref={contentRef}>
                <span className={`inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4 scroll-hidden-left ${contentVisible ? 'scroll-visible-left' : ''}`}>
                About Us
                </span>
                <h2 className={`font-display text-4xl md:text-5xl text-foreground mb-6 scroll-hidden-left stagger-1 ${contentVisible ? 'scroll-visible-left' : ''}`}>
                Crafting <span className="text-gradient-silver">Exceptional</span> Spaces
                </h2>
                <p className={`text-muted-foreground text-lg leading-relaxed mb-6 scroll-hidden-left stagger-2 ${contentVisible ? 'scroll-visible-left' : ''}`}>
                At Aura Designs, we believe that great architecture is more than just buildings—it's about 
                creating environments that enhance life. Our team of passionate architects and designers 
                brings decades of combined experience to every project.
                </p>
                <p className={`text-muted-foreground text-lg leading-relaxed mb-8 scroll-hidden-left stagger-3 ${contentVisible ? 'scroll-visible-left' : ''}`}>
                From intimate residential interiors to grand commercial structures, we approach each project 
                with fresh eyes and unwavering commitment to excellence. Our holistic approach ensures that 
                every detail, from structural integrity to aesthetic harmony, is thoughtfully considered.
                </p>

                {/* Stats Grid */}
                <div ref={statsRef} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                    <div 
                    key={stat.label}
                    className={`bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-200 scroll-hidden-scale stagger-${index + 1} ${statsVisible ? 'scroll-visible-scale' : ''}`}
                    >
                    <stat.icon className="h-6 w-6 text-primary mb-3" />
                    <div className="font-display text-3xl text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
                </div>
            </div>

            {/* Decorative Element */}
            <div 
                ref={decorRef}
                className={`relative hidden lg:block scroll-hidden-right ${decorVisible ? 'scroll-visible-right' : ''}`}
            >
                <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden">
                <div className="absolute inset-0 geometric-pattern opacity-20" />
                <div className="absolute inset-4 rounded-xl border-2 border-primary/20" />
                <div className="absolute inset-8 rounded-lg border border-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        {/* <div className="font-display text-8xl text-gradient-silver mb-4">A</div>
                        <div className="font-display text-2xl text-foreground tracking-widest">AURA</div>
                        <div className="text-muted-foreground tracking-[0.3em] text-sm">DESIGNS</div> */}
                        <Logo className="h-64 w-auto mx-auto mb-8" />
                    </div>
                </div>
                </div>
                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
            </div>
        </div>
        </section>
    );
};

export default AboutSection;
