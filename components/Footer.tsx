import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8 mt-16 border-t border-gray-200">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
                <div className="text-center lg:text-left mb-4 lg:mb-0">
                    <p className="text-2xl font-bold">ShatterDome</p>
                    <p className="mt-2 text-gray-500">© {new Date().getFullYear()} ShatterDome. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Image src="/facebook-icon.svg" alt="Facebook" height={24} width={24} className="hover:opacity-75"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Image src="/twitter-icon.svg" alt="Twitter" height={24} width={24} className="hover:opacity-75"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Image src="/instagram-icon.svg" alt="Instagram" height={24} width={24} className="hover:opacity-75"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
