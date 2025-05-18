// src/components/StatsOverview.tsx
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Manajemen Buku", value: 35 },
    { name: "Manajemen Anggota", value: 30 },
    { name: "Peminjaman Buku", value: 20 },
    { name: "Pengembalian Buku", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function StatsOverview() {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">
                📊 Statistik Perpustakaan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Fitur Sistem</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) =>
                                        `${name}: ${(percent * 100).toFixed(
                                            0
                                        )}%`
                                    }>
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Ringkasan</h3>
                    <div className="space-y-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-gray-600">Total Buku</p>
                            <p className="text-2xl font-bold">125</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-sm text-gray-600">
                                Total Anggota
                            </p>
                            <p className="text-2xl font-bold">42</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg">
                            <p className="text-sm text-gray-600">
                                Peminjaman Aktif
                            </p>
                            <p className="text-2xl font-bold">18</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
