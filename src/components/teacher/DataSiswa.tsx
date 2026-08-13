import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Users, Search, Filter, Eye, X, BookOpen, Award } from 'lucide-react';
import { User } from '../../types';

export const DataSiswa: React.FC = () => {
  const { studentRoster } = useApp();
  const [search, setSearch] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [activeStudentModal, setActiveStudentModal] = useState<User | null>(null);

  const filtered = studentRoster.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      (s.nis && s.nis.includes(search));
    const matchClass = selectedClass === 'all' || s.kelas === selectedClass;
    return matchSearch && matchClass;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            <span>Data & Progress Belajar Siswa</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Daftar siswa terdaftar, NIS, status keaktifan, dan persentase ketuntasan materi.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-full sm:w-56">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama / NIS..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-1">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Kelas</option>
              <option value="4A">Kelas 4A</option>
              <option value="4B">Kelas 4B</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-extrabold text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Nama Siswa</th>
                <th className="py-3.5 px-4">NIS</th>
                <th className="py-3.5 px-4">Kelas</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Progress Belajar</th>
                <th className="py-3.5 px-4">Nilai Rata-Rata</th>
                <th className="py-3.5 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((siswa) => (
                <tr key={siswa.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-800 flex items-center gap-3">
                    <img
                      src={siswa.avatar}
                      alt={siswa.name}
                      className="w-9 h-9 rounded-xl object-cover ring-2 ring-blue-500/10"
                    />
                    <div>
                      <p className="font-extrabold">{siswa.name}</p>
                      <p className="text-[10px] text-slate-400 font-normal">{siswa.email}</p>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-medium text-slate-600">{siswa.nis}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-700">{siswa.kelas}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Aktif
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full"
                          style={{ width: `${siswa.progressPercent}%` }}
                        />
                      </div>
                      <span className="font-bold text-blue-600">{siswa.progressPercent}%</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-800">
                    {siswa.nilaiRataRata || 85.0}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setActiveStudentModal(siswa)}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold text-xs transition-colors inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detail</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Detail Modal */}
      {activeStudentModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={activeStudentModal.avatar}
                  alt={activeStudentModal.name}
                  className="w-12 h-12 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-black text-base text-slate-800">
                    {activeStudentModal.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    NIS: {activeStudentModal.nis} • Kelas {activeStudentModal.kelas}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveStudentModal(null)}
                className="p-1 rounded-xl text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-[10px] uppercase font-bold text-blue-600">Total Progress</p>
                <p className="text-lg font-black text-blue-800">{activeStudentModal.progressPercent}%</p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-[10px] uppercase font-bold text-emerald-600">Nilai Rata-Rata</p>
                <p className="text-lg font-black text-emerald-800">{activeStudentModal.nilaiRataRata}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Rincian Ketuntasan Materi:</span>
              </h4>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Matematika (Pecahan):</span>
                  <span className="font-bold text-emerald-600">Tuntas (100%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Bahasa Indonesia (Cerita Rakyat):</span>
                  <span className="font-bold text-emerald-600">Tuntas (100%)</span>
                </div>
                <div className="flex justify-between">
                  <span>IPA (Energi):</span>
                  <span className="font-bold text-amber-600">Proses (60%)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveStudentModal(null)}
              className="w-full py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-blue-700 transition-colors"
            >
              Tutup Detail Siswa
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
