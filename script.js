// Animação suave ao rolar a página window.addEventListener("scroll", () => { const header = document.querySelector("header"); if (window.scrollY > 50) { header.style.transition = "all 0.3s ease"; header.style.opacity = "0.9"; header.style.transform = "scale(0.98)"; } else { header.style.opacity = "1"; header.style.transform = "scale(1)"; } });

// Botão voltar ao topo const backToTop = document.createElement("button"); backToTop.textContent = "↑ Topo"; backToTop.style.position = "fixed"; backToTop.style.bottom = "20px"; backToTop.style.right = "20px"; backToTop.style.padding = "10px 15px"; backToTop.style.backgroundColor = "#f8bbd0"; backToTop.style.color = "#fff"; backToTop.style.border = "none"; backToTop.style.borderRadius = "8px"; backToTop.style.cursor = "pointer"; backToTop.style.display = "none"; backToTop.style.zIndex = "1000"; document.body.appendChild(backToTop);

window.addEventListener("scroll", () => { if (window.scrollY > 300) { backToTop.style.display = "block"; } else { backToTop.style.display = "none"; } });

backToTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });

// Animação ao passar mouse nos ícones sociais const socialIcons = document.querySelectorAll(".social-icons a img"); socialIcons.forEach(icon => { icon.addEventListener("mouseenter", () => { icon.style.transform = "scale(1.2)"; icon.style.transition = "transform 0.3s ease"; }); icon.addEventListener("mouseleave", () => { icon.style.transform = "scale(1)"; }); });