import { isWebp } from './components/functions/webp.js'
import { verbs, nouns, when, question } from './utils/constants.js'
import Slot from './components/classes/Slot.js'


const arm = document.querySelector('.machine__arm')
const languageSelect = document.querySelector('.language__select')
const description = document.querySelector('.description')
const descriptionButton = document.querySelector('.description__button')
const circles = document.querySelectorAll('.machine__circle')
const slots = document.querySelectorAll('.slot__input')
const machineTitle = document.querySelector('.machine__title')
const slotVerbs = new Slot('.slot__input_verb', verbs)
const slotNoun = new Slot('.slot__input_noun', nouns)
const slotWhen = new Slot('.slot__input_when', when)
const slotQuestion = new Slot('.slot__input_question', question)
let timer = null
let lang = 'en'

function hideDescription() {
    description.classList.add('hide')
}

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
    hideDescription()
    slotVerbs.selectWord(lang)
    slotNoun.selectWord(lang)
    slotWhen.selectWord(lang)
    slotWhen.selectWord(lang)
    slotQuestion.selectWord(lang)
    setTimer()
})

languageSelect.addEventListener('input', () => {
    lang = languageSelect.value
    return lang
})

descriptionButton.addEventListener('click', () => {
    hideDescription()
})

isWebp()