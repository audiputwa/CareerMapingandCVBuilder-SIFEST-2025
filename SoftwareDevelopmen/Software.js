 // Career step details data
const careerDetails = [
  {
    title: "Junior Developer",
    description:
      "• Pelajari dan terapkan keterampilan pemrograman dasar\n" +
      "• Memahami kode dasar dan kontrol versi\n" +
      "• Mengerjakan perbaikan bug sederhana dan fitur\n" +
      "• Berkolaborasi dengan anggota tim\n" +
      "• Membangun kebiasaan coding dan dokumentasi yang baik"
  },
  {
    title: "Mid-level Developer",
    description:
      "• Menulis kode yang bersih dan mudah dipelihara secara mandiri\n" +
      "• Mengerjakan fitur dan proyek yang lebih besar\n" +
      "• Berpartisipasi dalam review kode\n" +
      "• Memahami siklus hidup perangkat lunak dan pengujian\n" +
      "• Meningkatkan keterampilan debugging dan pemecahan masalah"
  },
  {
    title: "Senior Developer",
    description:
      "• Memimpin pengembangan fitur kompleks\n" +
      "• Merancang komponen sistem dan membimbing anggota tim\n" +
      "• Menetapkan standar coding dan praktik terbaik\n" +
      "• Berkolaborasi dengan tim lintas fungsi\n" +
      "• Mengambil keputusan teknis dan mendorong perbaikan"
  },
  {
    title: "Lead Developer",
    description:
      "• Memimpin tim developer\n" +
      "• Merencanakan dan mendelegasikan tugas\n" +
      "• Menjaga kualitas dan jadwal penyampaian proyek\n" +
      "• Berinteraksi dengan tim produk dan manajemen\n" +
      "• Melatih dan membimbing anggota tim"
  },
  {
    title: "Software Architect",
    description:
      "• Merancang arsitektur sistem tingkat tinggi\n" +
      "• Menentukan tumpukan teknologi dan standar\n" +
      "• Membimbing tim pengembangan tentang arsitektur\n" +
      "• Mengevaluasi teknologi baru\n" +
      "• Menjamin skalabilitas, keamanan, dan performa sistem"
  },
  {
    title: "CTO",
    description:
      "• Menetapkan visi teknis dan strategi perusahaan\n" +
      "• Memimpin departemen engineering dan R&D\n" +
      "• Mengelola anggaran dan sumber daya\n" +
      "• Berkomunikasi dengan pemangku kepentingan dan investor\n" +
      "• Mendorong inovasi dan pertumbuhan"
  }
];


  // Elements
  const steps = document.querySelectorAll('.step');
  const detailsPanel = document.getElementById('details-panel');

  function clearActive() {
    steps.forEach(step => {
      step.classList.remove('active');
      step.setAttribute('aria-expanded', 'false');
    });
  }

  function showDetails(index) {
    clearActive();
    const step = steps[index];
    step.classList.add('active');
    step.setAttribute('aria-expanded', 'true');
    // Replace line breaks with <br> for HTML
    const detailText = careerDetails[index].description.replace(/\n/g, '<br>');
    detailsPanel.innerHTML = `<h3 style="margin-top:0; color:#00ddff;">${careerDetails[index].title}</h3><p>${detailText}</p>`;
  }

  // Add click and keyboard accessibility
  steps.forEach((step, index) => {
    step.addEventListener('click', () => showDetails(index));
    step.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showDetails(index);
      }
    });
  });

  // Initialize showing first step details
  showDetails(0);