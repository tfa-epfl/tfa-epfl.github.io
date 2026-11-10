const menuButton = document.getElementById('mobile-menu-button');
const siteMenu = document.getElementById('site-menu');

function setMenuOpen(open) {
    siteMenu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    const icon = menuButton.querySelector('i');
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-times', open);
}

menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});
siteMenu.addEventListener('click', () => setMenuOpen(false));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuButton.focus();
    }
});
window.matchMedia('(min-width: 80rem)').addEventListener('change', () => setMenuOpen(false));
