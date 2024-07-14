"use client";
import React, { useState, useEffect } from 'react';
import { Product } from '../types/interfaces';
import Image from "next/image";

interface Props {
    product: Product;
    onUpdate: (
        _id: string,
        productId: string,
        updatedName: string,
        updatedVersion: string,
        updatedPrice: string,
        updatedDesc: string
    ) => void;
    onDelete: (_id: string) => void;
}

const ListItem: React.FC<Props> = ({ product, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [version, setVersion] = useState(product.version);
    const [price, setPrice] = useState(product.price);
    const [desc, setDesc] = useState(product.desc);
    const [originalValues, setOriginalValues] = useState({
        name: product.name,
        version: product.version,
        price: product.price,
        desc: product.desc,
    });

    useEffect(() => {
        setName(product.name);
        setVersion(product.version);
        setPrice(product.price);
        setDesc(product.desc);
        setOriginalValues({
            name: product.name,
            version: product.version,
            price: product.price,
            desc: product.desc,
        });
    }, [product]);

    const handleUpdateClick = () => {
        onUpdate(product._id, product.pid.toString(), name, version, price.toString(), desc);
        setOriginalValues({
            name: name,
            version: version,
            price: price,
            desc: desc,
        });
        setIsEditing(false); // Exit edit mode after update
    };

    const handleCancelClick = () => {
        // Restore original values
        setName(originalValues.name);
        setVersion(originalValues.version);
        setPrice(originalValues.price);
        setDesc(originalValues.desc);
        setIsEditing(false); // Exit edit mode
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDeleteClick = () => {
        onDelete(product._id);
    };

    return (
        <>
            <tr className="border-b border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">{product.pid}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing ? (
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full max-w-md px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    ) : (
                        name
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing ? (
                        <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} className="w-full max-w-md px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    ) : (
                        version
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing ? (
                        <input type="text" value={price.toString()} onChange={(e) => setPrice(e.target.value)} className="w-full max-w-md px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    ) : (
                        price
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {!isEditing ? (
                        <span className="text-blue-500 cursor-pointer" onClick={handleEditClick}>
                                <Image src="/edit.svg" alt="Edit" width={20} height={20}/>
                        </span>
                    ) : null}
                </td>
            </tr>
            {isEditing && (
                <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">
                        Description:{" "}
                    </td>
                    <td colSpan={2} className="px-6 py-4">
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)}
                                  className="w-full max-w-md px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                  rows={4}/>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={handleUpdateClick}
                        >
                            Save
                        </button>
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                    </td>
                </tr>
            )}
        </>
    );
};

export default ListItem;
