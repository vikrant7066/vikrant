import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        if (href === "#") {
            // Scroll to the top
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const offset = -85; // Adjust based on your navbar height
                const targetPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = targetPosition + window.scrollY + offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 lg:flex"style={{"borderRadius":"50px"}}>
                    <div className="flex items-center justify-between gap-6">
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            className="relative text-sm text-white hover:text-yellow-400 group"
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`lg:hidden ${isMobileMenuOpen ? "backdrop-blur-md" : ""}`}>
                    <div className="flex items-center justify-between">
                        <div className="flex-grow"></div> {/* Empty space to push the icon right */}
                        <button className="focus:outline-none" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <FaTimes className="m-2 h-6 w-5" />
                            ) : (
                                <FaBars className="m-2 h-6 w-5" />
                            )}
                        </button>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="relative block w-full text-lg text-white hover:text-yellow-400 group"
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-20"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
