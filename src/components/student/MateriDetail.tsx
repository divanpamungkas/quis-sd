import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Youtube,
  Presentation,
  BookOpen,
} from 'lucide-react';
import { MATA_PELAJARAN_LIST } from '../../data/initialData';

export const MateriDetail: React.FC = () => {
  const {
    selectedMateriId,
    materiList,
    completedMateriIds,
    toggleMateriComplete,
    openMateriDetail,
    setActiveTab,
  } = useApp();

  const materi = materiList.find((m) => m.id === selectedMateriId) || materiList[0];
  const isCompleted = completedMateriIds.includes(materi.id);
  const mapelInfo = MATA_PELAJARAN_LIST.find((m) => m.id === materi.mapelId);

  // Find next material
  const currentIndex = materiList.findIndex((m) => m.id === materi.id);
  const nextMateri = materiList[currentIndex + 1] || materiList[0];

  return (
    <div className="space-y-6 pb-16 max-w-5xl mx-auto">
      {/* Breadcrumb & Navigation Back */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setActiveTab('materi')}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Materi</span>
        </button>

        <div className="text-xs text-slate-400 font-medium hidden sm:block">
          Dashboard &gt; {mapelInfo?.nama || 'Matematika'} &gt; Kelas {materi.kelas} &gt; {materi.judul}
        </div>
      </div>

      {/* Main Material Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase bg-amber-400 text-slate-900 px-2.5 py-1 rounded-full">
                {mapelInfo?.nama}
              </span>
              <span className="text-xs bg-white/20 backdrop-blur-xs text-white px-2.5 py-1 rounded-full font-semibold">
                Kelas {materi.kelas} SD • Semester {materi.semester}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight">
              {materi.judul}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-blue-100 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Pengajar: {materi.pengajar}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Durasi: {materi.durasiMenit} Menit</span>
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Complete Toggle Action Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                  isCompleted ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'
                }`}
              >
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-800">
                  Status Pembelajaran
                </h4>
                <p className="text-xs text-slate-500">
                  {isCompleted
                    ? '🎉 Kamu sudah menyelesaikan materi ini!'
                    : 'Klik tombol di samping jika sudah paham.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => toggleMateriComplete(materi.id)}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-extrabold text-xs transition-all shadow-sm flex items-center justify-center gap-2 ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isCompleted ? '✓ Tandai Selesai (Sudah)' : '✓ Tandai Sudah Dipelajari'}
              </span>
            </button>
          </div>

          {/* Featured Image */}
          {materi.gambarUrl && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-h-80">
              <img
                src={materi.gambarUrl}
                alt={materi.judul}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Text Content */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
            <div
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 font-normal"
              dangerouslySetInnerHTML={{
                __html: materi.kontenText
                  .replace(/### (.*)/g, '<h3 class="text-base font-extrabold text-slate-900 mt-4 mb-2">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-700">$1</strong>')
                  .replace(/---/g, '<hr class="my-4 border-slate-200"/>'),
              }}
            />
          </div>

          {/* YouTube Video Embed Section */}
          {materi.youtubeUrl && (
            <div className="space-y-3">
              <h3 className="font-extrabold text-sm text-slate-800 flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-600" />
                <span>Video Pembelajaran Interaktif</span>
              </h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
                <iframe
                  src={materi.youtubeUrl}
                  title={materi.judul}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Canva Presentation Slide Embed Placeholder */}
          {materi.canvaUrl && (
            <div className="space-y-3">
              <h3 className="font-extrabold text-sm text-slate-800 flex items-center gap-2">
                <Presentation className="w-5 h-5 text-indigo-600" />
                <span>Slide Presentasi Canva Interaktif</span>
              </h3>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 flex flex-col items-center text-center space-y-3">
                <Presentation className="w-10 h-10 text-indigo-600" />
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Slide Pembelajaran Canva</h4>
                  <p className="text-[11px] text-slate-500">
                    Buka slide visual menarik untuk memahami contoh gambar pecahan.
                  </p>
                </div>
                <a
                  href={materi.canvaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-sm hover:bg-indigo-700 transition-colors"
                >
                  Buka Slide Canva
                </a>
              </div>
            </div>
          )}

          {/* Bottom Footer Actions & Next Material Button */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setActiveTab('materi')}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors text-center"
            >
              ← Kembali ke Daftar Materi
            </button>

            {nextMateri && nextMateri.id !== materi.id && (
              <button
                onClick={() => openMateriDetail(nextMateri.id)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Materi Berikutnya ({nextMateri.judul})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
