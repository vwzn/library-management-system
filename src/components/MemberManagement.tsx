// src/components/MemberManagement.tsx
"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiUser } from "react-icons/fi";

export default function MemberManagement() {
    const [members, setMembers] = useState([
        {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            phone: "08123456789",
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "08234567890",
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const filteredMembers = members.filter(
        (member) =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddMember = (e: React.FormEvent) => {
        e.preventDefault();
        setMembers([
            ...members,
            {
                id: (members.length + 1).toString(),
                ...newMember,
            },
        ]);
        setNewMember({
            name: "",
            email: "",
            phone: "",
        });
        setShowAddForm(false);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">👥 Manajemen Anggota</h2>

            <div className="flex justify-between items-center mb-4">
                <div className="relative w-64">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Cari anggota..."
                        className="pl-10 pr-4 py-2 border rounded-lg w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    onClick={() => setShowAddForm(true)}>
                    <FiPlus className="mr-2" /> Tambah Anggota
                </button>
            </div>

            {showAddForm && (
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium mb-2">Tambah Anggota Baru</h3>
                    <form onSubmit={handleAddMember}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={newMember.name}
                                    onChange={(e) =>
                                        setNewMember({
                                            ...newMember,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded"
                                    value={newMember.email}
                                    onChange={(e) =>
                                        setNewMember({
                                            ...newMember,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nomor Telepon
                                </label>
                                <input
                                    type="tel"
                                    className="w-full p-2 border rounded"
                                    value={newMember.phone}
                                    onChange={(e) =>
                                        setNewMember({
                                            ...newMember,
                                            phone: e.target.value,
                                        })
                                    }
                                    required
                                />
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
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Nama</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Telepon</th>
                            <th className="py-2 px-4 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMembers.map((member, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }>
                                <td className="py-2 px-4 border-b">
                                    {member.id}
                                </td>
                                <td className="py-2 px-4 border-b flex items-center">
                                    <FiUser className="mr-2 text-gray-500" />{" "}
                                    {member.name}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {member.email}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {member.phone}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                                        Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        Hapus
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
