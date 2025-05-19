"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Manajemen Buku", value: 35 },
    { name: "Manajemen Anggota", value: 30 },
    { name: "Peminjaman Buku", value: 20 },
    { name: "Pengembalian Buku", value: 15 },
];

const COLORS = ["#8B5CF6", "#EC4899", "#3B82F6", "#10B981"]; // Updated to galaxy-themed colors

export default function StatsOverview() {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 drop-shadow-lg">
                Statistik Perpustakaan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <div className="rounded-3xl backdrop-blur-lg bg-black/30 border border-white/10 shadow-2xl p-6 transition-all hover:bg-black/40 hover:border-white/20">
                    <h3 className="font-medium mb-4 text-white/90">
                        Distribusi Fitur Sistem
                    </h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    dataKey="value"
                                    label={({ percent }) =>
                                        `${(percent * 100).toFixed(
                                            0
                                        )}%`
                                    }>
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            stroke="rgba(255, 255, 255, 0.1)"
                                            strokeWidth={1}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {data.map((entry, index) => (
                            <div
                                key={`legend-${index}`}
                                className="flex items-center">
                                <div
                                    className="w-3 h-3 rounded-full mr-2"
                                    style={{
                                        backgroundColor:
                                            COLORS[index % COLORS.length],
                                    }}
                                />
                                <span className="text-xs text-white/80">
                                    {entry.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="rounded-3xl backdrop-blur-lg bg-black/30 border border-white/10 shadow-2xl p-6 transition-all hover:bg-black/40 hover:border-white/20">
                    <h3 className="font-medium mb-4 text-white/90">
                        Ringkasan Sistem
                    </h3>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
                            <p className="text-sm text-white/80">Total Buku</p>
                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">
                                125
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-pink-900/40 to-rose-900/40 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
                            <p className="text-sm text-white/80">
                                Total Anggota
                            </p>
                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-200">
                                42
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/40 to-violet-900/40 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
                            <p className="text-sm text-white/80">
                                Peminjaman Aktif
                            </p>
                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-violet-200">
                                18
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
