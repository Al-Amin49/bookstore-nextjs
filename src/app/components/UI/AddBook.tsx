"use client";

import { addBook } from '@/services/actions/book';
import React, { useState } from 'react';

type FormDataType = {
    title: string;
    author: string;
    isbn: string;
    cover_image: string;
    description: string;
    price: string;
    published_date: string;
    category: string;
    stock: string;
};

const AddBook: React.FC = () => {
    const [formData, setFormData] = useState<FormDataType>({
        title: '',
        author: '',
        isbn: '',
        cover_image: '',
        description: '',
        price: '',
        published_date: '',
        category: '',
        stock: '',
    });

    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const bookData = new FormData();
        for (const key in formData) {
            bookData.append(key, formData[key as keyof FormDataType]);
        }

        try {
            const addedBook = await addBook(bookData);
            console.log('Book added:', addedBook);
            setMessage('Book added successfully!');
            setFormData({
                title: '',
                author: '',
                isbn: '',
                cover_image: '',
                description: '',
                price: '',
                published_date: '',
                category: '',
                stock: '',
            });
        } catch (error) {
            console.error('Failed to add book:', error);
            setMessage('Failed to add book.');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-4">Add Book</h3>
            {message && <p className="mb-4 text-green-600">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    name="isbn"
                    placeholder="ISBN"
                    value={formData.isbn}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    name="cover_image"
                    placeholder="Cover Image URL"
                    value={formData.cover_image}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="date"
                    name="published_date"
                    value={formData.published_date}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
