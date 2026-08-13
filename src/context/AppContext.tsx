import React, { createContext, useContext, useState } from 'react';
import {
  User,
  MateriItem,
  BukuPaket,
  VideoItem,
  GameKuisItem,
  Pengumuman,
  KelasOption,
  SemesterOption,
  UserRole,
} from '../types';
import {
  DEMO_USERS,
  STUDENT_ROSTER,
  MATERI_LIST,
  BUKU_PAKET_LIST,
  VIDEO_LIST,
  GAME_KUIS_LIST,
  PENGUMUMAN_LIST,
} from '../data/initialData';

interface AppContextType {
  currentUser: User | null;
  activeRole: UserRole;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedMateriId: string | null;
  setSelectedMateriId: (id: string | null) => void;
  
  // Filters
  classFilter: KelasOption;
  setClassFilter: (kelas: KelasOption) => void;
  semesterFilter: SemesterOption;
  setSemesterFilter: (sem: SemesterOption) => void;
  mapelFilter: string;
  setMapelFilter: (mapelId: string) => void;

  // Data lists
  materiList: MateriItem[];
  bukuList: BukuPaket[];
  videoList: VideoItem[];
  gameList: GameKuisItem[];
  pengumumanList: Pengumuman[];
  studentRoster: User[];

  // Student progress
  completedMateriIds: string[];
  toggleMateriComplete: (id: string) => void;

  // Actions
  login: (username: string, role: UserRole) => boolean;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  addMateri: (newMateri: MateriItem) => void;
  addPengumuman: (newAnn: Pengumuman) => void;
  openMateriDetail: (materiId: string) => void;

  // AI & Notifications
  aiChatOpen: boolean;
  setAiChatOpen: (open: boolean) => void;
  initialQuestionPrompt: string | null;
  askAiWithPrompt: (promptText: string) => void;
  
  // Toast notifications
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default demo user: Ahmad Fauzan (Siswa)
  const [currentUser, setCurrentUser] = useState<User | null>(DEMO_USERS[0]);
  const [activeRole, setActiveRole] = useState<UserRole>('siswa');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedMateriId, setSelectedMateriId] = useState<string | null>('mat_01');

  // Filters
  const [classFilter, setClassFilter] = useState<KelasOption>('4');
  const [semesterFilter, setSemesterFilter] = useState<SemesterOption>(1);
  const [mapelFilter, setMapelFilter] = useState<string>('all');

  // Datasets
  const [materiList, setMateriList] = useState<MateriItem[]>(MATERI_LIST);
  const [bukuList] = useState<BukuPaket[]>(BUKU_PAKET_LIST);
  const [videoList] = useState<VideoItem[]>(VIDEO_LIST);
  const [gameList] = useState<GameKuisItem[]>(GAME_KUIS_LIST);
  const [pengumumanList, setPengumumanList] = useState<Pengumuman[]>(PENGUMUMAN_LIST);
  const [studentRoster] = useState<User[]>(STUDENT_ROSTER);

  // Student progress completed IDs
  const [completedMateriIds, setCompletedMateriIds] = useState<string[]>(['mat_02', 'bind_01']);

  // AI Widget State
  const [aiChatOpen, setAiChatOpen] = useState<boolean>(false);
  const [initialQuestionPrompt, setInitialQuestionPrompt] = useState<string | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const login = (username: string, role: UserRole): boolean => {
    const foundUser = DEMO_USERS.find(
      (u) => u.username.toLowerCase() === username.toLowerCase() && u.role === role
    ) || (role === 'siswa' ? DEMO_USERS[0] : DEMO_USERS[1]);

    setCurrentUser(foundUser);
    setActiveRole(role);
    setActiveTab('dashboard');
    showToast(`Selamat datang kembali, ${foundUser.name}! 👋`);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('Berhasil keluar akun.');
  };

  const switchRole = (role: UserRole) => {
    const targetUser = DEMO_USERS.find((u) => u.role === role) || DEMO_USERS[0];
    setCurrentUser(targetUser);
    setActiveRole(role);
    setActiveTab('dashboard');
    showToast(`Beralih peran ke ${role === 'siswa' ? 'Siswa' : 'Guru/Admin'}`);
  };

  const toggleMateriComplete = (id: string) => {
    setCompletedMateriIds((prev) => {
      const exists = prev.includes(id);
      let updated: string[];
      if (exists) {
        updated = prev.filter((item) => item !== id);
        showToast('Tanda selesai dihapus');
      } else {
        updated = [...prev, id];
        showToast('🎉 Luar biasa! Materi telah ditandai selesai.');
      }
      return updated;
    });
  };

  const addMateri = (newMateri: MateriItem) => {
    setMateriList((prev) => [newMateri, ...prev]);
    showToast(`Materi "${newMateri.judul}" berhasil ditambahkan!`);
  };

  const addPengumuman = (newAnn: Pengumuman) => {
    setPengumumanList((prev) => [newAnn, ...prev]);
    showToast('Pengumuman baru telah diterbitkan!');
  };

  const openMateriDetail = (materiId: string) => {
    setSelectedMateriId(materiId);
    setActiveTab('materi-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const askAiWithPrompt = (promptText: string) => {
    setInitialQuestionPrompt(promptText);
    setAiChatOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        activeRole,
        activeTab,
        setActiveTab,
        selectedMateriId,
        setSelectedMateriId,
        classFilter,
        setClassFilter,
        semesterFilter,
        setSemesterFilter,
        mapelFilter,
        setMapelFilter,
        materiList,
        bukuList,
        videoList,
        gameList,
        pengumumanList,
        studentRoster,
        completedMateriIds,
        toggleMateriComplete,
        login,
        logout,
        switchRole,
        addMateri,
        addPengumuman,
        openMateriDetail,
        aiChatOpen,
        setAiChatOpen,
        initialQuestionPrompt,
        askAiWithPrompt,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
