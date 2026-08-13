import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  CheckCircle2,
  Clock,
  Gamepad2,
  Award,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { MATA_PELAJARAN_LIST } from '../../data/initialData';

export const StudentDashboard: React.FC = () => {
  const {
    currentUser,
    materiList,
    completedMateriIds,
    openMateriDetail,
    setActiveTab,
    gameList,
  } = useApp();

  const finishedCount = completedMateriIds.length;
  const totalMateri = materiList.length;
  const pendingCount = Math.max(0, totalMateri - finishedCount);
  const overallProgress = Math.round((finishedCount / Math.max(1, totalMateri)) * 100);

  const resumeMateri =
    materiList.find((m) => m.id === 'mat_01') || materiList[0];

  return (
    <div className="space-y-6 pb-12">
      {/* Clean Header Banner */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
            <span>Portal Belajar Siswa</span>
          </div>
          <h1 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            Selamat Datang, {currentUser?.name || 'Ahmad'}! 👋
          </h1>
          <p className="text-xs text-slate-500 font-normal">
            Portal pembelajaran resmi SD Cerdas Nusantara. Pilih materi atau lanjutkan bab pelajaranmu di bawah ini.
          </p>
        </div>

        {/* Info Badges */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase">Kelas / Sem</p>
            <p className="text-xs font-bold text-slate-800">Kelas {currentUser?.kelas} (Sem {currentUser?.semester})</p>
          </div>

          <div className="px-3.5 py-2 bg-blue-50 border border-blue-100 rounded-xl text-center">
            <p className="text-[10px] text-blue-600 font-bold uppercase">Progress Total</p>
            <p className="text-xs font-bold text-blue-700">{overallProgress}% Selesai</p>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Materi Selesai</span>
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading text-2xl font-bold text-slate-800">{finishedCount}</p>
          <p className="text-[11px] text-slate-400 font-normal mt-0.5">
            Dari {totalMateri} total bab
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Belum Selesai</span>
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading text-2xl font-bold text-slate-800">{pendingCount}</p>
          <p className="text-[11px] text-slate-400 font-normal mt-0.5">
            Materi yang perlu dipelajari
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Game & Kuis</span>
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <Gamepad2 className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading text-2xl font-bold text-slate-800">{gameList.length}</p>
          <p className="text-[11px] text-slate-400 font-normal mt-0.5">
            Latihan interaktif
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Nilai Rata-Rata</span>
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading text-2xl font-bold text-slate-800">{currentUser?.nilaiRataRata || 88.5}</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
            Predikat: Sangat Baik
          </p>
        </div>
      </div>

      {/* Section "Lanjutkan Belajar" */}
      {resumeMateri && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-sm font-bold text-slate-800 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Lanjutkan Belajar</span>
            </h2>
            <button
              onClick={() => setActiveTab('materi')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>Semua Materi</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={resumeMateri.gambarUrl || 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80'}
                alt={resumeMateri.judul}
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Matematika • Bab 2
                </span>
                <h3 className="font-bold text-xs text-slate-800">
                  {resumeMateri.judul}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {resumeMateri.deskripsi}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <div className="w-32 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full w-[70%]" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-600">70% Selesai</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openMateriDetail(resumeMateri.id)}
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>Lanjutkan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Section "Materi Pembelajaran Utama" */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-sm font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Materi Pembelajaran</span>
          </h2>
          <button
            onClick={() => setActiveTab('materi')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>Lihat Semua</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {materiList.slice(0, 4).map((materi) => {
            const mapelInfo = MATA_PELAJARAN_LIST.find((m) => m.id === materi.mapelId);
            const isFinished = completedMateriIds.includes(materi.id);

            return (
              <div
                key={materi.id}
                onClick={() => openMateriDetail(materi.id)}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-32 overflow-hidden bg-slate-100">
                    <img
                      src={materi.gambarUrl || 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80'}
                      alt={materi.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold text-slate-800 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded shadow-xs">
                        {mapelInfo?.nama || 'Pelajaran'}
                      </span>
                    </div>

                    {isFinished && (
                      <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white p-1 rounded-full shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <div className="p-3.5 space-y-1.5">
                    <p className="text-[10px] text-slate-400 font-semibold">
                      Kelas {materi.kelas} • Semester {materi.semester}
                    </p>
                    <h3 className="font-bold text-xs text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {materi.judul}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">
                      {materi.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 pt-0">
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>{isFinished ? 'Sudah Dipelajari' : 'Mulai Belajar'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
