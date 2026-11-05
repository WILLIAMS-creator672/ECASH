import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { FiChevronDown } from "react-icons/fi"
import Logo from "@/components/Logo"
import Button from "@/components/Button"
import { APP_CONFIG } from "@/constants/appConfig"


export default function NavBar() {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const navRef = useRef(null)

    const linkStyle = ({ isActive }) =>
        isActive
            ? "text-brand-red font-bold"
            : "text-white font-bold hover:text-brand-red"

    // white on the black mobile menu, black inside the white desktop dropdown
    const dropdownLinkStyle = ({ isActive }) =>
        isActive
            ? "text-brand-red font-bold"
            : "text-white lg:text-black font-bold hover:text-brand-red"

    const closeAll = () => {
        setMenuOpen(false)
        setDropdownOpen(false)  
    }

    // Close everything on outside click or Escape
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
              closeAll()
            }
        }
        const handleEscape = (e) => {
            if (e.key === "Escape") closeAll()
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscape)
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEscape)
        }
    }, [])

    return (
        
        <nav ref={navRef} className="section-px py-4 bg-black sticky top-0 z-50">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
                <Logo />

                {/* Hamburger: mobile and tablet only */}
                <button
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    className="lg:hidden text-white text-3xl leading-none"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* 2. Added absolute positioning for mobile, and static/flex for desktop (lg) */}
                <div
                    className={`w-full grid transition-[grid-template-rows,visibility] duration-300 ease-in-out
                        absolute top-full left-0 right-0 bg-black shadow-2xl px-6 pb-6
                        lg:static lg:flex lg:flex-1 lg:w-auto lg:visible lg:bg-transparent lg:shadow-none lg:px-0 lg:pb-0
                        ${menuOpen ? "grid-rows-[1fr] visible" : "grid-rows-[0fr] invisible"}`}
                >
                    <div className="min-h-0 overflow-hidden lg:overflow-visible lg:flex-1">
                        <div className="flex flex-col gap-6 pt-6 lg:pt-0 lg:flex-row lg:items-center lg:justify-between lg:pl-10">

                            {/* Links */}
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                                <NavLink to="/" onClick={closeAll} className={linkStyle}>HOME</NavLink>
                                <NavLink to="/why-choose-us" onClick={closeAll} className={linkStyle}>WHY CHOOSE US</NavLink>
                                <NavLink to="/contact-us" onClick={closeAll} className={linkStyle}>CONTACT US</NavLink>
                                <NavLink to="/about-us" onClick={closeAll} className={linkStyle}>ABOUT US</NavLink>

                                {/* Dropdown: click on mobile, hover on desktop */}
                                <div className="relative group">
                                    <button
                                        onClick={() => setDropdownOpen((open) => !open)}
                                        aria-expanded={dropdownOpen}
                                        className="text-white font-bold hover:text-brand-red cursor-pointer flex items-center gap-1"
                                    >
                                        SAVINGS & INVESTMENTS
                                        <span
                                            className={`transition-transform duration-300 lg:group-hover:rotate-180 ${
                                                dropdownOpen ? "rotate-180 lg:rotate-0" : ""
                                            }`}
                                        >
                                            <FiChevronDown strokeWidth={4.5}/>
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300
                                            ${dropdownOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                                            lg:grid-rows-[1fr] lg:absolute lg:top-full lg:left-0 lg:z-50 lg:pt-4
                                            lg:opacity-0 lg:invisible lg:translate-y-3
                                            lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0`}
                                    >
                                        <div className="min-h-0 overflow-hidden lg:overflow-visible">
                                            <div className="flex flex-col gap-4 pt-4 pl-4 border-l-2 border-brand-red lg:pt-5 lg:pb-5 lg:px-10 lg:border-l-0 lg:bg-white lg:shadow-2xl lg:w-max">
                                                <NavLink to="/savings" onClick={closeAll} className={dropdownLinkStyle}>Savings</NavLink>
                                                <NavLink to="/investments" onClick={closeAll} className={dropdownLinkStyle}>Investments</NavLink>
                                                <NavLink to="/home-loan" onClick={closeAll} className={dropdownLinkStyle}>Home Loan</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <NavLink to="/help" onClick={closeAll} className={linkStyle}>HELP</NavLink>
                            </div>

                            {/* Button */}
                            <div>
                                <Button>ONLINE BANKING</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}