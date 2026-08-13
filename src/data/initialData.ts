import {
  User,
  MataPelajaran,
  Bab,
  MateriItem,
  BukuPaket,
  VideoItem,
  GameKuisItem,
  Pengumuman,
} from '../types';

export const DEMO_USERS: User[] = [
  {
    id: 'siswa_01',
    username: 'siswa01',
    name: 'Ahmad Fauzan',
    role: 'siswa',
    avatar: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=250&q=80',
    nis: '00123',
    kelas: '4',
    semester: 1,
    email: 'ahmad.fauzan@siswa.sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
    progressPercent: 68,
    nilaiRataRata: 88.5,
    materiSelesaiCount: 17,
    materiTotalCount: 25,
    parentName: 'Bapak Rahmat Hidayat',
    waliKelas: 'Ibu Ratna Pertiwi, S.Pd',
  },
  {
    id: 'guru_01',
    username: 'guru01',
    name: 'Ibu Ratna Pertiwi, S.Pd',
    role: 'guru',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    nip: '198504122010012005',
    kelas: '4',
    email: 'ratna.pertiwi@sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
  },
];

export const STUDENT_ROSTER: User[] = [
  {
    id: 'siswa_01',
    username: 'siswa01',
    name: 'Ahmad Fauzan',
    role: 'siswa',
    avatar: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=250&q=80',
    nis: '00123',
    kelas: '4A',
    progressPercent: 75,
    nilaiRataRata: 88.5,
    email: 'ahmad.fauzan@siswa.sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
  },
  {
    id: 'siswa_02',
    username: 'siswa02',
    name: 'Siti Aisyah',
    role: 'siswa',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
    nis: '00124',
    kelas: '4A',
    progressPercent: 82,
    nilaiRataRata: 92.0,
    email: 'siti.aisyah@siswa.sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
  },
  {
    id: 'siswa_03',
    username: 'siswa03',
    name: 'Budi Santoso',
    role: 'siswa',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80',
    nis: '00125',
    kelas: '4A',
    progressPercent: 60,
    nilaiRataRata: 78.5,
    email: 'budi.santoso@siswa.sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
  },
  {
    id: 'siswa_04',
    username: 'siswa04',
    name: 'Dewi Lestari',
    role: 'siswa',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    nis: '00126',
    kelas: '4B',
    progressPercent: 90,
    nilaiRataRata: 95.0,
    email: 'dewi.lestari@siswa.sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
  },
  {
    id: 'siswa_05',
    username: 'siswa05',
    name: 'Eko Prasetyo',
    role: 'siswa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    nis: '00127',
    kelas: '4B',
    progressPercent: 50,
    nilaiRataRata: 74.0,
    email: 'eko.prasetyo@siswa.sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
  },
  {
    id: 'siswa_06',
    username: 'siswa06',
    name: 'Fitriani Kirana',
    role: 'siswa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80',
    nis: '00128',
    kelas: '4A',
    progressPercent: 88,
    nilaiRataRata: 90.0,
    email: 'fitriani.kirana@siswa.sdcerdas.sch.id',
    sekolah: 'SD Cerdas Nusantara',
  },
];

export const MATA_PELAJARAN_LIST: MataPelajaran[] = [
  {
    id: 'mtk',
    nama: 'Matematika',
    icon: 'Calculator',
    color: 'bg-blue-500 text-white',
    deskripsi: 'Belajar bilangan, pecahan, pengukuran, dan bangun datar dengan menyenangkan.',
  },
  {
    id: 'bindo',
    nama: 'Bahasa Indonesia',
    icon: 'BookOpen',
    color: 'bg-emerald-500 text-white',
    deskripsi: 'Membaca cerita rakyat, memahami puisi, dan menulis kalimat efektif.',
  },
  {
    id: 'ipa',
    nama: 'Ilmu Pengetahuan Alam (IPA)',
    icon: 'Atom',
    color: 'bg-amber-500 text-white',
    deskripsi: 'Menjelajahi bentuk energi, makhluk hidup, wujud zat, dan tata surya.',
  },
  {
    id: 'pancasila',
    nama: 'Pendidikan Pancasila',
    icon: 'ShieldCheck',
    color: 'bg-red-500 text-white',
    deskripsi: 'Memahami hak dan kewajiban, norma masyarakat, serta nilai-nilai Pancasila.',
  },
  {
    id: 'bing',
    nama: 'Bahasa Inggris',
    icon: 'Languages',
    color: 'bg-indigo-500 text-white',
    deskripsi: 'Belajar kosa kata harian, perkenalan diri, dan percakapan sederhana.',
  },
  {
    id: 'sbdp',
    nama: 'Seni Budaya & Prakarya (SBdP)',
    icon: 'Palette',
    color: 'bg-pink-500 text-white',
    deskripsi: 'Kreasi seni rupa, lagu daerah, tarian tradisional, dan kerajinan tangan.',
  },
];

