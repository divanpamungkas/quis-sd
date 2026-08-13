import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Video, Play, Clock, X, Filter } from 'lucide-react';
import { VideoItem, KelasOption } from '../../types';
import { MATA_PELAJARAN_LIST } from '../../data/initialData';

export const VideoPembelajaran: React.FC = () => {
  const { videoList } = useApp();
  const [selectedClass, setSelectedClass] = useState<KelasOption>('4');
  const [selectedMapel, setSelectedMapel] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  const filteredVideos = videoList.filter((v) => {
    const matchClass = v.kelas === selectedClass;
    const matchMapel = selectedMapel === 'all' || v.mapelId === selectedMapel;
    return matchClass && matchMapel;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <Video className="w-6 h-6 text-blue-600" />
            <span>Video Pembelajaran Animasi</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Tonton video penjelasan interaktif dari guru-guru terbaik SD Cerdas Nusantara.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value as KelasOption)}
            className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Kelas 1 SD</option>
            <option value="2">Kelas 2 SD</option>
            <option value="3">Kelas 3 SD</option>
            <option value="4">Kelas 4 SD</option>
            <option value="5">Kelas 5 SD</option>
            <option value="6">Kelas 6 SD</option>
          </select>

          <select
            value={selectedMapel}
            onChange={(e) => setSelectedMapel(e.target.value)}
            className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Semua Mapel</option>
            {MATA_PELAJARAN_LIST.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nama}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVideos.map((vid) => {
          const mapelInfo = MATA_PELAJARAN_LIST.find((m) => m.id === vid.mapelId);

          return (
            <div
              key={vid.id}
              onClick={() => setActiveVideoModal(vid)}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={vid.thumbnailUrl}
                    alt={vid.judul}
                    className="w-full h-full object-cover group-hover:scale-105 opacity-90 transition-transform duration-300"
                  />
                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
                    {mapelInfo?.nama || 'Mapel'}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 backdrop-blur-xs">
                    <Clock className="w-3 h-3" />
                    {vid.durasi}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-extrabold text-xs text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {vid.judul}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {vid.deskripsi}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 text-[11px] font-medium text-slate-400 border-t border-slate-100 pt-3">
                Pengajar: {vid.pengajar}
              </div>
            </div>
          );
        })}
      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-slate-900 text-white p-4 px-6 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm">{activeVideoModal.judul}</h3>
                <p className="text-[11px] text-slate-400">
                  Pengajar: {activeVideoModal.pengajar} • Durasi: {activeVideoModal.durasi}
                </p>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-slate-950">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal.youtubeId}?autoplay=1`}
                title={activeVideoModal.judul}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-5 bg-slate-50 text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-800">Deskripsi Video:</p>
              <p>{activeVideoModal.deskripsi}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
