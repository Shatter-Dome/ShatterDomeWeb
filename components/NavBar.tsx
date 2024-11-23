"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RoboticsLoader from "./RoboticsLoader";

const NavBar = () => {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-30 top-0 bg-white">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-5">
                {/* Logo and Title */}
                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="ShatterDome Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                    <span className="text-black text-2xl font-bold font-impact">
                        ShatterDome
                    </span>
                </div>

                {/* Hamburger Menu Button (Mobile View) */}
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-black">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Centered Navigation Links (Desktop View) */}
                <div
                    className={`hidden md:flex md:items-center md:justify-center space-x-7`}
                >
                    <Link
                        href="/"
                        className={
                            currentPath === "/"
                                ? "text-black"
                                : "text-gray-400 hover:text-black"
                        }
                    >
                        Home
                    </Link>
                    <Link
                        href="/product"
                        className={
                            currentPath === "/product"
                                ? "text-black"
                                : "text-gray-400 hover:text-black"
                        }
                    >
                        Product
                    </Link>
                    <Link
                        href="/how-it-works"
                        className={
                            currentPath === "/how-it-works"
                                ? "text-black"
                                : "text-gray-400 hover:text-black"
                        }
                    >
                        How It Works
                    </Link>
                    <Link
                        href="/aboutus"
                        className={
                            currentPath === "/aboutus"
                                ? "text-black"
                                : "text-gray-400 hover:text-black"
                        }
                    >
                        About Us
                    </Link>
                </div>

                {/* Cart and User Icons (Desktop View) */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/cart">
                        <Image
                            src="/cart.svg"
                            alt="Cart"
                            height="36"
                            width="36"
                        />
                    </Link>
                     {/*change the routing afterwards */}
                    {/* <Link href="/">
                        <Image
                            src="/user.svg"
                            alt="User"
                            height="28"
                            width="28"
                        />
                    </Link> */}
                </div>
            </div>

            {/* Mobile Menu Content */}
            {isOpen && (
                <div className="block md:hidden px-5 py-4 bg-white">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className={
                                currentPath === "/"
                                    ? "text-black"
                                    : "text-gray-400 hover:text-black"
                            }
                        >
                            Home
                        </Link>
                        <Link
                            href="/product"
                            className={
                                currentPath === "/product"
                                    ? "text-black"
                                    : "text-gray-400 hover:text-black"
                            }
                        >
                            Product
                        </Link>
                        <Link
                            href="/how-it-works"
                            className={
                                currentPath === "/how-it-works"
                                    ? "text-black"
                                    : "text-gray-400 hover:text-black"
                            }
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/aboutus"
                            className={
                                currentPath === "/aboutus"
                                    ? "text-black"
                                    : "text-gray-400 hover:text-black"
                            }
                        >
                            About Us
                        </Link>
                        <div className="flex items-center space-x-4 mt-4">
                            <Link href="/cart">
                                <Image
                                    src="/cart.svg"
                                    alt="Cart"
                                    height="36"
                                    width="36"
                                />
                            </Link>
                            {/*change the routing afterwards */}
                            {/* <Link href="/"> 
                                <Image
                                    src="/user.svg"
                                    alt="User"
                                    height="28"
                                    width="28"
                                />
                            </Link> */}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
