// src/app/page.tsx
import Dashboard from "@/components/Dashboard";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 p-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
                <div className="w-full max-w-3xl backdrop-blur-lg bg-black/20 border border-white/10 shadow-2xl rounded-3xl p-8 transition-all hover:bg-black/30 hover:border-white/20">
                    <h1 className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 drop-shadow-lg">
                        Sistem Manajemen Perpustakaan
                    </h1>
                    <p className="text-center text-lg italic text-purple-200/80 mb-6">
                        "Membaca adalah jendela dunia, kami memembantu aksesnya"
                    </p>
                </div>

                <div className="w-full backdrop-blur-lg  bg-black/20  border-white/10 shadow-2xl rounded-3xl transition-all hover:bg-black/30 hover:border-white/20">
                    <Dashboard />
                </div>
            </div>
        </main>
    );
}
