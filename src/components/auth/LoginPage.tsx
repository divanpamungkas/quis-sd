import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GraduationCap, Lock, User, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { UserRole } from '../../types';

export const LoginPage: React.FC = () => {
  const { login } = useApp();
  const [username, setUsername] = useState('siswa01');
  const [password, setPassword] = useState('123456');
  const [role, setRole] = useState<UserRole>('siswa');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg('Harap isi Username/NIS dan Password.');
      return;
    }
    const success = login(username, role);
    if (!success) {
      setErrorMsg('Username atau password tidak sesuai.');
    }
  };

  const prefillDemoAccount = (selectedRole: UserRole) => {
    if (selectedRole === 'siswa') {
      setUsername('siswa01');
      setPassword('123456');
      setRole('siswa');
    } else {
      setUsername('guru01');
      setPassword('123456');
      setRole('guru');
    }
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-8 text-white text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <GraduationCap className="w-48 h-48" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-lg ring-4 ring-white/10">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-2xl font-black tracking-tight">SD Cerdas Nusantara</h1>
            <p className="text-xs text-blue-100 font-medium mt-1">
              Portal E-Learning Resmi Siswa & Guru SD
            </p>
          </div>
        </div>

        {/* Login Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Role Toggle Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">
              Pilih Role Akses:
            </label>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setRole('siswa')}
                className={`py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                  role === 'siswa'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Siswa</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('guru')}
                className={`py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                  role === 'guru'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Guru / Admin</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Username / NIS
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan Username / NIS"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan Password"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-red-500 font-semibold bg-red-50 p-2.5 rounded-xl border border-red-100">
                ⚠️ {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Masuk Portal Belajar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Quick Demo Credentials Widget */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Akun Demo Cepat (Klik untuk mengisi):</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => prefillDemoAccount('siswa')}
                className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-100 text-left transition-colors"
              >
                <p className="text-[10px] font-extrabold uppercase text-blue-700">Akun Siswa Demo</p>
                <p className="text-[11px] text-slate-800 font-medium">siswa01 / 123456</p>
              </button>

              <button
                type="button"
                onClick={() => prefillDemoAccount('guru')}
                className="p-2.5 rounded-xl border border-indigo-200 bg-indigo-50/60 hover:bg-indigo-100 text-left transition-colors"
              >
                <p className="text-[10px] font-extrabold uppercase text-indigo-700">Akun Guru Demo</p>
                <p className="text-[11px] text-slate-800 font-medium">guru01 / 123456</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