export const BAB_LIST: Bab[] = [
  // MATEMATIKA KELAS 4 SEMESTER 1
  {
    id: 'mtk_bab_1',
    mapelId: 'mtk',
    judul: 'Bab 1 - Bilangan Cacah Sampai 10.000',
    subBabList: [
      { id: 'mtk_1_1', judul: 'Sub Bab 1: Mengenal & Membaca Bilangan', deskripsi: 'Membaca bilangan 4 digit' },
      { id: 'mtk_1_2', judul: 'Sub Bab 2: Operasi Hitung Penjumlahan & Pengurangan', deskripsi: 'Penjumlahan bersusun' },
      { id: 'mtk_1_3', judul: 'Sub Bab 3: Latihan Soal Bilangan', deskripsi: 'Latihan mandiri' },
    ],
  },
  {
    id: 'mtk_bab_2',
    mapelId: 'mtk',
    judul: 'Bab 2 - Pecahan Senilai & Bentuk Pecahan',
    subBabList: [
      { id: 'mtk_2_1', judul: 'Sub Bab 1: Mengenal Pecahan Biasa & Campuran', deskripsi: 'Pengertian pembilang dan penyebut' },
      { id: 'mtk_2_2', judul: 'Sub Bab 2: Menentukan Pecahan Senilai', deskripsi: 'Mengalikan dan membagi pembilang-penyebut' },
      { id: 'mtk_2_3', judul: 'Sub Bab 3: Latihan Pecahan & Soal Cerita', deskripsi: 'Aplikasi pecahan sehari-hari' },
    ],
  },
  // BAHASA INDONESIA KELAS 4 SEMESTER 1
  {
    id: 'bindo_bab_1',
    mapelId: 'bindo',
    judul: 'Bab 1 - Menjelajah Cerita Rakyat Nusantara',
    subBabList: [
      { id: 'bindo_1_1', judul: 'Sub Bab 1: Membaca & Menyimak Cerita Rakyat', deskripsi: 'Mengenal tokoh utama dan latar' },
      { id: 'bindo_1_2', judul: 'Sub Bab 2: Memahami Amanat & Unsur Intrinsik', deskripsi: 'Pesan moral dalam cerita' },
      { id: 'bindo_1_3', judul: 'Sub Bab 3: Menulis Ringkasan Cerita', deskripsi: 'Menulis dengan bahasa sendiri' },
    ],
  },
  // IPA KELAS 4 SEMESTER 1
  {
    id: 'ipa_bab_1',
    mapelId: 'ipa',
    judul: 'Bab 1 - Energi dan Perubahannya',
    subBabList: [
      { id: 'ipa_1_1', judul: 'Sub Bab 1: Bentuk-Bentuk Energi di Sekitar Kita', deskripsi: 'Energi panas, listrik, dan cahaya' },
      { id: 'ipa_1_2', judul: 'Sub Bab 2: Perubahan Bentuk Energi', deskripsi: 'Contoh perubahan energi dalam kehidupan' },
      { id: 'ipa_1_3', judul: 'Sub Bab 3: Hemat Energi & Penghematan Listrik', deskripsi: 'Langkah hemat energi di rumah' },
    ],
  },
  // PENDIDIKAN PANCASILA KELAS 4 SEMESTER 1
  {
    id: 'pancasila_bab_1',
    mapelId: 'pancasila',
    judul: 'Bab 1 - Hak dan Kewajiban Anak',
    subBabList: [
      { id: 'pancasila_1_1', judul: 'Sub Bab 1: Mengenal Hak Anak di Rumah & Sekolah', deskripsi: 'Hak mendapat kasih sayang dan pendidikan' },
      { id: 'pancasila_1_2', judul: 'Sub Bab 2: Kewajiban Anak di Rumah & Sekolah', deskripsi: 'Kewajiban belajar dan menjaga kebersihan' },
    ],
  },
];

