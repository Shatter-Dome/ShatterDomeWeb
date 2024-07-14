// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white font-semibold">Admin Panel</div>
                <div className="flex space-x-4">
                    <Link href="../src/app/admin/products">
                        <a className="text-white">Products</a>
                    </Link>
                    <Link href="../src/app/admin/orders">
                        <a className="text-white">Orders</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
