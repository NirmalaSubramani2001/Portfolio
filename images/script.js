
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('success') === 'true') {
  document.getElementById("success-msg").style.display = "block";
}

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    successMsg.style.display = "block";
    form.reset();
  } else {
    alert("Something went wrong!");
  }
});