export const MATERI_LIST: MateriItem[] = [
  {
    id: 'mat_01',
    semester: 1,
    kelas: '4',
    mapelId: 'mtk',
    babId: 'mtk_bab_2',
    subBabId: 'mtk_2_1',
    judul: 'Mengenal Pecahan Biasa dan Campuran',
    deskripsi: 'Memahami konsep dasar pecahan sebagai bagian dari keseluruhan, mengenal pembilang dan penyebut.',
    pengajar: 'Ibu Ratna Pertiwi, S.Pd',
    durasiMenit: 25,
    status: 'publish',
    tanggal: '10 Agustus 2026',
    gambarUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    youtubeUrl: 'https://www.youtube.com/embed/WMsLAn71a2M',
    canvaUrl: 'https://www.canva.com/design/DAFxxxxx/view?embed',
    googleDriveUrl: 'https://drive.google.com/file/d/1xxxx/preview',
    wordwallUrl: 'https://wordwall.net/embed/123456',
    kontenText: `
### Apa itu Pecahan?

Pecahan adalah bilangan yang menunjukkan bagian dari suatu keseluruhan. 
Misalnya, jika kamu memiliki **1 buah pizza** dan memotongnya menjadi **4 bagian yang sama besar**, lalu kamu memakan **1 potong**, maka bagian pizza yang kamu makan adalah **1/4** (satu per empat).

---

### Bagian-Bagian Pecahan

Dalam tulisan pecahan:
- Angka di atas disebut **PEMBILANG** (menunjukkan berapa bagian yang diambil).
- Angka di bawah disebut **PENYEBUT** (menunjukkan berapa total bagian yang sama besar).

Contoh: pada pecahan **3/4**
- **3** adalah Pembilang
- **4** adalah Penyebut

---

### Jenis-Jenis Pecahan
1. **Pecahan Biasa**: Pembilang lebih kecil dari penyebut. (Contoh: 1/2, 3/5, 7/10)
2. **Pecahan Campuran**: Gabungan antara bilangan bulat dan pecahan biasa. (Contoh: 1 1/2, 2 3/4)

---

### Contoh Soal Singkat:
Budi memotong semangka menjadi 8 bagian sama besar. Budi memberikan 3 bagian kepada Ani. Berapa bagian semangka yang diterima Ani?

**Jawab:**
Bagian semangka Ani adalah **3/8** bagian.
`,
  },
  {
    id: 'mat_02',
    semester: 1,
    kelas: '4',
    mapelId: 'mtk',
    babId: 'mtk_bab_2',
    subBabId: 'mtk_2_2',
    judul: 'Menentukan Pecahan Senilai dengan Mudah',
    deskripsi: 'Cara menentukan dua pecahan yang nilainya sama dengan perkalian dan pembagian.',
    pengajar: 'Ibu Ratna Pertiwi, S.Pd',
    durasiMenit: 30,
    status: 'publish',
    tanggal: '12 Agustus 2026',
    gambarUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    youtubeUrl: 'https://www.youtube.com/embed/WMsLAn71a2M',
    kontenText: `
### Apa itu Pecahan Senilai?

Pecahan senilai adalah pecahan-pecahan yang memiliki nilai yang **SAMA**, meskipun angka pembilang dan penyebutnya berbeda.

Contoh: 
**1/2** senilai dengan **2/4** dan **3/6**.

---

### Cara Mencari Pecahan Senilai

Ada dua cara mudah untuk menentukan pecahan senilai:

1. **Mengalikan Pembilang & Penyebut dengan Angka yang Sama**
   - 1/2 × (2/2) = 2/4
   - 1/2 × (3/3) = 3/6

2. **Membagi Pembilang & Penyebut dengan Angka yang Sama (Penyederhanaan)**
   - 4/8 ÷ (4/4) = 1/2
`,
  },
  {
    id: 'bind_01',
    semester: 1,
    kelas: '4',
    mapelId: 'bindo',
    babId: 'bindo_bab_1',
    subBabId: 'bindo_1_1',
    judul: 'Mengenal Tokoh dan Watak dalam Cerita Rakyat',
    deskripsi: 'Belajar mengidentifikasi tokoh antagonis, protagonis, serta latar tempat dan suasana dalam cerita rakyat.',
    pengajar: 'Bapak Ahmad Yani, S.Pd',
    durasiMenit: 20,
    status: 'publish',
    tanggal: '08 Agustus 2026',
    gambarUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    kontenText: `
### Mengenal Unsur Cerita Rakyat

Cerita rakyat adalah cerita yang berkembang secara turun-temurun di suatu daerah.

Dalam sebuah cerita terdapat **Tokoh** dan **Watak**:
- **Protagonis**: Tokoh utama yang berwatak baik (jujur, ramah, suka menolong).
- **Antagonis**: Tokoh yang berwatak buruk atau menjadi penentang tokoh utama.
- **Tritagonis**: Tokoh penengah atau pembantu.

---

### Contoh Cerita: Malin Kundang
- **Malin Kundang**: Berwatak sombong dan durhaka kepada ibu.
- **Ibu Malin**: Berwatak sabar, penuh kasih sayang.
`,
  },
  {
    id: 'ipa_01',
    semester: 1,
    kelas: '4',
    mapelId: 'ipa',
    babId: 'ipa_bab_1',
    subBabId: 'ipa_1_1',
    judul: 'Bentuk-Bentuk Energi dan Perubahannya',
    deskripsi: 'Mengenal energi panas, listrik, bunyi, serta contoh alat-alat rumah tangga yang mengubah energi.',
    pengajar: 'Ibu Nani Wijaya, M.Pd',
    durasiMenit: 25,
    status: 'publish',
    tanggal: '05 Agustus 2026',
    gambarUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    youtubeUrl: 'https://www.youtube.com/embed/WMsLAn71a2M',
    kontenText: `
### Apa itu Energi?

Energi adalah kemampuan untuk melakukan usaha atau kerja. Energi tidak dapat diciptakan atau dimusnahkan, tetapi dapat **BERUBAH BENTUK**.

---

### Contoh Perubahan Bentuk Energi:
1. **Energi Listrik → Energi Panas**: Setrika listrik, rice cooker.
2. **Energi Listrik → Energi Gerak**: Kipas angin, blender.
3. **Energi Kimia → Energi Gerak**: Makanan yang dimakan tubuh menjadi energi saat kita berlari.
`,
  },
  {
    id: 'pancasila_01',
    semester: 1,
    kelas: '4',
    mapelId: 'pancasila',
    babId: 'pancasila_bab_1',
    subBabId: 'pancasila_1_1',
    judul: 'Hak dan Kewajiban Siswa di Sekolah',
    deskripsi: 'Mengetahui apa saja hak yang harus kita dapatkan dan kewajiban yang harus kita jalankan di lingkungan sekolah.',
    pengajar: 'Bapak Hartono, S.Pd',
    durasiMenit: 15,
    status: 'publish',
    tanggal: '02 Agustus 2026',
    gambarUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    kontenText: `
### Perbedaan Hak dan Kewajiban

- **Hak** adalah sesuatu yang wajar kita terima.
- **Kewajiban** adalah sesuatu yang harus kita laksanakan dengan penuh rasa tanggung jawab.

---

### Hak Siswa di Sekolah:
1. Mendapatkan bimbingan dan pelajaran dari guru.
2. Menggunakan fasilitas sekolah (perpustakaan, lapangan).
3. Merasa aman dan dihargai di lingkungan sekolah.

### Kewajiban Siswa di Sekolah:
1. Mematuhi tata tertib sekolah.
2. Menjaga kebersihan kelas.
3. Mengikuti upacara bendera dengan khidmat.
`,
  },
];

