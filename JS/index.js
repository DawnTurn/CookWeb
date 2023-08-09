const languageDropdown = document.querySelector('.language-dropdown')
const currencyDropdown = document.querySelector('.currency-dropdown')
const language = document.querySelector('.language')
const currency = document.querySelector('.currency')
const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const cancel = document.querySelector('.cancel')
const arrow = document.querySelectorAll('.bxs-down-arrow')

burger.addEventListener('click', () => {
    nav.classList.add('active')
})

cancel.addEventListener('click', () => {
    nav.classList.remove('active')
})

languageDropdown.addEventListener('click', () => {
    language.classList.toggle('show')
    arrow[0].classList.toggle('flip')
})

currencyDropdown.addEventListener('click', () => {
    currency.classList.toggle('show')
    arrow[1].classList.toggle("flip")
})