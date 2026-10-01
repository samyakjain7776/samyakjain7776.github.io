document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation-links');
if (menuButton && menu) {
    const closeMenu = () => {
        menu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Menu';
    };
    menuButton.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.textContent = open ? 'Close' : 'Menu';
    });
    menu.addEventListener('click', event => {
        const link = event.target.closest('a');
        if (!link) return;
        closeMenu();
        if (link.hash && link.pathname === location.pathname) {
            const section = document.querySelector(link.hash);
            if (section) {
                section.setAttribute('tabindex', '-1');
                section.focus({ preventScroll: true });
            }
        }
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('is-open')) {
            closeMenu();
            menuButton.focus();
        }
    });
    const desktop = window.matchMedia('(min-width: 801px)');
    desktop.addEventListener('change', closeMenu);
}
