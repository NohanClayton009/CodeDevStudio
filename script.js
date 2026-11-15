const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
    const isCollapsed = sidebar.classList.toggle("is-collapsed");
    const label = isCollapsed ? "Expandir barra lateral" : "Recolher barra lateral";

    sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
    sidebarToggle.setAttribute("aria-label", label);
    sidebarToggle.title = label;
});