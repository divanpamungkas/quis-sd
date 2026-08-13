import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FolderPlus,
  Plus,
  BookOpen,
  X,
  Youtube,
  Presentation,
  CheckCircle2,
  FileText,
  Clock,
  Layers,
} from 'lucide-react';
import { MATA_PELAJARAN_LIST, BAB_LIST } from '../../data/initialData';
import { MateriItem, KelasOption, SemesterOption } from '../../types';

export const ManajemenMateri: React.FC = () => {
  const { materiList, addMateri, showToast } = useApp();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form State
  const [semester, setSemester] = useState<SemesterOption>(1);
  const [kelas, setKelas] = useState<KelasOption>('4');
  const [mapelId, setMapelId] = useState('mtk');
  const [babId, setBabId] = useState('mtk_bab_2');
  const [subBabId, setSubBabId] = useState('mtk_2_1');
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [kontenText, setKontenText] = useState('');
  const [durasiMenit, setDurasiMenit] = useState(25);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [canvaUrl, setCanvaUrl] = useState('');
  const [googleDriveUrl, setGoogleDriveUrl] = useState('');
  const [wordwallUrl, setWordwallUrl] = useState('');
  const [gambarUrl, setGambarUrl] = useState('');

  const handleSaveMateri = (status: 'publish' | 'draft') => {
    if (!judul.trim() || !deskripsi.trim()) {
      alert('Harap isi Judul Materi dan Deskripsi.');
      return;
    }

    const newMateri: MateriItem = {
      id: `materi_custom_${Date.now()}`,
      semester,
      kelas,
      mapelId,
      babId,
      subBabId,
      judul,
      deskripsi,
      kontenText: kontenText || `### ${judul}\n\n${deskripsi}`,
      pengajar: 'Ibu Ratna Pertiwi, S.Pd',
      durasiMenit,
      status,
      tanggal: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      youtubeUrl: youtubeUrl || undefined,
      canvaUrl: canvaUrl || undefined,
      googleDriveUrl: googleDriveUrl || undefined,
      wordwallUrl: wordwallUrl || undefined,
      gambarUrl:
        gambarUrl ||
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    };

    addMateri(newMateri);
    setIsAddModalOpen(false);

    // Reset Form
    setJudul('');
    setDeskripsi('');
    setKontenText('');
    setYoutubeUrl('');
    setCanvaUrl('');
    setGoogleDriveUrl('');
    setWordwallUrl('');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <FolderPlus className="w-6 h-6 text-blue-600" />
            <span>Manajemen Kurikulum & Materi Guru</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Struktur Hirarki: Semester → Mata Pelajaran → Bab → Sub Bab → Materi
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>+ Tambah Materi Pembelajaran</span>
        </button>
      </div>

      {/* Curriculum Hierarchy View */}
      <div className="space-y-4">
        {MATA_PELAJARAN_LIST.map((mapel) => {
          const mapelMaterials = materiList.filter((m) => m.mapelId === mapel.id);
          if (mapelMaterials.length === 0) return null;

          return (
            <div
              key={mapel.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-800">
                      {mapel.nama}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {mapelMaterials.length} Materi Terpublikasi
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Semester 1 & 2
                </span>
              </div>

              {/* Material Sub-cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mapelMaterials.map((materi) => (
                  <div
                    key={materi.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                        Kelas {materi.kelas} SD • Sem {materi.semester}
                      </span>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          materi.status === 'publish'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {materi.status === 'publish' ? 'Published' : 'Draft'}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-xs text-slate-800">
                      {materi.judul}
                    </h4>

                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {materi.deskripsi}
                    </p>

                    <div className="flex items-center gap-3 text-[10px] text-slate-400 pt-1 font-medium">
                      <span>YouTube: {materi.youtubeUrl ? 'Ada' : '-'}</span>
                      <span>•</span>
                      <span>Canva: {materi.canvaUrl ? 'Ada' : '-'}</span>
                      <span>•</span>
                      <span>Wordwall: {materi.wordwallUrl ? 'Ada' : '-'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Material Modal Form */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl h-[90vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-amber-300" />
                <h3 className="font-extrabold text-sm">
                  Form Tambah Materi Pembelajaran Baru
                </h3>
              </div>

              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Scrollable */}
            <div className="p-6 space-y-4 overflow-y-auto flex-1 text-xs text-slate-700">
              {/* Semester & Kelas */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Semester
                  </label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(Number(e.target.value) as SemesterOption)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                  >
                    <option value={1}>Semester 1</option>
                    <option value={2}>Semester 2</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tingkat Kelas SD
                  </label>
                  <select
                    value={kelas}
                    onChange={(e) => setKelas(e.target.value as KelasOption)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                  >
                    <option value="1">Kelas 1 SD</option>
                    <option value="2">Kelas 2 SD</option>
                    <option value="3">Kelas 3 SD</option>
                    <option value="4">Kelas 4 SD</option>
                    <option value="5">Kelas 5 SD</option>
                    <option value="6">Kelas 6 SD</option>
                  </select>
                </div>
              </div>

              {/* Mapel & Bab */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Mata Pelajaran
                  </label>
                  <select
                    value={mapelId}
                    onChange={(e) => setMapelId(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                  >
                    {MATA_PELAJARAN_LIST.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.nama}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Pilihan Bab
                  </label>
                  <select
                    value={babId}
                    onChange={(e) => setBabId(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                  >
                    {BAB_LIST.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.judul}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Judul Materi */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Judul Materi Pembelajaran *
                </label>
                <input
                  type="text"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Contoh: Bab 2 - Mengenal Pecahan Biasa & Senilai"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Deskripsi */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Deskripsi Ringkas *
                </label>
                <textarea
                  rows={2}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Rangkuman singkat isi materi yang akan dilihat siswa di card..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Konten Text */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Isi Teks Materi Lengkap (Markdown / Teks)
                </label>
                <textarea
                  rows={4}
                  value={kontenText}
                  onChange={(e) => setKontenText(e.target.value)}
                  placeholder="### Penjelasan Materi&#10;&#10;Tuliskan penjelasan pelajaran, contoh soal, dan rumus sederhana di sini..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Embedded Links */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <p className="font-extrabold text-slate-800">Media Interaktif Embed:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-600 mb-1 flex items-center gap-1">
                      <Youtube className="w-3.5 h-3.5 text-red-600" />
                      <span>URL YouTube Embed</span>
                    </label>
                    <input
                      type="text"
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                      placeholder="https://www.youtube.com/embed/..."
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-600 mb-1 flex items-center gap-1">
                      <Presentation className="w-3.5 h-3.5 text-indigo-600" />
                      <span>URL Canva Embed</span>
                    </label>
                    <input
                      type="text"
                      value={canvaUrl}
                      onChange={(e) => setCanvaUrl(e.target.value)}
                      placeholder="https://www.canva.com/design/..."
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-600 mb-1">
                      URL Google Drive E-Book
                    </label>
                    <input
                      type="text"
                      value={googleDriveUrl}
                      onChange={(e) => setGoogleDriveUrl(e.target.value)}
                      placeholder="https://drive.google.com/file/..."
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-600 mb-1">
                      URL Wordwall Game
                    </label>
                    <input
                      type="text"
                      value={wordwallUrl}
                      onChange={(e) => setWordwallUrl(e.target.value)}
                      placeholder="https://wordwall.net/embed/..."
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleSaveMateri('draft')}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                Simpan Draft
              </button>

              <button
                type="button"
                onClick={() => handleSaveMateri('publish')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Publish Materi</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
