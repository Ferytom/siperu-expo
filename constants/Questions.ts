interface Answer {
  id: string
  text: string
}

interface Question {
  id: number
  question: string
  answers: Answer[]
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      'Ketika saya mengoperasikan peralatan baru saya umumnya:',
    answers: [
      { id: 'a', text: 'Membaca petunjuknya terlebih dahulu' },
      {
        id: 'b',
        text: 'Mendengarkan penjelasan dari seseorang yang sudah menggunakan sebelumnya',
      },
      {
        id: 'c',
        text: 'Saya langsung menggunakannya saya bisa belajar ketika menggunakannya',
      },
    ],
  },
  {
    id: 2,
    question:
      'Ketika saya membutuhkan petunjuk perjalanan saya biasanya:',
    answers: [
      { id: 'a', text: 'Melihat peta' },
      { id: 'b', text: 'Meminta petunjuk lisan' },
      {
        id: 'c',
        text: 'Mengikuti kehendak hati dan mungkin menggunakan kompas',
      },
    ],
  },
  {
    id: 3,
    question: 'Ketika saya memasak menu baru saya suka:',
    answers: [
      { id: 'a', text: 'Mengikuti resep tertulis' },
      { id: 'b', text: 'Meminta penjelasan kepada seorang teman' },
      {
        id: 'c',
        text: 'Mengikuti insting saya mencicipi ketika saya memasak',
      },
    ],
  },
  {
    id: 4,
    question:
      'Jika saya mengajarkan hal baru kepada seseorang saya cenderung:',
    answers: [
      { id: 'a', text: 'Menuliskan suruhan untuk mereka' },
      { id: 'b', text: 'Memberikan penjelasan lisan' },
      {
        id: 'c',
        text: 'Memperagakan terlebih dulu dan kemudian meminta mereka mempraktekkannya',
      },
    ],
  },
  {
    id: 5,
    question: 'Saya cenderung untuk mengatakan:',
    answers: [
      { id: 'a', text: 'Lihat bagaimana saya melakukannya' },
      { id: 'b', text: 'Dengarkan penjelasan saya' },
      { id: 'c', text: 'Silakan dikerjakan' },
    ],
  },
  {
    id: 6,
    question: 'Selama waktu luang saya paling suka:',
    answers: [
      { id: 'a', text: 'Pergi ke perpustakaan' },
      {
        id: 'b',
        text: 'Mendengarkan musik dan berbincang dengan teman saya',
      },
      { id: 'c', text: 'Berolahraga atau mengerjakan apa saja' },
    ],
  },
  {
    id: 7,
    question: 'Ketika saya berbelanja saya cenderung:',
    answers: [
      {
        id: 'a',
        text: 'Membayangkan seperti apa pakaian itu jika dikenakan',
      },
      { id: 'b', text: 'Mendiskusikannya dengan pegawai toko' },
      { id: 'c', text: 'Mencobanya langsung dan memutuskannya' },
    ],
  },
  {
    id: 8,
    question: 'Ketika saya memilih liburan saya biasanya:',
    answers: [
      { id: 'a', text: 'Membaca banyak brosur' },
      { id: 'b', text: 'Mendengarkan anjuran teman' },
      { id: 'c', text: 'Membayangkan akan seperti apa disana' },
    ],
  },
  {
    id: 9,
    question: 'Jika saya membeli mobil baru saya akan:',
    answers: [
      { id: 'a', text: 'Membaca ulasan dalam koran dan majalah' },
      {
        id: 'b',
        text: 'Membicarakan apa yang saya butuhkan dengan teman saya',
      },
      { id: 'c', text: 'Mencoba banyak jenis mobil yang berbeda' },
    ],
  },
  {
    id: 10,
    question:
      'Ketika mempelajari ketrampilan baru saya paling senang:',
    answers: [
      { id: 'a', text: 'Melihat yang seharusnya saya kerjakan' },
      {
        id: 'b',
        text: 'Membicarakannya dengan guru persis apa yang sedang guru kerjakan',
      },
      { id: 'c', text: 'Mencoba sendiri dan mengerjakan sesudahnya' },
    ],
  },
  {
    id: 11,
    question: 'Jika saya memilih makan dari menu saya cenderung:',
    answers: [
      { id: 'a', text: 'Membayangkan seperti apa makanan itu' },
      {
        id: 'b',
        text: 'Mendiskusikan pilihan menu sendiri atau dengan teman dekat',
      },
      { id: 'c', text: 'Membayangkan seperti apa rasa makanan itu' },
    ],
  },
  {
    id: 12,
    question: 'Ketika mendengarkan band saya cenderung:',
    answers: [
      { id: 'a', text: 'Melihat anggota band dan penonton lain' },
      { id: 'b', text: 'Mendengarkan liriknya dan hentakannya' },
      { id: 'c', text: 'Bergerak mengikuti irama' },
    ],
  },
  {
    id: 13,
    question: 'Ketika konsentrasi saya paling suka:',
    answers: [
      {
        id: 'a',
        text: 'Fokus pada kata-kata atau gambar di depan saya',
      },
      {
        id: 'b',
        text: 'Mendiskusikan masalah dan penyelesaian yang mungkin dalam pikirkan',
      },
      {
        id: 'c',
        text: 'Banyak bergerak menggesek-menggesekan pensil atau menyentuh sesuatu',
      },
    ],
  },
  {
    id: 14,
    question:
      'Saya memilih perlengkapan rumah tangga karena saya suka:',
    answers: [
      { id: 'a', text: 'Warna dan bagaimana penampilannya' },
      { id: 'b', text: 'Penjelasan dari sales' },
      {
        id: 'c',
        text: 'Teksturnya dan bagaimana rasanya ketika menyentuhnya',
      },
    ],
  },
  {
    id: 15,
    question: 'Ingatan pertama saya adalah:',
    answers: [
      { id: 'a', text: 'Melihat sesuatu' },
      { id: 'b', text: 'Mendengarkan sesuatu' },
      { id: 'c', text: 'Melakukan sesuatu' },
    ],
  },
  {
    id: 16,
    question: 'Ketika saya cemas saya akan:',
    answers: [
      { id: 'a', text: 'Memvisualkan skenario terburuk' },
      {
        id: 'b',
        text: 'Banyak bicara dalam hati tentang apa yang paling saya khawatirkan',
      },
      {
        id: 'c',
        text: 'Tidak bisa duduk tenang terus menerus berkeliling dan memegang sesuatu',
      },
    ],
  },
  {
    id: 17,
    question:
      'Saya merasa secara khusus terhubung dengan orang lain karena:',
    answers: [
      { id: 'a', text: 'Bagaimana dia tampak' },
      { id: 'b', text: 'Apa yang mereka katakan pada saya' },
      { id: 'c', text: 'Bagaimana mereka membuat saya berperasaan' },
    ],
  },
  {
    id: 18,
    question: 'Ketika saya harus memperbaiki ujian saya umumnya:',
    answers: [
      { id: 'a', text: 'Menulis banyak catatan revisi dan diagram' },
      {
        id: 'b',
        text: 'Membahas catatan saya sendiri atau dengan orang lain',
      },
      {
        id: 'c',
        text: 'Membayangkan membuat gerakan atau menciptakan rumus',
      },
    ],
  },
  {
    id: 19,
    question:
      'Jika saya menjelaskan kepada seseorang saya cenderung:',
    answers: [
      {
        id: 'a',
        text: 'Menunjukkan kepada mereka apa yang saya maksud',
      },
      {
        id: 'b',
        text: 'Menjelaskan kepada mereka dengan berbagai cara sampai mereka mengerti',
      },
      {
        id: 'c',
        text: 'Mendorong mereka untuk mencoba dan menyampaikan ide saya ketika mereka mengerjakan',
      },
    ],
  },
  {
    id: 20,
    question: 'Saya benar-benar suka:',
    answers: [
      {
        id: 'a',
        text: 'Menonton televisi fotografi melihat seni atau orang yang sedang menonton',
      },
      {
        id: 'b',
        text: 'Mendengarkan musik radio atau berbincang dengan teman',
      },
      {
        id: 'c',
        text: 'Berolahraga makan makanan yang enak atau menari',
      },
    ],
  },
  {
    id: 21,
    question: 'Paling banyak waktu luang saya dihabiskan:',
    answers: [
      { id: 'a', text: 'Menonton televisi' },
      { id: 'b', text: 'Berbincang dengan teman' },
      {
        id: 'c',
        text: 'Melakukan aktivitas fisik atau membuat sesuatu',
      },
    ],
  },
  {
    id: 22,
    question:
      'Jika saya pertama berkenalan dengan orang baru saya biasanya:',
    answers: [
      { id: 'a', text: 'Mengadakan pertemuan tatap muka' },
      { id: 'b', text: 'Berbincang lewat telpon' },
      {
        id: 'c',
        text: 'Coba bersama-sama sambil mengerjakan sesuatu yang lain misalnya suatu aktivitas atau makan',
      },
    ],
  },
  {
    id: 23,
    question: 'Saya pertama-tama memperhatikan bagaimana orang:',
    answers: [
      { id: 'a', text: 'Tampak dan berbusana' },
      { id: 'b', text: 'Suara dan cara berbica' },
      { id: 'c', text: 'Berdiri dan gerak' },
    ],
  },
  {
    id: 24,
    question: 'Jika saya marah saya cenderung:',
    answers: [
      {
        id: 'a',
        text: 'Terus memikirkanya apa yang membuat saya marah',
      },
      {
        id: 'b',
        text: 'Mengeraskan suara dan mengatakan kepada orang lain bagaimana perasaan saya',
      },
      {
        id: 'c',
        text: 'Menghentakkan kaki membanting pintu dan menunjukkan kemarahan saya',
      },
    ],
  },
  {
    id: 25,
    question: 'Saya paling mudah mengingat:',
    answers: [
      { id: 'a', text: 'Wajah' },
      { id: 'b', text: 'Nama' },
      { id: 'c', text: 'Apa yang telah saya lakukan' },
    ],
  },
  {
    id: 26,
    question: 'Saya berpikir bahwa seseorang berbohong jika:',
    answers: [
      { id: 'a', text: 'Mereka menghindar dari melihat kita' },
      { id: 'b', text: 'Suaranya berubah' },
      { id: 'c', text: 'Mereka memberikan banyak cerita lucu' },
    ],
  },
  {
    id: 27,
    question: 'Ketika saya bertemu teman lama',
    answers: [
      { id: 'a', text: "Saya berkata: 'sangat senang bertemu kamu'" },
      {
        id: 'b',
        text: "Saya berkata: 'sangat senang mendengar suara kamu'",
      },
      { id: 'c', text: 'Saya rangkul atau jabat tangan dia' },
    ],
  },
  {
    id: 28,
    question: 'Saya paling mengingat sesuatu dengan:',
    answers: [
      { id: 'a', text: 'Menulis catatan atau membiarkan labelnya' },
      {
        id: 'b',
        text: 'Mengatakan dengan suara keras atau mengulang kata kunci dalam pikiran saya',
      },
      {
        id: 'c',
        text: 'Berlatih dan melakukan aktivitas atau membayangkan aktivitas itu sudah dilakukan',
      },
    ],
  },
  {
    id: 29,
    question:
      'Jika saya mengeluhkan barang-barang yang cacat saya paling senang:',
    answers: [
      { id: 'a', text: 'Menulis surat' },
      { id: 'b', text: 'Mengeluhkan melalui telepon' },
      {
        id: 'c',
        text: 'Mengembalikan barang tersebut ke tokonya atau melaporkannya ke kantor',
      },
    ],
  },
  {
    id: 30,
    question: 'Saya cenderung mengatakan:',
    answers: [
      { id: 'a', text: 'Saya mengerti apa maksud kamu' },
      { id: 'b', text: 'Saya mendengar apa yang kamu katakan' },
      { id: 'c', text: 'Saya tahu bagaimana perasaan Anda' },
    ],
  },
]
