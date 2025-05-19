// src/components/TransactionManagement.tsx
"use client";

import { useState } from "react";
import { FiArrowUp, FiArrowDown, FiClock, FiDollarSign } from "react-icons/fi";

export default function TransactionManagement() {
    const [activeTransactionTab, setActiveTransactionTab] = useState("borrow");
    const [books] = useState([
        { code: "F001", title: "Harry Potter", status: "Available" },
        { code: "NF001", title: "Sapiens", status: "Borrowed" },
    ]);
    const [members] = useState([
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
    ]);
    const [transactions, setTransactions] = useState([
        {
            id: "1",
            bookCode: "F001",
            bookTitle: "Harry Potter",
            memberName: "John Doe",
            loanDate: "2023-05-01",
            dueDate: "2023-05-15",
            returnDate: "",
            status: "Active",
        },
        {
            id: "2",
            bookCode: "NF001",
            bookTitle: "Sapiens",
            memberName: "Jane Smith",
            loanDate: "2023-05-05",
            dueDate: "2023-05-19",
            returnDate: "2023-05-18",
            status: "Returned",
        },
    ]);

    const [borrowForm, setBorrowForm] = useState({
        bookCode: "",
        memberId: "",
        dueDate: "",
    });

    const [returnForm, setReturnForm] = useState({
        transactionId: "",
        fine: 0,
    });

    const handleBorrowSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const book = books.find((b) => b.code === borrowForm.bookCode);
        const member = members.find((m) => m.id === borrowForm.memberId);

        if (book && member) {
            const newTransaction = {
                id: (transactions.length + 1).toString(),
                bookCode: book.code,
                bookTitle: book.title,
                memberName: member.name,
                loanDate: new Date().toISOString().split("T")[0],
                dueDate: borrowForm.dueDate,
                returnDate: "",
                status: "Active",
            };

            setTransactions([...transactions, newTransaction]);
            setBorrowForm({
                bookCode: "",
                memberId: "",
                dueDate: "",
            });
        }
    };

    const handleReturnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedTransactions = transactions.map((t) =>
            t.id === returnForm.transactionId
                ? {
                      ...t,
                      returnDate: new Date().toISOString().split("T")[0],
                      status: "Returned",
                  }
                : t
        );
        setTransactions(updatedTransactions);
        setReturnForm({
            transactionId: "",
            fine: 0,
        });
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 drop-shadow-lg">
                Manajemen Transaksi
            </h2>

            <div className="flex border-b mb-6">
                <button
                    className={`px-4 py-2 font-medium ${
                        activeTransactionTab === "borrow"
                            ? "text-purple-600 border-b-2 border-purple-600"
                            : "text-gray-600"
                    }`}
                    onClick={() => setActiveTransactionTab("borrow")}>
                    <FiArrowDown className="inline mr-2" /> Peminjaman
                </button>
                <button
                    className={`px-4 py-2 font-medium ${
                        activeTransactionTab === "return"
                            ? "text-purple-600 border-b-2 border-purple-600"
                            : "text-gray-600"
                    }`}
                    onClick={() => setActiveTransactionTab("return")}>
                    <FiArrowUp className="inline mr-2" /> Pengembalian
                </button>
                <button
                    className={`px-4 py-2 font-medium ${
                        activeTransactionTab === "history"
                            ? "text-purple-600 border-b-2 border-purple-600"
                            : "text-gray-600"
                    }`}
                    onClick={() => setActiveTransactionTab("history")}>
                    <FiClock className="inline mr-2" /> Riwayat
                </button>
            </div>

            {activeTransactionTab === "borrow" && (
                <div>
                    <h3 className="font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 drop-shadow-lg">
                        Form Peminjaman Buku
                    </h3>
                    <form
                        onSubmit={handleBorrowSubmit}
                        className="bg-purple-900 p-4 rounded-lg mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-white">
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Buku
                                </label>
                                <select
                                    className="w-full p-2 border rounded"
                                    value={borrowForm.bookCode}
                                    onChange={(e) =>
                                        setBorrowForm({
                                            ...borrowForm,
                                            bookCode: e.target.value,
                                        })
                                    }
                                    required>
                                    <option value="">Pilih Buku</option>
                                    {books
                                        .filter((b) => b.status === "Available")
                                        .map((book) => (
                                            <option
                                                key={book.code}
                                                value={book.code}>
                                                {book.title} ({book.code})
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Anggota
                                </label>
                                <select
                                    className="w-full p-2 border rounded"
                                    value={borrowForm.memberId}
                                    onChange={(e) =>
                                        setBorrowForm({
                                            ...borrowForm,
                                            memberId: e.target.value,
                                        })
                                    }
                                    required>
                                    <option value="">Pilih Anggota</option>
                                    {members.map((member) => (
                                        <option
                                            key={member.id}
                                            value={member.id}>
                                            {member.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Tanggal Jatuh Tempo
                                </label>
                                <input
                                    type="date"
                                    className="w-full p-2 border rounded text-white"
                                    value={borrowForm.dueDate}
                                    onChange={(e) =>
                                        setBorrowForm({
                                            ...borrowForm,
                                            dueDate: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                Proses Peminjaman
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {activeTransactionTab === "return" && (
                <div>
                    <h3 className="font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 drop-shadow-lg">
                        Form Pengembalian Buku
                    </h3>
                    <form
                        onSubmit={handleReturnSubmit}
                        className="bg-purple-900 p-4 rounded-lg mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-white">
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Transaksi
                                </label>
                                <select
                                    className="w-full p-2 border rounded"
                                    value={returnForm.transactionId}
                                    onChange={(e) =>
                                        setReturnForm({
                                            ...returnForm,
                                            transactionId: e.target.value,
                                        })
                                    }
                                    required>
                                    <option value="">Pilih Transaksi</option>
                                    {transactions
                                        .filter((t) => t.status === "Active")
                                        .map((transaction) => (
                                            <option
                                                key={transaction.id}
                                                value={transaction.id}>
                                                {transaction.bookTitle} -{" "}
                                                {transaction.memberName} (Jatuh
                                                tempo: {transaction.dueDate})
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Denda (jika ada)
                                </label>
                                <div className="relative">
                                    <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="number"
                                        className="w-full pl-10 p-2 border rounded"
                                        value={returnForm.fine}
                                        onChange={(e) =>
                                            setReturnForm({
                                                ...returnForm,
                                                fine:
                                                    parseInt(e.target.value) ||
                                                    0,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                Proses Pengembalian
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div>
                <h3 className="font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 drop-shadow-lg">
                    {activeTransactionTab === "borrow" && "Peminjaman Aktif"}
                    {activeTransactionTab === "return" && "Peminjaman Aktif"}
                    {activeTransactionTab === "history" && "Riwayat Transaksi"}
                </h3>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-purple-950 border rounded-lg overflow-hidden">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">Buku</th>
                                <th className="py-2 px-4 border-b">Anggota</th>
                                <th className="py-2 px-4 border-b">
                                    Tanggal Pinjam
                                </th>
                                <th className="py-2 px-4 border-b">
                                    Jatuh Tempo
                                </th>
                                <th className="py-2 px-4 border-b">
                                    Tanggal Kembali
                                </th>
                                <th className="py-2 px-4 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions
                                .filter(
                                    (t) =>
                                        (activeTransactionTab === "borrow" &&
                                            t.status === "Active") ||
                                        (activeTransactionTab === "return" &&
                                            t.status === "Active") ||
                                        activeTransactionTab === "history"
                                )
                                .map((transaction, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-purple-950"
                                                : "bg-purple-900"
                                        }>
                                        <td className="py-2 px-4 border-b text-white">
                                            {transaction.id}
                                        </td>
                                        <td className="py-2 px-4 border-b text-white">
                                            {transaction.bookTitle} (
                                            {transaction.bookCode})
                                        </td>
                                        <td className="py-2 px-4 border-b text-white">
                                            {transaction.memberName}
                                        </td>
                                        <td className="py-2 px-4 border-b text-white">
                                            {transaction.loanDate}
                                        </td>
                                        <td className="py-2 px-4 border-b text-white">
                                            {transaction.dueDate}
                                        </td>
                                        <td className="py-2 px-4 border-b text-white">
                                            {transaction.returnDate || "-"}
                                        </td>
                                        <td className="py-2 px-4 border-b text-white">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${
                                                    transaction.status ===
                                                    "Active"
                                                        ? "bg-purple-100 text-purple-800"
                                                        : "bg-green-100 text-green-800"
                                                }`}>
                                                {transaction.status === "Active"
                                                    ? "Aktif"
                                                    : "Dikembalikan"}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
