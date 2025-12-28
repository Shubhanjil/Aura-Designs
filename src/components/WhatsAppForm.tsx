import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { toast } from "../hooks/use-toast";

interface WhatsAppFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER; // Replace with actual WhatsApp number

const services = [
    "Architectural Planning & Design",
    "Elevation Design",
    "Structural Design & Documentation",
    "Electrical & Plumbing Design (EPD)",
    "Interior Design",
    "All",
    "Other",
];

const WhatsAppForm = ({ open, onOpenChange }: WhatsAppFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
        toast({
            title: "Please fill in required fields",
            description: "Name, phone number, and service selection are required.",
            variant: "destructive",
        });
        return;
        }

        setIsSubmitting(true);

        const whatsappMessage = encodeURIComponent(
        `Hello Aura Designs!\n\n` +
        `*Name:* ${formData.name.trim()}\n` +
        `*Email:* ${formData.email.trim() || "Not provided"}\n` +
        `*Phone:* ${formData.phone.trim()}\n` +
        `*Service Interested:* ${formData.service}\n` +
        `*Message:* ${formData.message.trim() || "No additional message"}`
        );

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
        
        window.open(whatsappUrl, "_blank");

        toast({
        title: "Redirecting to WhatsApp",
        description: "Your inquiry is being sent via WhatsApp.",
        });

        setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        });
        setIsSubmitting(false);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-card border-border shadow-elevated animate-scale-in">
            <DialogHeader>
            <DialogTitle className="font-display text-2xl text-gradient-gold">
                Get in Touch
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
                Share your project details and we'll connect with you on WhatsApp.
            </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                Name <span className="text-primary">*</span>
                </Label>
                <Input
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary"
                maxLength={100}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary"
                maxLength={255}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                Phone <span className="text-primary">*</span>
                </Label>
                <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary"
                maxLength={20}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="service" className="text-foreground">
                Service Interested <span className="text-primary">*</span>
                </Label>
                <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
                    <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                    {services.map((service) => (
                    <SelectItem key={service} value={service}>
                        {service}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary min-h-[100px]"
                maxLength={1000}
                />
            </div>

            <Button
                type="submit"
                variant="silver"
                className="w-full"
                disabled={isSubmitting}
            >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send via WhatsApp
            </Button>
            </form>
        </DialogContent>
        </Dialog>
    );
};

export default WhatsAppForm;
