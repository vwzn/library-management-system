// src/components/BookManagement.tsx
"use client";

import { useState, useEffect } from "react";
import {
    FiPlus,
    FiSearch,
    FiBook,
    FiBookOpen,
    FiTrash,
    FiEdit,
} from "react-icons/fi";

interface Book {
    id: string;
    code: string;
    title: string;
    author: string;
    year: number;
    type: string;
    status: string;
}

export default function BookManagement() {
    const [books, setBooks] = useState([
        {
            code: "F001",
            title: "Harry Potter",
            author: "J.K. Rowling",
            year: 1997,
            type: "Fiction",
            status: "Available",
        },
        {
            code: "NF001",
            title: "Sapiens",
            author: "Noah Harari",
            year: 2011,
            type: "Non-Fiction",
            status: "Borrowed",
        },
    ]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [newBook, setNewBook] = useState({
        code: "",
        title: "",
        author: "",
        year: "",
        type: "Fiction",
    });

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddBook = (e: React.FormEvent) => {
        e.preventDefault();
        setBooks([
            ...books,
            {
                code: newBook.code,
                title: newBook.title,
                author: newBook.author,
                year: parseInt(newBook.year as string),
                type: newBook.type,
                status: "Available",
            },
        ]);
        setNewBook({
            code: "",
            title: "",
            author: "",
            year: "",
            type: "Fiction",
        });
        setShowAddForm(false);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 drop-shadow-lg">
                {" "}
                Manajemen Buku
            </h2>

            <div className="flex justify-between items-center mb-4">
                <div className="relative w-64">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100" />
                    <input
                        type="text"
                        placeholder="Cari buku..."
                        className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-100"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button
                    className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                    onClick={() => setShowAddForm(true)}>
                    <FiPlus className="mr-2" /> Tambah Buku
                </button>
            </div>

            {showAddForm && (
                <div className="bg-purple-900 p-4 rounded-lg mb-4 text-white">
                    <h3 className="font-medium mb-2">Tambah Buku Baru</h3>
                    <form onSubmit={handleAddBook}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Kode Buku
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={newBook.code}
                                    onChange={(e) =>
                                        setNewBook({
                                            ...newBook,
                                            code: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Judul
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={newBook.title}
                                    onChange={(e) =>
                                        setNewBook({
                                            ...newBook,
                                            title: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Penulis
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={newBook.author}
                                    onChange={(e) =>
                                        setNewBook({
                                            ...newBook,
                                            author: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Tahun
                                </label>
                                <input
                                    type="number"
                                    className="w-full p-2 border rounded"
                                    value={newBook.year}
                                    onChange={(e) =>
                                        setNewBook({
                                            ...newBook,
                                            year: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Jenis
                                </label>
                                <select
                                    className="w-full p-2 border rounded"
                                    value={newBook.type}
                                    onChange={(e) =>
                                        setNewBook({
                                            ...newBook,
                                            type: e.target.value,
                                        })
                                    }>
                                    <option value="Fiction">Fiksi</option>
                                    <option value="Non-Fiction">
                                        Non-Fiksi
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                className="px-4 py-2 border rounded-lg"
                                onClick={() => setShowAddForm(false)}>
                                Batal
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-black border rounded-lg overflow-hidden">
                    <thead className="bg-black text-gray-300">
                        <tr>
                            <th className="py-2 px-4 border-b">Kode</th>
                            <th className="py-2 px-4 border-b">Judul</th>
                            <th className="py-2 px-4 border-b">Penulis</th>
                            <th className="py-2 px-4 border-b">Tahun</th>
                            <th className="py-2 px-4 border-b">Jenis</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="justify-center text-center">
                        {filteredBooks.map((book, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? "bg-purple-950"
                                        : "bg-purple-900"
                                }>
                                <td className="py-2 px-4 border-b text-white">
                                    {book.code}
                                </td>
                                <td className="py-2 px-4 border-b text-white">
                                    {book.title}
                                </td>
                                <td className="py-2 px-4 border-b text-white">
                                    {book.author}
                                </td>
                                <td className="py-2 px-4 border-b text-white">
                                    {book.year}
                                </td>
                                <td className="py-2 px-4 border-b text-white text-center">
                                    {book.type === "Fiction" ? (
                                        <span className="flex items-center text-purple-100 text-center">
                                            <FiBook className="mr-1" /> Fiksi
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-green-100">
                                            <FiBookOpen className="mr-1" />{" "}
                                            Non-Fiksi
                                        </span>
                                    )}
                                </td>
                                <td className="py-2 px-4 border-b text-white">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${
                                            book.status === "Available"
                                                ? "bg-green-100 text-green-800"
                                                : book.status === "Borrowed"
                                                ? "bg-red-100 text-red-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}>
                                        {book.status === "Available"
                                            ? "Tersedia"
                                            : book.status === "Borrowed"
                                            ? "Dipinjam"
                                            : "Dipesan"}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b text-white">
                                    <button className="text-purple-100 hover:text-purple-500 mr-2">
                                        <FiEdit />
                                    </button>
                                    <button className="text-purple-100 hover:text-purple-500">
                                        <FiTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
