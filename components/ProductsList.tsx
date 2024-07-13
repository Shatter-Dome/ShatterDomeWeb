"use client";
import React, { useState, useEffect } from 'react';
import { Product } from '../types/interfaces';
import ListItem from './ListItem';

interface Props {
    products: Product[];
}

const ProductsList: React.FC<Props> = ({ products: initialProducts }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [newProduct, setNewProduct] = useState({ pid: '', name: '', version: '', price: '', desc: '' });
    const [isAdding, setIsAdding] = useState(false); // State to toggle the input fields

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleUpdate = async (_id: string, productId: string, updatedName: string, updatedVersion: string, updatedPrice: string, updatedDesc: string) => {
        try {
            const requestBody = JSON.stringify({
                newPID: productId,
                newName: updatedName,
                newVersion: updatedVersion,
                newPrice: updatedPrice,
                newDesc: updatedDesc,
            });

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
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDelete = async (_id: string) => {
        try {
            const url = `/api/products?id=${encodeURIComponent(_id)}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            await fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleAdd = async () => {
        try {
            const requestBody = JSON.stringify(newProduct);
            await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });
            setNewProduct({ pid: '', name: '', version: '', price: '', desc: '' });
            setIsAdding(false);
            await fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex flex-col mt-8">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4"
                onClick={() => setIsAdding(!isAdding)}
            >
                {isAdding ? 'Cancel' : 'Add Product'}
            </button>

            {isAdding && (
                <div className="mb-4">
                    <input
                        type="text"
                        name="pid"
                        placeholder="Product ID"
                        value={newProduct.pid}
                        onChange={handleInputChange}
                        className="border rounded p-2 mr-2"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        className="border rounded p-2 mr-2"
                    />
                    <input
                        type="text"
                        name="version"
                        placeholder="Version"
                        value={newProduct.version}
                        onChange={handleInputChange}
                        className="border rounded p-2 mr-2"
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        className="border rounded p-2 mr-2"
                    />
                    <input
                        type="text"
                        name="desc"
                        placeholder="Description"
                        value={newProduct.desc}
                        onChange={handleInputChange}
                        className="border rounded p-2 mr-2"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAdd}
                    >
                        Save Product
                    </button>
                </div>
            )}

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product
                        ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                    <ListItem key={product._id} product={product} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;