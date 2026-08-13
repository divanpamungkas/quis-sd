import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Megaphone, Pin, Search, Calendar, User, X } from 'lucide-react';
import { Pengumuman } from '../../types';

export const PengumumanList: React.FC = () => {
  const { pengumumanList } = useApp();
  const [search, setSearch] = useState('');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Pengumuman | null>(null);

  const filtered = pengumumanList.filter(
    (p) =>
      p.judul.toLowerCase().includes(search.toLowerCase()) ||
      p.isi.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-blue-600" />
            <span>Pengumuman Sekolah</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Informasi penting ujian, agenda kegiatan, dan berita SD Cerdas Nusantara.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari pengumuman..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Announcement List Cards */}
      <div className="space-y-4">
        {filtered.map((ann) => (
          <div
            key={ann.id}
            onClick={() => setSelectedAnnouncement(ann)}
            className={`p-6 bg-white rounded-3xl border transition-all cursor-pointer hover:shadow-md ${
              ann.isPinned
                ? 'border-blue-300 bg-blue-50/30'
                : 'border-slate-200/80'
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                {ann.isPinned && (
                  <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase bg-amber-400 text-slate-900 px-2.5 py-0.5 rounded-full">
                    <Pin className="w-3 h-3 fill-current" />
                    <span>Sematkan</span>
                  </span>
                )}
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                  {ann.kategori}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                <span>{ann.tanggal}</span>
              </div>
            </div>

            <h3 className="font-extrabold text-sm text-slate-800 hover:text-blue-600 transition-colors mb-2">
              {ann.judul}
            </h3>

            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {ann.isi}
            </p>

            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <span className="flex items-center gap-1 text-slate-500">
                <User className="w-3.5 h-3.5" />
                {ann.penulis}
              </span>
              <span className="text-blue-600 font-bold">Baca Selengkapnya →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                {selectedAnnouncement.kategori}
              </span>

              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="p-1 rounded-xl text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-extrabold text-base text-slate-800 leading-snug">
              {selectedAnnouncement.judul}
            </h3>

            <div className="text-[11px] text-slate-400 font-medium flex items-center gap-3">
              <span>Tanggal: {selectedAnnouncement.tanggal}</span>
              <span>•</span>
              <span>Oleh: {selectedAnnouncement.penulis}</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
              {selectedAnnouncement.isi}
            </div>

            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="w-full py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-blue-700 transition-colors"
            >
              Tutup Pengumuman
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
