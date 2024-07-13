"use client";
import React from 'react';
import { Order } from '../types/interfaces';

interface OrdersListProps {
    orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
    console.log("orders(from OrdersList):", orders);
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <div className="mb-8">
                <div>
                    <h3 className="text-xl font-bold mb-2">Pending Orders</h3>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => {
                            if (order.status === 'pending') {
                                return (
                                    <tr key={order._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{order.oid}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{order.customer.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">${order.totalAmount.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(order.orderDate).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Completed Orders</h3>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => {
                            if (order.status === 'completed') {
                                return (
                                    <tr key={order._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{order._id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{order.customer.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">${order.totalAmount.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(order.orderDate).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersList;
