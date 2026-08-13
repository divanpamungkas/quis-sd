import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { ToastNotification } from './components/common/ToastNotification';
import { LoginPage } from './components/auth/LoginPage';

// Student Components
import { StudentDashboard } from './components/student/StudentDashboard';
import { MateriList } from './components/student/MateriList';
import { MateriDetail } from './components/student/MateriDetail';
import { BukuPaket } from './components/student/BukuPaket';
import { VideoPembelajaran } from './components/student/VideoPembelajaran';
import { GameKuis } from './components/student/GameKuis';
import { PengumumanList } from './components/student/PengumumanList';
import { StudentProfile } from './components/student/StudentProfile';

// Teacher Components
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { DataSiswa } from './components/teacher/DataSiswa';
import { ManajemenMateri } from './components/teacher/ManajemenMateri';

const AppContent: React.FC = () => {
  const { currentUser, activeRole, activeTab } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Unauthenticated
  if (!currentUser) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans text-slate-800 flex flex-col antialiased">
      {/* Top Header */}
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Layout Area */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          {/* Student Screen Router */}
          {activeRole === 'siswa' && (
            <>
              {activeTab === 'dashboard' && <StudentDashboard />}
              {activeTab === 'materi' && <MateriList />}
              {activeTab === 'materi-detail' && <MateriDetail />}
              {activeTab === 'buku' && <BukuPaket />}
              {activeTab === 'video' && <VideoPembelajaran />}
              {activeTab === 'game' && <GameKuis />}
              {activeTab === 'pengumuman' && <PengumumanList />}
              {activeTab === 'profil' && <StudentProfile />}
            </>
          )}

          {/* Teacher Screen Router */}
          {activeRole === 'guru' && (
            <>
              {activeTab === 'dashboard' && <TeacherDashboard />}
              {activeTab === 'data-siswa' && <DataSiswa />}
              {activeTab === 'manajemen-materi' && <ManajemenMateri />}
              {activeTab === 'materi' && <MateriList />}
              {activeTab === 'materi-detail' && <MateriDetail />}
              {activeTab === 'buku' && <BukuPaket />}
              {activeTab === 'video' && <VideoPembelajaran />}
              {activeTab === 'game' && <GameKuis />}
              {activeTab === 'pengumuman' && <PengumumanList />}
              {activeTab === 'profil' && <StudentProfile />}
            </>
          )}
        </main>
      </div>

      {/* Toast Notification */}
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
