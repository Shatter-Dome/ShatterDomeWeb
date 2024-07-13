"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '../../../../utils/withAuth';
import ProductsList from '../../../../components/ProductsList';

const DashboardPage = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const [showProducts, setShowProducts] = useState(false); // State to toggle product display

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        router.push('../../admin');
    };

    const handleProductsClick = async () => {
        await fetchProducts();
        setShowProducts(true);
    };

    const fetchProducts = async () => {
        try {
            // Fetch topics from backend API (GET request)
            const response = await fetch('/api/products');

            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">Logo</div>
                    <button onClick={handleLogout} className="text-white">
                        Logout
                    </button>
                </div>
            </nav>
            <div className="container mx-auto mt-8 mb-8">
                <h1 className="text-4xl font-bold mb-4 text-center">Admin Panel</h1>
                <div className="flex space-x-4 pt-8 pl-8">
                    <a href="#" className="text-xl text-blue-500 hover:text-blue-700 font-bold" onClick={handleProductsClick}>
                        Products
                    </a>
                    <a href="#" className="text-xl text-blue-500 hover:text-blue-700 font-bold">Orders</a>
                </div>
                {showProducts && <ProductsList products={products} />}
            </div>
            <footer className="bg-gray-800 text-white text-center p-2 mt-4">
                &copy;copyright 2024 ShatterDome
            </footer>
        </div>
    );
};

export default withAuth(DashboardPage);

