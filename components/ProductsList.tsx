import React from 'react';
import { Product } from '../types/interfaces';
import ListItem from './ListItem';
import mongoose from "mongoose";

interface Props {
    products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
    const handleUpdate = async (_id: mongoose.Schema.Types.ObjectId, productId: string, updatedName: string, updatedVersion: string, updatedPrice: string, updatedDesc: string) => {
        try {
            // Construct the request body with updated data
            const requestBody = JSON.stringify({
                newPID: productId,
                newName: updatedName,
                newVersion: updatedVersion,
                newPrice: updatedPrice,
                newDesc: updatedDesc,
            });

            // Make PUT request to update product on backend
            const response = await fetch(`/api/products/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            console.log(`Product ${productId} updated successfully.`);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDelete = async (_id: mongoose.Schema.Types.ObjectId) => {
        try {
            // Make DELETE request to delete product on backend
            const response = await fetch(`/api/products/${_id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            console.log(`Product ${_id} deleted successfully.`);
            // Optionally, update the state or fetch products again to reflect the deletion
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="flex flex-col mt-8">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ul>
                <li className="flex justify-between items-center border-b border-gray-300">
                    <span className="text-lg font-bold">Name</span>
                    <span className="text-lg font-bold">Version</span>
                    <span className="text-lg font-bold">Price</span>
                    <span className="text-lg font-bold">Actions</span>
                </li>
                {products.map((product) => (
                    <ListItem key={product.pid} product={product} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
