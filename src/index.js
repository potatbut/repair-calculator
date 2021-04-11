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

const squareInput = document.querySelector('.calculator__output-repair-area')
const squareRange = document.querySelector('.calculator__repair-area-range')

squareInput.innerHTML = squareRange.value

squareRange.oninput = function() {
  squareInput.innerHTML = squareRange.value
}

const squareInputBathroom = document.querySelector('.calculator__output-bathroom-area')
const squareRangeBathroom = document.querySelector('.calculator__bathroom-area-range')

squareInputBathroom.innerHTML = squareRangeBathroom.value

squareRangeBathroom.oninput = function() {
  squareInputBathroom.innerHTML = squareRangeBathroom.value
}


/* ПЕРЕМЕННЫЕ ДЛЯ КАЛЬКУЛЯТОРА */
const CALC = document.querySelector('.calculator__body')

const TYPE = document.querySelector('.calculator__select-premises')

const SQUARE = document.querySelector('.calculator__repair-area-range')

const ELECTR =document.querySelector('.calculator__select-electrician')

const PERIMETER = document.querySelector('.calculator__perimeter')

const TYPE_REPAIRS = document.querySelector('.calculator__select-repairs')

const CELLING = document.querySelector('.calculator__select-ceilings')

const BATH = document.querySelector('.calculator__select-bathroom')

const BATH_BLOCK = document.querySelector('.calculator__bathroom-area')

const BATH_SQUARE = document.querySelector('.calculator__bathroom-area-range')

const FLOOR = document.querySelector('.calculator__select-floors')

const DOOR = document.querySelector('.door-switch__output')

const DOORS = document.querySelector('.calculator__select-doors')

const ENTER__DOOR = document.querySelector('.door-switch__checkbox')

const TOTAL_SUM = document.querySelector('.total__sum')
TOTAL_SUM.innerHTML = 'Сумма в рублях'

DOOR.innerHTML = "Да"

ENTER__DOOR.addEventListener('change', event => {
  if(ENTER__DOOR.checked) {
    DOOR.innerHTML = "Нет"
  } else {
    DOOR.innerHTML = "Да"
  }
})

BATH.addEventListener('change', event => {
  BATH_BLOCK.classList.toggle('show')
})



CALC.addEventListener('change', event => {

  let type = TYPE.value == TYPE[0].value ? Number(6000*SQUARE.value) : 
            TYPE.value == TYPE[1].value ? Number(8500*SQUARE.value) : 
            alert('error');

  let electricoan = ELECTR.value == ELECTR[0].value ? Number(300*PERIMETER.value) :
                    ELECTR.value == ELECTR[1].value ? Number(600*PERIMETER.value) :
                    ELECTR.value == ELECTR[2].value ? Number(0) :
                    alert('error');

  let repairs = TYPE_REPAIRS.value == TYPE_REPAIRS[0].value ? Number(3000*SQUARE.value) :
                TYPE_REPAIRS.value == TYPE_REPAIRS[1].value ? Number(0) :
                TYPE_REPAIRS.value == TYPE_REPAIRS[2].value ? Number(1500*SQUARE.value) :
                alert('error');

  let celling = CELLING.value == CELLING[0].value ? Number(300*SQUARE.value) :
                CELLING.value == CELLING[1].value ? Number(400*SQUARE.value) :
                CELLING.value == CELLING[2].value ? Number(600*SQUARE.value) :
                CELLING.value == CELLING[3].value ? Number(0) :
                alert('error');

  let bath = BATH.value == BATH[0].value ? Number(0) :
            BATH.value == BATH[1].value ? Number(13000*BATH_SQUARE.value) :
            alert('error');
  
  let floor = FLOOR.value == FLOOR[0].value ? Number(0) :
              FLOOR.value == FLOOR[1].value ? Number(200*SQUARE.value) :
              alert('error');

  let doors = DOORS.value == DOORS[0].value ? Number(0) :
              DOORS.value == DOORS[1].value ? Number(8500*1) :
              DOORS.value == DOORS[2].value ? Number(8500*2) :
              DOORS.value == DOORS[3].value ? Number(8500*3) :
              DOORS.value == DOORS[4].value ? Number(8500*4) :
              DOORS.value == DOORS[5].value ? Number(8500*5) :
              DOORS.value == DOORS[6].value ? Number(8500*6) :
              DOORS.value == DOORS[7].value ? Number(8500*7) :
              alert('error');
  let total = type + electricoan + repairs + celling + bath + floor + doors

  let enter = ENTER__DOOR.checked ? Number(0) :
              ENTER__DOOR.checked == false ? ((Number(total)/100)*5) :
              alert('error');

  let total_sum = total + enter
  TOTAL_SUM.innerHTML = total_sum + ' руб.'
})

