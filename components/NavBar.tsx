"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const currentPath = usePathname();
    return (
        <nav className="fixed w-full z-30 top-0 bg-white pt-12">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-black text-2xl font-bold font-impact">
                    ShatterDome
                </div>
                <div className="flex-grow flex justify-center space-x-7">
                    <Link href="/" className={currentPath === "/" ? "text-black" : "text-gray-400 hover:text-black"}>Home</Link>
                    <Link href="/product" className={currentPath === "/product" ? "text-black" : "text-gray-400 hover:text-black"}>Product</Link>
                    <Link href="/contacts" className={currentPath === "/contacts" ? "text-black" : "text-gray-400 hover:text-black"}>Contacts</Link>
                    <Link href="/aboutus" className={currentPath === "/aboutus" ? "text-black" : "text-gray-400 hover:text-black"}>About us</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/cart">
                        <Image src="cart.svg" alt="cart" height="40" width="40"/>
                    </Link>
                    <button>
                        <Image src="user.svg" alt="user" height="30" width="30" className="pb-1"/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;