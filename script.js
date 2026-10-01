const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

document.getElementById("year").textContent = new Date().getFullYear();


// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL = "https://hhetdybvarnhijuvnlym.supabase.co";
const SUPABASE_KEY = "sb_publishable_CAWCLDjykMyWNuVo5TQVlw_pCNasKjW";


// ===============================
// CONTACT FORM
// ===============================

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  note.textContent = "Sending your enquiry…";

  const formData = new FormData(form);

  const lead = {
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message")
  };

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(lead)
      }
    );

    if (response.ok) {
      form.reset();
      note.textContent =
        "Thanks! Your enquiry has been received. We'll be in touch soon.";
    } else {
      const error = await response.text();
      console.error(error);

      note.textContent =
        "Something went wrong. Please try again.";
    }

  } catch (error) {
    console.error(error);

    note.textContent =
      "Unable to connect to the server.";
  }
});