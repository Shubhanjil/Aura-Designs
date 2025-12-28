import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-exterior.png";

interface HeroSectionProps {
    onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
    return (
        <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
            <img
            src={heroImage}
            alt="Luxury interior design by Aura Designs"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
            <div className="absolute inset-0 geometric-pattern" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24">
            <div className="max-w-3xl">
            <div 
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
            >
                <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Architecture & Interior Design
                </span>
            </div>
            
            <h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 opacity-0 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
            >
                Designing Spaces That 
                <span className="text-gradient-silver"> Inspire</span>
            </h1>
            
            <p 
                className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 opacity-0 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
            >
                Transform your vision into reality with our comprehensive architectural and interior design services. 
                We craft spaces that blend aesthetics with functionality.
            </p>
            
            <div 
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up"
                style={{ animationDelay: "0.8s" }}
            >
                <Button variant="hero" size="xl" onClick={onOpenForm}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Project
                </Button>
                <Button variant="silverOutline" size="xl" asChild>
                <a href="#services">Explore Services</a>
                </Button>
            </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-float" style={{ animationDelay: "1.2s" }}>
            <a href="#services" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ArrowDown className="h-4 w-4" />
            </a>
        </div>
        </section>
    );
};

export default HeroSection;
