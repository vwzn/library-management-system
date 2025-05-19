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
    <div className="rounded-3xl backdrop-blur-md shadow-xl overflow-hidden">
      <div className="flex flex-wrap justify-center md:justify-center border-b">
        {[
          { id: 'dashboard', label: ' Dashboard' },
          { id: 'books', label: ' Manajemen Buku' },
          { id: 'members', label: ' Manajemen Anggota' },
          { id: 'transactions', label: ' Transaksi' },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-100 drop-shadow-lg'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 text-blue-950">
        {activeTab === 'dashboard' && <StatsOverview />}
        {activeTab === 'books' && <BookManagement />}
        {activeTab === 'members' && <MemberManagement />}
        {activeTab === 'transactions' && <TransactionManagement />}
      </div>
    </div>
  );
}
