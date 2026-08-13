import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Library, BookOpen, ExternalLink, X, Filter } from 'lucide-react';
import { BukuPaket as IBukuPaket, KelasOption } from '../../types';

export const BukuPaket: React.FC = () => {
  const { bukuList } = useApp();
  const [selectedClass, setSelectedClass] = useState<KelasOption>('4');
  const [activeBookModal, setActiveBookModal] = useState<IBukuPaket | null>(null);

  const filteredBooks = bukuList.filter((b) => b.kelas === selectedClass);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <Library className="w-6 h-6 text-blue-600" />
            <span>Buku Paket Digital (E-Book)</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Koleksi buku teks utama Kurikulum Merdeka Kemendikbudristek untuk SD.
          </p>
        </div>

        {/* Filter Kelas */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value as KelasOption)}
            className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Buku Kelas 1 SD</option>
            <option value="2">Buku Kelas 2 SD</option>
            <option value="3">Buku Kelas 3 SD</option>
            <option value="4">Buku Kelas 4 SD</option>
            <option value="5">Buku Kelas 5 SD</option>
            <option value="6">Buku Kelas 6 SD</option>
          </select>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredBooks.map((buku) => (
          <div
            key={buku.id}
            className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-60 bg-slate-100 overflow-hidden p-4 flex items-center justify-center">
                <img
                  src={buku.coverUrl}
                  alt={buku.judul}
                  className="h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
                  Kelas {buku.kelas} SD
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-xs text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {buku.judul}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {buku.deskripsi}
                </p>
                <div className="text-[10px] text-slate-400 font-medium">
                  {buku.penulis} • {buku.halamanCount} Halaman
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => setActiveBookModal(buku)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Buka Buku Paket</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Book Reader Modal */}
      {activeBookModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-4 px-6 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm">{activeBookModal.judul}</h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  Mode Pembaca E-Book • Kelas {activeBookModal.kelas} SD
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka di Halaman Baru</span>
                </a>

                <button
                  onClick={() => setActiveBookModal(null)}
                  className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Reader Frame / Placeholder */}
            <div className="flex-1 bg-slate-100 p-4 relative overflow-hidden flex flex-col items-center justify-center text-center">
              {/* Google Drive PDF Preview Simulation Container */}
              <div className="w-full h-full bg-white rounded-2xl shadow-inner border border-slate-300 p-6 flex flex-col items-center justify-center space-y-4">
                <Library className="w-16 h-16 text-blue-600 animate-pulse" />
                <div className="max-w-md space-y-1">
                  <h4 className="font-extrabold text-sm text-slate-800">
                    E-Book Digital: {activeBookModal.judul}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Penulis: {activeBookModal.penulis} ({activeBookModal.halamanCount} Halaman)
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 max-w-lg text-xs text-slate-700 space-y-2">
                  <p className="font-bold text-blue-800">📖 Membuka Dokumen Google Drive...</p>
                  <p className="text-[11px] text-slate-600">
                    Jika tampilan embed Google Drive tidak muncul secara otomatis di peramban ini, silakan gunakan tombol di bawah untuk membuka file di jendela baru.
                  </p>
                </div>

                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka di Halaman Baru (Google Drive)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
