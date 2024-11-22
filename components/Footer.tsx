import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8 mt-16 border-t border-gray-200">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 space-y-4 lg:space-y-0">
                {/* Logo and Text */}
                <div className="text-center lg:text-left">
                    <p className="text-xl font-bold">ShatterDome</p>
                    <p className="mt-1 text-sm text-gray-500">© {new Date().getFullYear()} ShatterDome. All rights reserved.</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-end space-x-4">
                    <a href="https://www.linkedin.com/company/shatterdome-labs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            height={28}
                            width={28}
                            className="hover:opacity-75"
                        />
                    </a>
                    <a href="https://www.instagram.com/shatterdomelabs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Image
                            src="/instagram.svg"
                            alt="Instagram"
                            height={30}
                            width={30}
                            className="hover:opacity-75"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
