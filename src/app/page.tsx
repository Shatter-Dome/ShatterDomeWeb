"use client";
import React, { useState, FormEvent, useEffect } from 'react';
//Test code

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topics, setTopics] = useState([]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Send POST request to create a new topic
            const response = await fetch('/api/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: name, description: email }),
            });

            const data = await response.json();
            console.log('Topic Created:', data.message);

            // Refresh topics list after submission
            await fetchTopics();

            // Clear input fields after successful submission
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error creating topic:', error);
        }
    };

    const fetchTopics = async () => {
        try {
            // Fetch topics from backend API (GET request)
            const response = await fetch('/api/topics');

            const data = await response.json();
            setTopics(data.topics);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            // Send DELETE request to delete a topic by ID
            const response = await fetch(`/api/topics?id=${id}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            console.log('Topic Deleted:', data.message);

            // Refresh topics list after deletion
            await fetchTopics();
        } catch (error) {
            console.error('Error deleting topic:', error);
        }
    };

    // Fetch topics on initial component render
    useEffect(() => {
        fetchTopics().then(r => r);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Submit Form</h1>
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">Submit
                </button>
            </form>

            <h2 className="text-xl font-bold mb-4">Topics</h2>
            <ul>
                {topics.map((topic: any) => (
                    <li key={topic._id} className="mb-4 p-4 border rounded-md">
                        <div className="text-lg font-bold mb-2">{topic.title}</div>
                        <div className="text-gray-700">{topic.description}</div>
                        <button onClick={() => handleDelete(topic._id)}
                                className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200">Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
