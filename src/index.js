import './style/style.scss'

console.log('Hello')

const btn = document.querySelector('.burger-btn')
const btnicon = document.querySelector('.burger-btn__wrapper')
const menu = document.querySelector('.header__menu')
const headerbtn = document.querySelector('.header__button')

btn.addEventListener('click', event => {
  btnicon.classList.toggle('active')
  menu.classList.toggle('active')
  headerbtn.classList.toggle('active')
})

const srchbtn = document.querySelector('.search__btn')
const srchinput = document.querySelector('.search__input')
const inputButton = document.querySelector('.search__input-btn')

srchbtn.addEventListener('click', event => {
  srchinput.classList.toggle('active')
  inputButton.classList.toggle('active')
})
inputButton.addEventListener('click', event => {
  srchinput.classList.toggle('active')
  inputButton.classList.toggle('active')
})
