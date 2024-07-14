"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '../../../../utils/withAuth';
import ProductsList from '../../../../components/ProductsList';
import OrdersList from '../../../../components/OrdersList';
import { Order } from '../../../../types/interfaces';

const DashboardPage = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [showProducts, setShowProducts] = useState(false); // State to toggle product display
    const [showOrders, setShowOrders] = useState(false); // State to toggle orders display
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        router.push('../../admin');
    };

    const handleProductsClick = async () => {
        await fetchProducts();
        setShowProducts(true);
        setShowOrders(false);
    };

    const handleOrdersClick = async () => {
        await fetchOrders();
        setShowOrders(true);
        setShowProducts(false);
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrders(data.orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div className="min-h-screen">
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">Logo</div>
                    <button onClick={handleLogout} className="text-white">
                        Logout
                    </button>
                </div>
            </nav>
            <div className="container mx-auto mt-8 mb-8 min-h-screen">
                <h1 className="text-4xl font-bold mb-4 text-center">Admin Panel</h1>
                <div className="flex space-x-4 pt-8 pl-8">
                    <a href="#" className="text-xl text-blue-500 hover:text-blue-700 font-bold" onClick={handleProductsClick}>
                        Products
                    </a>
                    <a href="#" className="text-xl text-blue-500 hover:text-blue-700 font-bold" onClick={handleOrdersClick}>
                        Orders
                    </a>
                </div>
                {showProducts && <ProductsList products={products}/>}
                {showOrders && <OrdersList orders={orders} />}
            </div>
            <footer className="bg-gray-800 text-white text-center p-2 mt-4">
                &copy;copyright 2024 ShatterDome
            </footer>
        </div>
    );
};

export default withAuth(DashboardPage);

