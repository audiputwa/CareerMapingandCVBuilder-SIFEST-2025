/* Career step description data */
  const careerDetails = [
    {
      title: "Frontend Junior Developer",
      description:
        "• Master HTML, CSS, and JavaScript basics\n" +
        "• Learn frontend frameworks like React, Vue, or Angular\n" +
        "• Build responsive & accessible user interfaces\n" +
        "• Work with APIs and integrate backend data\n" +
        "• Understand version control and deployment basics"
    },
    {
      title: "Backend Junior Developer",
      description:
        "• Learn server-side languages like Node.js, Python, or PHP\n" +
        "• Work with databases (SQL and NoSQL)\n" +
        "• Develop RESTful APIs and manage authentication\n" +
        "• Understand server, hosting, and cloud basics\n" +
        "• Implement basic security and performance best practices"
    },
    {
      title: "Fullstack Developer",
      description:
        "• Combine frontend and backend skills for end-to-end development\n" +
        "• Handle complex applications and integrations\n" +
        "• Optimize application performance and structure\n" +
        "• Collaborate with cross-functional teams\n" +
        "• Participate in code reviews and mentoring juniors"
    },
    {
      title: "Technical Lead",
      description:
        "• Lead development teams and projects\n" +
        "• Review and enforce code quality standards\n" +
        "• Plan and allocate tasks effectively\n" +
        "• Interface with product managers and stakeholders\n" +
        "• Mentor team members and drive innovation"
    },
    {
      title: "Web Architect",
      description:
        "• Design scalable and robust web architectures\n" +
        "• Define technology stacks and standards\n" +
        "• Oversee security, scalability, and reliability\n" +
        "• Evaluate emerging web technologies\n" +
        "• Guide technical teams and ensure best practices"
    },
    {
      title: "CTO",
      description:
        "• Define company’s technological vision and strategy\n" +
        "• Lead and manage engineering divisions\n" +
        "• Align technology with business goals\n" +
        "• Represent technology at executive and investor levels\n" +
        "• Drive innovation, growth, and culture across teams"
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
    // Convert newlines to <br> for HTML formatting
    const detailText = careerDetails[index].description.replace(/\n/g, '<br>');
    detailsPanel.innerHTML = `<h3 style="margin-top:0; color:#00efff;">${careerDetails[index].title}</h3><p>${detailText}</p>`;
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

  // Initialize first career step details display
  showDetails(0);