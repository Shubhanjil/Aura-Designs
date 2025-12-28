import { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppForm from "../components/WhatsAppForm";

const Index = () => {
    const [formOpen, setFormOpen] = useState(false);

    // Auto-open form after 1 minute
    useEffect(() => {
        const timer = setTimeout(() => {
        setFormOpen(true);
        }, 60000); // 60 seconds = 1 minute

        return () => clearTimeout(timer);
    }, []);

    const handleOpenForm = () => {
        setFormOpen(true);
    };

    return (
        <div className="min-h-screen bg-background">
        <Header onOpenForm={handleOpenForm} />
        <main>
            <HeroSection onOpenForm={handleOpenForm} />
            <ServicesSection />
            <AboutSection />
            <ContactSection onOpenForm={handleOpenForm} />
        </main>
        <Footer />
        <WhatsAppForm open={formOpen} onOpenChange={setFormOpen} />
        </div>
    );
};

export default Index;
