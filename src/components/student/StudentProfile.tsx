import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  User as UserIcon,
  Award,
  BookOpen,
  CheckCircle2,
  Mail,
  School,
  IdCard,
  Sparkles,
} from 'lucide-react';
import { MATA_PELAJARAN_LIST } from '../../data/initialData';

export const StudentProfile: React.FC = () => {
  const { currentUser, completedMateriIds, materiList } = useApp();

  const finishedCount = completedMateriIds.length;
  const totalMateri = materiList.length;
  const overallProgress = Math.round((finishedCount / Math.max(1, totalMateri)) * 100);

  const badges = [
    { title: 'Bintang Matematika 🌟', desc: 'Menyelesaikan bab Pecahan Senilai', color: 'bg-amber-100 text-amber-800' },
    { title: 'Siswa Rajin 📚', desc: 'Aktif belajar lebih dari 10 jam minggu ini', color: 'bg-blue-100 text-blue-800' },
    { title: 'Master IPA ⚡', desc: 'Menjawab kuis energi dengan nilai sempurna', color: 'bg-indigo-100 text-indigo-800' },
    { title: 'Pembaca Cerita 📖', desc: 'Membaca 3 cerita rakyat Nusantara', color: 'bg-emerald-100 text-emerald-800' },
  ];

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* Profile Card Header */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={currentUser?.avatar}
            alt={currentUser?.name}
            className="w-28 h-28 rounded-3xl object-cover ring-4 ring-blue-500/20 shadow-md shrink-0"
          />

          <div className="space-y-3 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Siswa Aktif SD
              </span>
              <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                Kelas {currentUser?.kelas} SD
              </span>
            </div>

            <h1 className="text-2xl font-black text-slate-800">
              {currentUser?.name}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <IdCard className="w-4 h-4 text-blue-600" />
                <span>NIS: {currentUser?.nis || '00123'}</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <School className="w-4 h-4 text-blue-600" />
                <span>Sekolah: {currentUser?.sekolah || 'SD Cerdas Nusantara'}</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Email: {currentUser?.email}</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <UserIcon className="w-4 h-4 text-blue-600" />
                <span>Wali Kelas: {currentUser?.waliKelas || 'Ibu Ratna Pertiwi, S.Pd'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Stats Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-4">
        <h3 className="font-extrabold text-sm text-slate-800 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>Progress Belajar Per Mata Pelajaran</span>
        </h3>

        <div className="space-y-4">
          {MATA_PELAJARAN_LIST.map((mapel) => {
            const mapelMaterials = materiList.filter((m) => m.mapelId === mapel.id);
            const mapelCompleted = mapelMaterials.filter((m) => completedMateriIds.includes(m.id)).length;
            const mapelPercent = mapelMaterials.length > 0 ? Math.round((mapelCompleted / mapelMaterials.length) * 100) : 50;

            return (
              <div key={mapel.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-800">{mapel.nama}</span>
                  <span className="text-blue-600">{mapelPercent}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${mapelPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges & Achievements */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-4">
        <h3 className="font-extrabold text-sm text-slate-800 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <span>Lencana & Penghargaan Prestasi</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border border-slate-100 ${b.color} flex items-start gap-3`}
            >
              <div className="p-2 rounded-xl bg-white/80 shadow-xs shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs">{b.title}</h4>
                <p className="text-[11px] opacity-80 mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
