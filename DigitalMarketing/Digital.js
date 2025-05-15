//  navbar logic
document.addEventListener('DOMContentLoaded', function () {
    const dropLink = document.querySelector('.dropbtn');
    let dropdownOpened = false;

    dropLink.addEventListener('click', function (event) {
      // Cegah navigasi jika dropdown belum terbuka
      if (!dropdownOpened) {
        event.preventDefault(); // hentikan perpindahan halaman
        dropdownOpened = true;

        // Tampilkan dropdown
        this.nextElementSibling.style.display = 'block';

        // Tutup dropdown saat klik di luar area
        document.addEventListener('click', function outsideClick(e) {
          if (!dropLink.parentElement.contains(e.target)) {
            dropdownOpened = false;
            dropLink.nextElementSibling.style.display = 'none';
            document.removeEventListener('click', outsideClick);
          }
        });

        return false;
      }

      // Jika sudah terbuka, biarkan klik kedua menjalankan href
    });
  });
 
 const careerDetails = [
    {
      title: "Digital Marketing Intern",
      description:
        "• Gain exposure to digital marketing tools and platforms\n" +
        "• Support campaign execution and reporting\n" +
        "• Assist with content creation and social media\n" +
        "• Learn basics of SEO, SEM, and analytics\n" +
        "• Develop foundational professional skills"
    },
    {
      title: "Junior Digital Marketer",
      description:
        "• Execute digital campaigns under supervision\n" +
        "• Manage social media posts and engagement\n" +
        "• Assist in SEO and keyword research\n" +
        "• Analyze basic campaign metrics\n" +
        "• Begin optimizing ads and content"
    },
    {
      title: "SEO / SEM Specialist",
      description:
        "• Plan and implement SEO strategies\n" +
        "• Manage paid search campaigns (Google Ads, Bing Ads)\n" +
        "• Perform keyword research and site audits\n" +
        "• Track and report on search performance\n" +
        "• Collaborate with content and web teams"
    },
    {
      title: "Social Media Manager",
      description:
        "• Develop and execute social media strategies\n" +
        "• Manage content calendars and posting schedules\n" +
        "• Engage with online communities and influencers\n" +
        "• Monitor analytics and optimize performance\n" +
        "• Lead social campaigns linked to marketing goals"
    },
    {
      title: "Digital Marketing Manager",
      description:
        "• Oversee multi-channel digital marketing campaigns\n" +
        "• Coordinate cross-team marketing initiatives\n" +
        "• Manage budgets and campaign ROI\n" +
        "• Mentor junior team members\n" +
        "• Drive ongoing improvements with data insights"
    },
    {
      title: "Director of Digital Marketing / CMO",
      description:
        "• Set overall digital marketing vision and strategy\n" +
        "• Lead marketing department and stakeholder alignment\n" +
        "• Allocate resources and oversee major campaigns\n" +
        "• Evaluate technologies and industry trends\n" +
        "• Represent marketing in executive leadership"
    }
  ];

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
    const detailText = careerDetails[index].description.replace(/\n/g, '<br>');
    detailsPanel.innerHTML = `<h3 style="margin-top:0; color:#a1cafc;">${careerDetails[index].title}</h3><p>${detailText}</p>`;
  }

  steps.forEach((step, index) => {
    step.addEventListener('click', () => showDetails(index));
    step.addEventListener('keydown', e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showDetails(index);
      }
    });
  });

  // Show first step by default
  showDetails(0);