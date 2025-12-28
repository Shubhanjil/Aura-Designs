import Logo from "./Logo";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <Logo className="h-10" />
            </div>
            
            <nav className="flex flex-wrap items-center justify-center gap-6">
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
                </a>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
                </a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
                </a>
            </nav>
            
            <p className="text-muted-foreground text-sm">
                © {currentYear} Aura Designs. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
