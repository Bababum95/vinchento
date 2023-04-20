import { isWebp } from './components/functions/webp.js'
import { verbs, nouns, when, question } from './utils/constants.js'
import Slot from './components/classes/Slot.js'


const arm = document.querySelector('.machine__arm')
const circles = document.querySelectorAll('.machine__circle')
const slots = document.querySelectorAll('.slot__input')
const machineTitle = document.querySelector('.machine__title')
const slotVerbs = new Slot('.slot__input_verb', verbs)
const slotNoun = new Slot('.slot__input_noun', nouns)
const slotWhen = new Slot('.slot__input_when', when)
const slotQuestion = new Slot('.slot__input_question', question)
let timer = null

function setTimer() {
    timer? clearInterval(timer): null
    let seconds = 10
    timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            machineTitle.textContent = 'LOVE TESTER'
        } else {
            machineTitle.textContent = seconds
        }
        seconds = seconds - 1
    }, 1000)
}

arm.addEventListener('click', () => {
    arm.classList.add('clicked')
    setTimeout(function () { arm.classList.remove('clicked'); }, 500);
    circles.forEach((circle) => {
        circle.classList.remove('active')
        setTimeout(function () { circle.classList.add('active'); }, 0);

    })
    slots.forEach((slot) => {
        slot.classList.remove('active')
        setTimeout(function () { slot.classList.add('active') }, 0)
    })
    slotVerbs.selectWord('en')
    slotNoun.selectWord('en')
    slotWhen.selectWord('en')
    slotWhen.selectWord('en')
    slotQuestion.selectWord('en')
    setTimer()
})

isWebp()