function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const mobilePanel = document.getElementById("mobilePanel");
  const menuBtn = document.getElementById("menuBtn");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => mobilePanel.classList.remove("-translate-x-full"), 10);
    menuBtn.innerHTML = '<span class="material-icons text-2xl">close</span>';
  } else {
    mobilePanel.classList.add("-translate-x-full");
    setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    menuBtn.innerHTML = '<span class="material-icons text-2xl">menu</span>';
  }
}