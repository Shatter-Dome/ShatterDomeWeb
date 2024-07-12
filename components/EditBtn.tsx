// EditButton.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface EditButtonProps {
    productId: string;
    name: string;
    version: string;
    price: string;
    desc: string;
    onUpdate: (productId: string, updatedName: string, updatedVersion: string, updatedPrice: string, updatedDesc: string) => void;
}

const EditButton: React.FC<EditButtonProps> = ({ productId, name, version, price, desc, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editFields, setEditFields] = useState({
        name,
        version,
        price,
        desc,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditFields(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        onUpdate(productId, editFields.name, editFields.version, editFields.price, editFields.desc);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditFields({
            name,
            version,
            price,
            desc,
        });
    };

    if (isEditing) {
        return (
            <div className="block mb-4 space-x-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        className="border border-gray-300 p-2"
                        value={editFields.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="version"
                        className="border border-gray-300 p-2"
                        value={editFields.version}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="price"
                        className="border border-gray-300 p-2"
                        value={editFields.price}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="desc"
                        className="border border-gray-300 p-2"
                        value={editFields.desc}
                        onChange={handleInputChange}
                    />
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleUpdate}>
                        Update
                    </button>
                    <button className="bg-gray-500 text-white p-2 rounded" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <span className="text-blue-500 cursor-pointer" onClick={() => setIsEditing(true)}>
                <Image src="/edit.svg" alt="Edit" width={20} height={20}/>
            </span>
        );
    }
};

export default EditButton;