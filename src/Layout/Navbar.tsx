import { useState } from "react";
import { Menu, X } from "lucide-react";

 const NavLink = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"},
 ];

export const  Navbar=() => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight">
                    Sisira <span >J.S</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 items-center gap-1">
                        {NavLink.map((link, index)=> (
                            <a href={link.href} key= {index} className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full hover:bg-sidebar">{link.label}</a>
                        ))}
                    </div>
                </div>

                {/* mobile */}

                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev)=> !prev)}>
                   {isMobileMenuOpen? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* mobile menu */}
            {isMobileMenuOpen && (
            <div className="md:hidden min-h-screen glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

                        {NavLink.map((link, index)=> (
                            <a 
                            href={link.href} 
                            key= {index} 
                            className="text-lg  text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen((prev)=> !prev)}
                            >
                                {link.label}
                                </a>
                        ))}
                </div>
            </div>
            )}
        </header>
    );
};