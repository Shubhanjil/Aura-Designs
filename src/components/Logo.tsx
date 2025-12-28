import auraLogo from '../assets/aura-logo-2.png';

const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <img 
        src={auraLogo}
        alt="Aura Designs - Architecture & Interior Design" 
        className={`h-14 w-auto object-contain ${className}`}
        />
    );
};

export default Logo;
