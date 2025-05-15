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

 // Career Mapping interaction toggle details
 const careerCards = document.querySelectorAll(".career-card");
 careerCards.forEach(card => {
   card.addEventListener("click", () => {
     careerCards.forEach(c => c.classList.remove("active"));
     card.classList.add("active");
   });
   card.addEventListener("keypress", e => {
     if (e.key === "Enter" || e.key === " ") {
       e.preventDefault();
       careerCards.forEach(c => c.classList.remove("active"));
       card.classList.add("active");
     }
   });
 });