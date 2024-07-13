"use client";
import React, { useState } from 'react';
import { Order } from '../types/interfaces';

interface OrdersListProps {
    orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

    const toggleExpand = (orderId: string) => {
        if (expandedOrderId === orderId) {
            setExpandedOrderId(null); // Collapse if already expanded
        } else {
            setExpandedOrderId(orderId); // Expand if not expanded
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>

            <div className="mb-8">
                <div>
                    <h3 className="text-xl font-bold mb-2">Pending Orders</h3>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => {
                            if (order.status === 'pending') {
                                return (
                                    <React.Fragment key={order._id}>
                                        <tr onClick={() => toggleExpand(order._id)} className="cursor-pointer">
                                            <td className="px-6 py-4 whitespace-nowrap">{order.oid}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.customer.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">${order.totalAmount.toFixed(2)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{new Date(order.orderDate).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                                        </tr>
                                        {expandedOrderId === order._id && (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-4">
                                                    <div className="bg-gray-100 p-4">
                                                        <p className="pb-5"><strong>Customer Name:</strong> {order.customer.name}</p>
                                                        <p className="pb-5"><strong>Customer Mobile:</strong> {order.customer.mobile}</p>
                                                        <h4 className="font-bold mt-2">Items Ordered:</h4>
                                                        <ul className="pb-5">
                                                            {order.items.map(item => (
                                                                <li key={item.productId}>{item.productId} -
                                                                    ${item.price.toFixed(2)}</li>
                                                            ))}
                                                        </ul>
                                                        <p><strong>Note:</strong> {order.note}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => {
                            if (order.status === 'completed' || order.status === 'shipped' || order.status === 'cancelled') {
                                return (
                                    <React.Fragment key={order._id}>
                                        <tr onClick={() => toggleExpand(order._id)} className="cursor-pointer">
                                            <td className="px-6 py-4 whitespace-nowrap">{order.oid}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.customer.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">${order.totalAmount.toFixed(2)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{new Date(order.orderDate).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                                        </tr>
                                        {expandedOrderId === order._id && (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-4">
                                                    <div className="bg-gray-100 p-4">
                                                        <p><strong>Customer Name:</strong> {order.customer.name}</p>
                                                        <p><strong>Customer Mobile:</strong> {order.customer.mobile}</p>
                                                        <h4 className="font-bold mt-2">Items Ordered:</h4>
                                                        <ul>
                                                            {order.items.map(item => (
                                                                <li key={item.productId}>{item.productId} -
                                                                    ${item.price.toFixed(2)}</li>
                                                            ))}
                                                        </ul>
                                                        <p><strong>Note:</strong> {order.note}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
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
