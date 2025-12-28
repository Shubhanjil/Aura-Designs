import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface ContactSectionProps {
    onOpenForm: () => void;
}

const ContactSection = ({ onOpenForm }: ContactSectionProps) => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="contact" className="py-24 bg-secondary/30 relative">
        <div className="absolute inset-0 geometric-pattern" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div 
            ref={headerRef}
            className={`max-w-4xl mx-auto text-center scroll-hidden ${headerVisible ? 'scroll-visible' : ''}`}
            >
            <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Let's Create Something <span className="text-gradient-silver">Beautiful</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                Ready to transform your space? Get in touch with us and let's discuss how we can 
                bring your architectural and design vision to life.
            </p>

            <Button variant="hero" size="xl" onClick={onOpenForm} className="mb-16">
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Us a Message
            </Button>

            {/* Contact Info Grid */}
            <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
                <div className={`bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-200 scroll-hidden-scale stagger-1 ${cardsVisible ? 'scroll-visible-scale' : ''}`}>
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground">{import.meta.env.VITE_WHATSAPP_NUMBER}</p>
                </div>
                <div className={`bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-200 scroll-hidden-scale stagger-2 ${cardsVisible ? 'scroll-visible-scale' : ''}`}>
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground">{import.meta.env.VITE_EMAIL}</p>
                </div>
                <div className={`bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-200 scroll-hidden-scale stagger-3 ${cardsVisible ? 'scroll-visible-scale' : ''}`}>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">{import.meta.env.VITE_CITY}</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default ContactSection;
