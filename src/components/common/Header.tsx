import React, { useState } from 'react';
import {
  GraduationCap,
  Bell,
  LogOut,
  UserCheck,
  Menu,
  ChevronDown,
  BookOpen,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC<{ onToggleSidebar: () => void }> = ({ onToggleSidebar }) => {
  const { currentUser, activeRole, switchRole, logout, pengumumanList, setActiveTab } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 md:px-6 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Mobile Menu Toggle & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-base text-slate-800 tracking-tight leading-none">
                  SD Cerdas Nusantara
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-normal hidden sm:block">
                Portal E-Learning Resmi Kelas 1–6
              </p>
            </div>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mode Role Switcher */}
          <button
            onClick={() => switchRole(activeRole === 'siswa' ? 'guru' : 'siswa')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 font-medium text-xs transition-colors"
            title="Klik untuk ganti peran demo"
          >
            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden md:inline">Mode Demo:</span>
            <span className="font-bold text-blue-700 capitalize">
              {activeRole === 'siswa' ? 'Siswa' : 'Guru/Admin'}
            </span>
          </button>

          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Pengumuman & Notifikasi"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-lg border border-slate-200 p-4 z-50">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-2.5">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-blue-600" />
                    <h3 className="font-bold text-xs text-slate-800">Pengumuman Sekolah</h3>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                    {pengumumanList.length} Terbaru
                  </span>
                </div>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {pengumumanList.slice(0, 3).map((ann) => (
                    <div
                      key={ann.id}
                      onClick={() => {
                        setActiveTab('pengumuman');
                        setShowNotifications(false);
                      }}
                      className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50/70 border border-slate-100 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                          {ann.kategori}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {ann.tanggal}
                        </span>
                      </div>
                      <p className="font-semibold text-xs text-slate-800 line-clamp-1">
                        {ann.judul}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                        {ann.isi}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveTab('pengumuman');
                    setShowNotifications(false);
                  }}
                  className="w-full mt-2.5 text-center text-xs font-bold text-blue-600 hover:text-blue-800 py-1 transition-colors"
                >
                  Lihat Semua Pengumuman →
                </button>
              </div>
            )}
          </div>

          {/* User Profile Avatar Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <img
                src={currentUser?.avatar}
                alt={currentUser?.name}
                className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  {currentUser?.name}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  {activeRole === 'siswa' ? `Kelas ${currentUser?.kelas} SD` : 'Guru Pengajar'}
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50">
                <div className="px-3.5 py-2 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-800">{currentUser?.name}</p>
                  <p className="text-[10px] text-slate-500 truncate">{currentUser?.email}</p>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('profil');
                    setShowProfileMenu(false);
                  }}
                  className="w-full px-3.5 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 font-medium flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Lihat Profil Saya</span>
                </button>

                <div className="my-1 border-t border-slate-100" />

                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    logout();
                  }}
                  className="w-full px-3.5 py-2 text-left text-xs text-red-600 hover:bg-red-50 font-semibold flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar Akun</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
