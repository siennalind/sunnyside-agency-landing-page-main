const hamburgerButton = document.getElementById('hamburger')
const mobileMenu = document.getElementById('primary-nav')

const toggleMenu = () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden')
    } else {
        mobileMenu.classList.add('hidden')
    }
}

hamburgerButton.addEventListener('click', toggleMenu)