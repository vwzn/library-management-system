// src/app/page.tsx
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
          📚 Sistem Manajemen Perpustakaan
        </h1>
        <p className="text-center mb-8 italic text-gray-600">
          "Membaca adalah jendela dunia, kami memudahkan aksesnya"
        </p>
        
        <Dashboard />
      </div>
    </main>
  );
}