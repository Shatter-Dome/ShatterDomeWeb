"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Handle menu visibility based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-30 top-0 bg-white h-16 flex items-center">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-5">
                <div className="text-black text-2xl font-bold font-impact">
                    ShatterDome
                </div>
                {/* Mobile Menu Button */}
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-black">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
                {/* Nav Menu */}
                <div className={`flex-grow md:flex md:items-center md:justify-center space-x-4 md:space-x-7 mt-4 md:mt-0 transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Link href="/" className={currentPath === "/" ? "text-black" : "text-gray-400 hover:text-black"}>Home</Link>
                    <Link href="/product" className={currentPath === "/product" ? "text-black" : "text-gray-400 hover:text-black"}>Product</Link>
                    <Link href="/contacts" className={currentPath === "/contacts" ? "text-black" : "text-gray-400 hover:text-black"}>Contacts</Link>
                    <Link href="/aboutus" className={currentPath === "/aboutus" ? "text-black" : "text-gray-400 hover:text-black"}>About us</Link>
                </div>
                {/* Cart and User Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="/cart">
                        <Image src="/cart.svg" alt="cart" height="40" width="40" />
                    </Link>
                    <button>
                        <Image src="/user.svg" alt="user" height="30" width="30" className="pb-1" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