export const BUKU_PAKET_LIST: BukuPaket[] = [
  {
    id: 'buku_01',
    judul: 'Buku Matematika Kurikulum Merdeka Kelas 4',
    kelas: '4',
    mapelId: 'mtk',
    deskripsi: 'Buku panduan utama pembelajaran Matematika Kurikulum Merdeka Kemendikbudristek.',
    penulis: 'Tim Penulis Pusat Kurikulum Kemendikbud',
    tahun: '2023',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
    googleDriveUrl: 'https://drive.google.com/file/d/1234567890/preview',
    halamanCount: 168,
  },
  {
    id: 'buku_02',
    judul: 'Buku Bahasa Indonesia: Lihat Saja! Kelas 4',
    kelas: '4',
    mapelId: 'bindo',
    deskripsi: 'Buku teks utama membaca, menulis, dan berdiskusi cerita rakyat dan puisi.',
    penulis: 'Eva Yulia & Tim',
    tahun: '2023',
    coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80',
    googleDriveUrl: 'https://drive.google.com/file/d/1234567891/preview',
    halamanCount: 210,
  },
  {
    id: 'buku_03',
    judul: 'Buku IPAS (Ilmu Pengetahuan Alam & Sosial) Kelas 4',
    kelas: '4',
    mapelId: 'ipa',
    deskripsi: 'Panduan eksperimen sederhana energi, gaya, dan ekosistem sekitar.',
    penulis: 'Fitri Amalia & Tim',
    tahun: '2023',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80',
    googleDriveUrl: 'https://drive.google.com/file/d/1234567892/preview',
    halamanCount: 195,
  },
  {
    id: 'buku_04',
    judul: 'Buku Pendidikan Pancasila Kelas 4',
    kelas: '4',
    mapelId: 'pancasila',
    deskripsi: 'Mengenal kebhinekaan, norma, serta hak dan kewajiban anak Indonesia.',
    penulis: 'Dwi Setyowati',
    tahun: '2023',
    coverUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80',
    googleDriveUrl: 'https://drive.google.com/file/d/1234567893/preview',
    halamanCount: 140,
  },
];

