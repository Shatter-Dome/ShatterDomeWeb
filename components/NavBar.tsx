"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const currentPath = usePathname();
    return (
        <nav className="fixed w-full z-30 top-0 bg-white">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-5">
                <div className="text-black text-2xl font-bold font-impact">
                    ShatterDome
                </div>
                <div className="flex-grow flex justify-center space-x-4 md:space-x-7 mt-4 md:mt-0">
                    <Link href="/" className={currentPath === "/" ? "text-black" : "text-gray-400 hover:text-black"}>Home</Link>
                    <Link href="/product" className={currentPath === "/product" ? "text-black" : "text-gray-400 hover:text-black"}>Product</Link>
                    <Link href="/contacts" className={currentPath === "/contacts" ? "text-black" : "text-gray-400 hover:text-black"}>Contacts</Link>
                    <Link href="/aboutus" className={currentPath === "/aboutus" ? "text-black" : "text-gray-400 hover:text-black"}>About us</Link>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
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
