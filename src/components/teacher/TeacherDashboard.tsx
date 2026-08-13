import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  School,
  BookOpen,
  FolderPlus,
  TrendingUp,
  PlusCircle,
  Megaphone,
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const { currentUser, studentRoster, materiList, setActiveTab } = useApp();

  return (
    <div className="space-y-6 pb-12">
      {/* Teacher Greeting Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-xs">
            Portal Guru & Administrator SD
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">
            Selamat Datang, {currentUser?.name || 'Ibu Ratna Pertiwi, S.Pd'}! 👩‍🏫
          </h1>
          <p className="text-xs text-blue-100 max-w-2xl font-medium">
            Kelola data siswa, struktur kurikulum semester, materi pembelajaran interaktif, dan pengumuman sekolah SD Cerdas Nusantara.
          </p>
        </div>
      </div>

      {/* 4 Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Total Siswa</span>
            <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-800">184</p>
          <p className="text-[11px] text-blue-600 font-semibold mt-1">
            Tersebar di 6 tingkatan kelas
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Total Kelas</span>
            <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600">
              <School className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-800">12</p>
          <p className="text-[11px] text-indigo-600 font-semibold mt-1">
            Kelas 1A - 6B
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Total Materi</span>
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-800">{materiList.length + 137}</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1">
            Materi terpublikasi
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Mata Pelajaran</span>
            <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-800">8</p>
          <p className="text-[11px] text-amber-600 font-semibold mt-1">
            Mata pelajaran utama SD
          </p>
        </div>
      </div>

      {/* Quick Action Buttons Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setActiveTab('manajemen-materi')}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          <span>+ Tambah Materi Pembelajaran Baru</span>
        </button>

        <button
          onClick={() => setActiveTab('pengumuman')}
          className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <Megaphone className="w-4 h-4" />
          <span>Buat Pengumuman Baru</span>
        </button>
      </div>

      {/* Student Roster Table Summary */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-slate-800">
              Ringkasan Progress Siswa (Kelas 4A)
            </h3>
            <p className="text-xs text-slate-500">
              Pantau keaktifan siswa dalam menyelesaikan bab materi dan kuis.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('data-siswa')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            Lihat Semua Siswa →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase font-extrabold text-[10px]">
                <th className="py-3 px-2">Nama Siswa</th>
                <th className="py-3 px-2">NIS</th>
                <th className="py-3 px-2">Kelas</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {studentRoster.map((siswa) => (
                <tr key={siswa.id} className="hover:bg-slate-50">
                  <td className="py-3 px-2 font-bold text-slate-800 flex items-center gap-2">
                    <img
                      src={siswa.avatar}
                      alt={siswa.name}
                      className="w-7 h-7 rounded-lg object-cover"
                    />
                    <span>{siswa.name}</span>
                  </td>
                  <td className="py-3 px-2 text-slate-500 font-medium">{siswa.nis}</td>
                  <td className="py-3 px-2 font-semibold text-slate-700">{siswa.kelas}</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                      Aktif
                    </span>
                  </td>
                  <td className="py-3 px-2 font-bold text-blue-600">
                    {siswa.progressPercent}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
