// src/components/Dashboard.tsx
'use client';

import { useState } from 'react';
import BookManagement from './BookManagement';
import MemberManagement from './MemberManagement';
import TransactionManagement from './TransactionManagement';
import StatsOverview from './StatsOverview';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'books' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('books')}
        >
          📖 Manajemen Buku
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'members' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('members')}
        >
          👥 Manajemen Anggota
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'transactions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('transactions')}
        >
          🔄 Transaksi
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'dashboard' && <StatsOverview />}
        {activeTab === 'books' && <BookManagement />}
        {activeTab === 'members' && <MemberManagement />}
        {activeTab === 'transactions' && <TransactionManagement />}
      </div>
    </div>
  );
}