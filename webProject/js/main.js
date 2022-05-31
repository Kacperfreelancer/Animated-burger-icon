const btn = document.querySelector(".click")
const iconBurger = [...document.querySelectorAll('.burger')]

const navVisible = () => {
  iconBurger.forEach((icon) => {
    icon.classList.toggle('active')
  })
}


btn.addEventListener('click', navVisible)