export const VIDEO_LIST: VideoItem[] = [
  {
    id: 'vid_01',
    judul: 'Belajar Pecahan dengan Cerita Pizza dan Roti',
    kelas: '4',
    mapelId: 'mtk',
    pengajar: 'Ibu Ratna Pertiwi, S.Pd',
    durasi: '08:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'WMsLAn71a2M',
    deskripsi: 'Animasi seru membagi pizza untuk memahami pembilang dan penyebut secara visual.',
  },
  {
    id: 'vid_02',
    judul: 'Petualangan Energi Panas dan Listrik di Rumah',
    kelas: '4',
    mapelId: 'ipa',
    pengajar: 'Ibu Nani Wijaya, M.Pd',
    durasi: '10:12',
    thumbnailUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'WMsLAn71a2M',
    deskripsi: 'Eksperimen sederhana menemukan perubahan energi listrik menjadi panas dan gerak.',
  },
  {
    id: 'vid_03',
    judul: 'Menyimak Cerita Rakyat Malin Kundang',
    kelas: '4',
    mapelId: 'bindo',
    pengajar: 'Bapak Ahmad Yani, S.Pd',
    durasi: '07:30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'WMsLAn71a2M',
    deskripsi: 'Dongeng animasi Nusantara dilengkapi pembahasan pesan moral dan watak tokoh.',
  },
  {
    id: 'vid_04',
    judul: 'Hak dan Kewajiban Anak di Sekolah & Rumah',
    kelas: '4',
    mapelId: 'pancasila',
    pengajar: 'Bapak Hartono, S.Pd',
    durasi: '06:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'WMsLAn71a2M',
    deskripsi: 'Penjelasan santai menggunakan contoh sehari-hari kehidupan di kelas 4.',
  },
];

