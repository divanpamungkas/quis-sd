import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Library,
  Video,
  Gamepad2,
  Megaphone,
  User,
  Users,
  FolderPlus,
  GraduationCap,
  X,
  BookCheck,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { activeRole, activeTab, setActiveTab, currentUser } = useApp();

  const studentNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'materi', label: 'Materi Pembelajaran', icon: BookOpen },
    { id: 'buku', label: 'Buku Paket Digital', icon: Library },
    { id: 'video', label: 'Video Pembelajaran', icon: Video },
    { id: 'game', label: 'Game & Kuis Edukasi', icon: Gamepad2 },
    { id: 'pengumuman', label: 'Pengumuman Sekolah', icon: Megaphone },
    { id: 'profil', label: 'Profil Saya', icon: User },
  ];

  const teacherNav = [
    { id: 'dashboard', label: 'Dashboard Guru', icon: LayoutDashboard },
    { id: 'data-siswa', label: 'Data & Progress Siswa', icon: Users },
    { id: 'manajemen-materi', label: 'Manajemen Kurikulum', icon: FolderPlus },
    { id: 'buku', label: 'Buku Paket', icon: Library },
    { id: 'video', label: 'Video Pembelajaran', icon: Video },
    { id: 'game', label: 'Game & Kuis', icon: Gamepad2 },
    { id: 'pengumuman', label: 'Pengumuman', icon: Megaphone },
  ];

  const currentNav = activeRole === 'siswa' ? studentNav : teacherNav;

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    onClose();
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:w-60 lg:translate-x-0 shrink-0 lg:min-h-[calc(100vh-61px)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-5">
          {/* Mobile Only Header inside Drawer */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-sm text-slate-800">
                SD Cerdas Nusantara
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Profile Card */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <img
              src={currentUser?.avatar}
              alt={currentUser?.name}
              className="w-10 h-10 rounded-lg object-cover ring-1 ring-slate-200 shrink-0"
            />
            <div className="overflow-hidden min-w-0">
              <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded mb-0.5">
                {activeRole === 'siswa' ? 'Siswa SD' : 'Guru / Admin'}
              </span>
              <h4 className="font-bold text-xs text-slate-800 truncate">
                {currentUser?.name}
              </h4>
              <p className="text-[10px] text-slate-500 truncate font-medium">
                {activeRole === 'siswa'
                  ? `Kelas ${currentUser?.kelas} SD`
                  : `NIP: ${currentUser?.nip || '-'}`}
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <div>
            <p className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Menu E-Learning
            </p>
            <nav className="space-y-1">
              {currentNav.map((item) => {
                const Icon = item.icon;
                const isActive =
                  activeTab === item.id ||
                  (activeTab === 'materi-detail' && item.id === 'materi');

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-semibold text-xs transition-colors text-left ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-white' : 'text-slate-400'
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom School Info Banner */}
        <div className="mt-6 p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-[11px] text-blue-800">
            <BookCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>SD Cerdas Nusantara</span>
          </div>
          <p className="text-[10px] text-blue-700 leading-relaxed font-normal">
            Tahun Ajaran 2026/2027 • Kurikulum Merdeka Sekolah Dasar
          </p>
        </div>
      </aside>
    </>
  );
};
