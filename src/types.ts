export type UserRole = 'siswa' | 'guru';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  avatar: string;
  nis?: string;
  nip?: string;
  kelas?: string;
  semester?: number;
  email: string;
  sekolah: string;
  progressPercent?: number;
  nilaiRataRata?: number;
  materiSelesaiCount?: number;
  materiTotalCount?: number;
  parentName?: string;
  waliKelas?: string;
}

export type KelasOption = '1' | '2' | '3' | '4' | '5' | '6';
export type SemesterOption = 1 | 2;

export interface MataPelajaran {
  id: string;
  nama: string;
  icon: string;
  color: string;
  deskripsi: string;
}

export interface SubBab {
  id: string;
  judul: string;
  deskripsi?: string;
}

export interface Bab {
  id: string;
  mapelId: string;
  judul: string;
  subBabList: SubBab[];
}

export interface MateriItem {
  id: string;
  semester: SemesterOption;
  kelas: KelasOption;
  mapelId: string;
  babId: string;
  subBabId: string;
  judul: string;
  deskripsi: string;
  kontenText: string;
  pengajar: string;
  durasiMenit: number;
  youtubeUrl?: string;
  canvaUrl?: string;
  googleDriveUrl?: string;
  wordwallUrl?: string;
  status: 'publish' | 'draft';
  tanggal: string;
  gambarUrl?: string;
}

export interface BukuPaket {
  id: string;
  judul: string;
  kelas: KelasOption;
  mapelId: string;
  deskripsi: string;
  penulis: string;
  tahun: string;
  coverUrl: string;
  googleDriveUrl: string;
  halamanCount: number;
}

export interface VideoItem {
  id: string;
  judul: string;
  kelas: KelasOption;
  mapelId: string;
  pengajar: string;
  durasi: string;
  thumbnailUrl: string;
  youtubeId: string;
  deskripsi: string;
}

export interface QuizQuestion {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  jawabanBenarIndex: number;
  pembahasan: string;
}

export interface GameKuisItem {
  id: string;
  judul: string;
  tipe: 'wordwall' | 'quiz_interaktif';
  mapelId: string;
  kelas: KelasOption;
  deskripsi: string;
  wordwallEmbedUrl?: string;
  quizQuestions?: QuizQuestion[];
  thumbnailUrl: string;
  level: 'Mudah' | 'Sedang' | 'Tantangan';
}

export interface Pengumuman {
  id: string;
  judul: string;
  kategori: 'Penting' | 'Ujian' | 'Kegiatan' | 'Informasi';
  tanggal: string;
  penulis: string;
  isi: string;
  isPinned?: boolean;
}

export interface StudentProgress {
  materiId: string;
  completed: boolean;
  completedAt?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