export const GAME_KUIS_LIST: GameKuisItem[] = [
  {
    id: 'game_01',
    judul: 'Latihan Pecahan Senilai',
    tipe: 'quiz_interaktif',
    mapelId: 'mtk',
    kelas: '4',
    level: 'Mudah',
    deskripsi: 'Kuis interaktif pilihan ganda untuk menguji pemahaman pecahan biasa dan senilai.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80',
    quizQuestions: [
      {
        id: 'q1',
        pertanyaan: 'Pada pecahan 3/5, angka 3 dinamakan...',
        pilihan: ['A. Penyebut', 'B. Pembilang', 'C. Bilangan Bulat', 'D. Campuran'],
        jawabanBenarIndex: 1,
        pembahasan: 'Angka di atas garis pecahan adalah pembilang, sedangkan angka di bawah garis adalah penyebut.',
      },
      {
        id: 'q2',
        pertanyaan: 'Manakah pecahan berikut yang senilai dengan 1/2?',
        pilihan: ['A. 2/3', 'B. 3/6', 'C. 4/5', 'D. 2/5'],
        jawabanBenarIndex: 1,
        pembahasan: 'Jika 1/2 dikalikan (3/3), hasilnya adalah 3/6. Maka 1/2 senilai dengan 3/6.',
      },
      {
        id: 'q3',
        pertanyaan: 'Ibu memotong kue menjadi 8 bagian. Ani memakan 2 bagian. Berapa bagian kue yang dimakan Ani?',
        pilihan: ['A. 1/8', 'B. 2/8', 'C. 6/8', 'D. 8/2'],
        jawabanBenarIndex: 1,
        pembahasan: '2 bagian dari total 8 bagian sama artinya dengan 2/8.',
      },
    ],
  },
  {
    id: 'game_02',
    judul: 'Tebak Kata Cerita Rakyat (Wordwall)',
    tipe: 'wordwall',
    mapelId: 'bindo',
    kelas: '4',
    level: 'Sedang',
    deskripsi: 'Game tebak watak tokoh dan amanat cerita rakyat khas Nusantara di Wordwall.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    wordwallEmbedUrl: 'https://wordwall.net/embed/play/12345/678',
  },
  {
    id: 'game_03',
    judul: 'Quiz Energi & Perubahannya',
    tipe: 'quiz_interaktif',
    mapelId: 'ipa',
    kelas: '4',
    level: 'Tantangan',
    deskripsi: 'Tebak alat mana yang mengubah energi listrik menjadi gerak atau panas!',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80',
    quizQuestions: [
      {
        id: 'q_ipa_1',
        pertanyaan: 'Alat rumah tangga yang mengubah energi listrik menjadi energi PANAS adalah...',
        pilihan: ['A. Kipas Angin', 'B. Setrika Listrik', 'C. Radio', 'D. Lampu LED'],
        jawabanBenarIndex: 1,
        pembahasan: 'Setrika memanfaatkan elemen pemanas untuk mengubah energi listrik menjadi panas.',
      },
      {
        id: 'q_ipa_2',
        pertanyaan: 'Saat kita menyalakan senter baterai, perubahan energi yang terjadi adalah...',
        pilihan: ['A. Kimia → Listrik → Cahaya', 'B. Listrik → Panas → Gerak', 'C. Gerak → Bunyi', 'D. Cahaya → Kimia'],
        jawabanBenarIndex: 0,
        pembahasan: 'Baterai menyimpan energi kimia, berubah jadi listrik, lalu menghasilkan cahaya.',
      },
    ],
  },
];

export const PENGUMUMAN_LIST: Pengumuman[] = [
  {
    id: 'ann_01',
    judul: '📢 Pelaksanaan Ujian Tengah Semester (UTS) 1 Tahun Ajaran 2026/2027',
    kategori: 'Ujian',
    tanggal: '12 Agustus 2026',
    penulis: 'Kepala Sekolah SD Cerdas Nusantara',
    isPinned: true,
    isi: 'Diberitahukan kepada seluruh siswa kelas 1-6 bahwa Penilaian Tengah Semester akan dilaksanakan mulai hari Senin, 20 Agustus 2026. Harap mempelajari materi bab 1 dan 2 pada masing-masing mata pelajaran.',
  },
  {
    id: 'ann_02',
    judul: '✨ Penambahan Fitur "AI Assistant" & Game Pembelajaran Baru',
    kategori: 'Informasi',
    tanggal: '10 Agustus 2026',
    penulis: 'Tim Admin Pembelajaran',
    isPinned: false,
    isi: 'Selamat! Sekarang adik-adik siswa dapat bertanya kapan saja kepada "🤖 Tanya AI" jika kesulitan memahami materi pelajaran. Selamat belajar!',
  },
  {
    id: 'ann_03',
    judul: '🏆 Lomba Rangking 1 & Peringatan Hari Kemerdekaan RI',
    kategori: 'Kegiatan',
    tanggal: '05 Agustus 2026',
    penulis: 'Ibu Ratna Pertiwi, S.Pd',
    isPinned: false,
    isi: 'Siswa kelas 4 diundang untuk mengikuti Lomba Cerdas Cermat online melalui menu Game & Kuis pada tanggal 17 Agustus 2026.',
  },
];
