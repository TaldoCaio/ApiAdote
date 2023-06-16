const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    content.classList.toggle('show-sidebar');
});
