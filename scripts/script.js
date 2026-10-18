const header = document.querySelector('header')
const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll('li')
const menuIcon = document.querySelector('#menuIcon')
const menuLine1 = document.querySelector('#menuLine1')
const menuLine2 = document.querySelector('#menuLine2')
const menuLine3 = document.querySelector('#menuLine3')

let n = 1;
menuIcon.addEventListener('click', () => {
  n == 1 ? openMenu() : closeMenu()
})

navLinks.forEach(li => {
  li.addEventListener('click', () => {
    closeMenu()
  })
})

function openMenu() {
  nav.style.display = "flex"
  setTimeout(() => {
    nav.style.top = "80px"
  }, 1);
  menuLine1.classList.add('menu-line-1-close')
  menuLine2.classList.add('menu-line-2-close')
  menuLine3.classList.add('menu-line-3-close')
  n = 2
}

function closeMenu() {
  nav.style.top = "-50dvh"
  menuLine1.classList.remove('menu-line-1-close')
  menuLine2.classList.remove('menu-line-2-close')
  menuLine3.classList.remove('menu-line-3-close')
  setTimeout(() => {
    nav.style.display = "none"
  }, 500);
  n = 1
}