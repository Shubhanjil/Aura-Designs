import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

interface HeaderProps {
    onOpenForm: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center">
                <Logo className="h-12 md:h-14" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                    {link.name}
                </a>
                ))}
                <Button variant="silver" onClick={onOpenForm}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Get Quote
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-foreground p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
                <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                    >
                    {link.name}
                    </a>
                ))}
                <Button variant="silver" onClick={() => { onOpenForm(); setMobileMenuOpen(false); }}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Quote
                </Button>
                </div>
            </div>
            )}
        </nav>
        </header>
    );
};

export default Header;
