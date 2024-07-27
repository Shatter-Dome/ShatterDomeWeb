import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left">
                    <p className="text-lg font-bold">ShatterDome</p>
                    <p className="mt-2">© {new Date().getFullYear()} ShatterDome. All rights reserved.</p>
                </div>
                <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center">
                    <Link href="/" className="hover:underline px-2">Home</Link>
                    <Link href="/product" className="hover:underline px-2">Product</Link>
                    <Link href="/contacts" className="hover:underline px-2">Contacts</Link>
                    <Link href="/aboutus" className="hover:underline px-2">About Us</Link>
                </div>
                <div className="mt-4 lg:mt-0 flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Image src="/facebook-icon.svg" alt="Facebook" height={24} width={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Image src="/twitter-icon.svg" alt="Twitter" height={24} width={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Image src="/instagram-icon.svg" alt="Instagram" height={24} width={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
