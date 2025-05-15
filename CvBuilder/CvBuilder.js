 // Tab navigation logic
 const tabs = document.querySelectorAll("nav button.tab-btn");
 const sections = {
   "career-section": document.getElementById("career-section"),
   "cv-section": document.getElementById("cv-section"),
   "auth-section": document.getElementById("auth-section"),
 };

 tabs.forEach(tab => {
   tab.addEventListener("click", () => {
     tabs.forEach(t => {
       t.classList.remove("active");
       t.setAttribute("aria-selected", "false");
       sections[t.dataset.target].classList.remove("active");
       sections[t.dataset.target].setAttribute("aria-hidden", "true");
       sections[t.dataset.target].style.display = "none";
     });
     tab.classList.add("active");
     tab.setAttribute("aria-selected", "true");
     sections[tab.dataset.target].classList.add("active");
     sections[tab.dataset.target].setAttribute("aria-hidden", "false");
     sections[tab.dataset.target].style.display = "block";
     sections[tab.dataset.target].querySelector('section, form, .cv-preview')?.focus?.();
   });
 });
 
//  Cv builder
 const cvForm = document.getElementById("cv-form");
    const previewName = document.getElementById("preview-name");
    const previewEmail = document.getElementById("preview-email");
    const previewPhone = document.getElementById("preview-phone");
    const previewAddress = document.getElementById("preview-address");
    const previewEducation = document.getElementById("preview-education");
    const previewExperience = document.getElementById("preview-experience");
    const previewSkills = document.getElementById("preview-skills");

    function escapeHtml(text) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    }

    function updateCVPreview() {
      previewName.textContent = cvForm.fullName.value.trim() || "Full name here";
      previewEmail.innerHTML = cvForm.email.value.trim()
        ? `<a href="mailto:${escapeHtml(cvForm.email.value.trim())}">${escapeHtml(cvForm.email.value.trim())}</a>`
        : "<em>Email here</em>";
      previewPhone.textContent = cvForm.phone.value.trim() || "Phone number here";
      previewAddress.textContent = cvForm.address.value.trim() || "Address here";
      previewEducation.textContent = cvForm.education.value.trim() || "Education details here";
      previewExperience.textContent = cvForm.experience.value.trim() || "Experience details here";
      previewSkills.textContent = cvForm.skills.value.trim() || "Skills listed here";
    }

    cvForm.addEventListener("input", updateCVPreview);

    async function exportToPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.setFontSize(16);
      doc.text("Curriculum Vitae", 20, 20);

      let y = 30;
      doc.setFontSize(12);

      doc.text("Nama:", 20, y);
      doc.text(cvForm.fullName.value || "-", 60, y);
      y += 10;

      doc.text("Email:", 20, y);
      doc.text(cvForm.email.value || "-", 60, y);
      y += 10;

      doc.text("No. HP:", 20, y);
      doc.text(cvForm.phone.value || "-", 60, y);
      y += 10;

      doc.text("Alamat:", 20, y);
      doc.text(cvForm.address.value || "-", 60, y);
      y += 10;

      doc.text("Pendidikan:", 20, y);
      doc.text(cvForm.education.value || "-", 60, y);
      y += 10;

      doc.text("Pengalaman:", 20, y);
      doc.text(cvForm.experience.value || "-", 60, y);
      y += 10;

      doc.text("Keterampilan:", 20, y);
      doc.text(cvForm.skills.value || "-", 60, y);

      doc.save('cv.pdf');
    }