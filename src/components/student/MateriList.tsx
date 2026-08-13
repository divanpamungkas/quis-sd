import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Filter, BookOpen, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { MATA_PELAJARAN_LIST, BAB_LIST } from '../../data/initialData';
import { KelasOption, SemesterOption } from '../../types';

export const MateriList: React.FC = () => {
  const {
    materiList,
    classFilter,
    setClassFilter,
    semesterFilter,
    setSemesterFilter,
    mapelFilter,
    setMapelFilter,
    completedMateriIds,
    openMateriDetail,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBabFilter, setSelectedBabFilter] = useState<string>('all');

  const availableBabs = BAB_LIST.filter(
    (b) => mapelFilter === 'all' || b.mapelId === mapelFilter
  );

  const filteredMateri = materiList.filter((item) => {
    const matchClass = classFilter ? item.kelas === classFilter : true;
    const matchSemester = semesterFilter ? item.semester === semesterFilter : true;
    const matchMapel = mapelFilter === 'all' ? true : item.mapelId === mapelFilter;
    const matchBab = selectedBabFilter === 'all' ? true : item.babId === selectedBabFilter;
    const matchSearch =
      item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());

    return matchClass && matchSemester && matchMapel && matchBab && matchSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="font-heading text-xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Materi Pembelajaran Kurikulum SD</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Pilih kelas, semester, dan mata pelajaran untuk menemukan materi belajar interaktif.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari materi / kata kunci..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Filter className="w-4 h-4 text-blue-600" />
          <span>Filter Pembelajaran:</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Filter Kelas */}
          <div>
            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
              Kelas SD
            </label>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value as KelasOption)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">Kelas 1 SD</option>
              <option value="2">Kelas 2 SD</option>
              <option value="3">Kelas 3 SD</option>
              <option value="4">Kelas 4 SD</option>
              <option value="5">Kelas 5 SD</option>
              <option value="6">Kelas 6 SD</option>
            </select>
          </div>

          {/* Filter Semester */}
          <div>
            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
              Semester
            </label>
            <select
              value={semesterFilter}
              onChange={(e) => setSemesterFilter(Number(e.target.value) as SemesterOption)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
            </select>
          </div>

          {/* Filter Mapel */}
          <div>
            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
              Mata Pelajaran
            </label>
            <select
              value={mapelFilter}
              onChange={(e) => {
                setMapelFilter(e.target.value);
                setSelectedBabFilter('all');
              }}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Mata Pelajaran</option>
              {MATA_PELAJARAN_LIST.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.nama}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Bab */}
          <div>
            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
              Pilihan Bab
            </label>
            <select
              value={selectedBabFilter}
              onChange={(e) => setSelectedBabFilter(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Bab</option>
              {availableBabs.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.judul}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Materials Cards Grid */}
      {filteredMateri.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-2">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-sm text-slate-700">Materi Tidak Ditemukan</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Coba ubah filter kelas, semester, atau kata kunci pencarian kamu.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMateri.map((materi) => {
            const mapelInfo = MATA_PELAJARAN_LIST.find((m) => m.id === materi.mapelId);
            const isCompleted = completedMateriIds.includes(materi.id);

            return (
              <div
                key={materi.id}
                onClick={() => openMateriDetail(materi.id)}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-36 overflow-hidden bg-slate-100">
                    <img
                      src={materi.gambarUrl || 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80'}
                      alt={materi.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold text-slate-800 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded shadow-xs">
                        {mapelInfo?.nama || 'Mata Pelajaran'}
                      </span>
                    </div>

                    {isCompleted && (
                      <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Selesai</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
                      <span>Kelas {materi.kelas}</span>
                      <span>•</span>
                      <span>Semester {materi.semester}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Clock className="w-3 h-3" />
                        {materi.durasiMenit} mnt
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xs text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {materi.judul}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {materi.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500 text-[11px] font-normal">Oleh: {materi.pengajar}</span>
                    <span className="text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Pelajari</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
