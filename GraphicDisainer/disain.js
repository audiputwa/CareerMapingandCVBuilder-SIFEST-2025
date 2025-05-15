 const careerDetails = [
    {
      title: "Graphic Design Intern",
      description:
        "• Assist with basic design tasks and projects\n" +
        "• Learn to use design software such as Adobe Photoshop, Illustrator\n" +
        "• Support senior designers and team with research and preparation\n" +
        "• Understand design principles and tools\n" +
        "• Build foundational skills and portfolio pieces"
    },
    {
      title: "Junior Graphic Designer",
      description:
        "• Create simple design assets for print and digital media\n" +
        "• Work on branding, social media graphics, and layouts\n" +
        "• Collaborate closely with clients and teams\n" +
        "• Improve technical skills and attention to detail\n" +
        "• Start receiving feedback and implementing revisions"
    },
    {
      title: "Mid-level Graphic Designer",
      description:
        "• Handle larger design projects with moderate complexity\n" +
        "• Develop brand identities and consistent visual styles\n" +
        "• Manage deadlines and deliver multiple assets\n" +
        "• Mentor junior designers and interns\n" +
        "• Continue expanding creative and technical expertise"
    },
    {
      title: "Senior Graphic Designer",
      description:
        "• Lead major projects and creative campaigns\n" +
        "• Provide creative direction and technical guidance\n" +
        "• Coordinate with marketing, web, and content teams\n" +
        "• Oversee quality control and final production\n" +
        "• Drive innovation in design styles and approaches"
    },
    {
      title: "Art Director",
      description:
        "• Lead creative teams and oversee multiple projects\n" +
        "• Define visual style and branding strategies\n" +
        "• Collaborate with clients and executives for vision alignment\n" +
        "• Manage budgets and timelines\n" +
        "• Inspire and mentor creative staff"
    },
    {
      title: "Creative Director",
      description:
        "• Set company-wide creative vision and goals\n" +
        "• Lead strategic planning of creative projects\n" +
        "• Oversee all aspects of creative output\n" +
        "• Manage large teams and cross-department collaboration\n" +
        "• Represent creative interests at executive level"
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
    // Convert newlines to <br> for formatting
    const detailText = careerDetails[index].description.replace(/\n/g, '<br>');
    detailsPanel.innerHTML = `<h3 style="margin-top:0; color:#894e13;">${careerDetails[index].title}</h3><p>${detailText}</p>`;
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

  // Show first step details by default
  showDetails(0);