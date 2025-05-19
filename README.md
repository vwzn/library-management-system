# 📚 Sistem Manajemen Perpustakaan Digital

![WhatsApp Image 2025-05-19 at 07 46 06_cd42622c](https://github.com/user-attachments/assets/7f31d09b-c4be-4b52-bd00-c8476711f3b5)


**Sistem manajemen perpustakaan modern** dengan antarmuka futuristic dan fitur lengkap untuk mengelola koleksi buku, anggota, dan transaksi peminjaman.

## ✨ Fitur Utama

- **Dashboard Interaktif** dengan visualisasi data
- Manajemen katalog buku digital
- Sistem keanggotaan terintegrasi
- Pelacakan peminjaman & pengembalian
- Pencarian canggih dengan filter
- Laporan statistik otomatis

## 🚀 Teknologi

![Tech Stack](https://skillicons.dev/icons?i=nextjs,tailwind,postgres,prisma,typescript)

**Frontend:**
- Next.js 14 (App Router)
- Tailwind CSS + Glassmorphism UI
- Recharts untuk visualisasi data
- Animasi modern dengan Framer Motion

**Backend:**
- PostgreSQL database
- Prisma ORM
- API Routes (Next.js)
- Sistem autentikasi modern

## 🛠️ Instalasi

1. Clone repositori:
```bash
git clone https://github.com/username/library-management-system.git
cd library-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env.local
```
Isi variabel database PostgreSQL Anda di `.env.local`

4. Jalankan migrasi database:
```bash
npx prisma migrate dev
```

5. Jalankan development server:
```bash
npm run dev
```

## 📊 Struktur Database

```mermaid
erDiagram
    BOOK ||--o{ LOAN : has
    MEMBER ||--o{ LOAN : makes
    BOOK {
        string isbn PK
        string title
        string author
        string publisher
        integer year
        integer quantity
        string category
    }
    MEMBER {
        string id PK
        string name
        string email
        string phone
        date join_date
    }
    LOAN {
        string id PK
        date loan_date
        date return_date
        string status
        string bookIsbn FK
        string memberId FK
    }
```

## 🌈 Kontribusi

Kami menyambut kontribusi! Ikuti langkah berikut:
1. Fork project
2. Buat branch fitur (`git checkout -b fitur/namafitur`)
3. Commit perubahan (`git commit -m 'Tambahkan fitur'`)
4. Push ke branch (`git push origin fitur/namafitur`)
5. Buat Pull Request

## 📜 Lisensi

Projek ini dilisensikan di bawah [MIT License](LICENSE).

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=library-management-system&label=Pengunjung&color=6e40c9&style=flat" alt="Pengunjung" />
</div>
