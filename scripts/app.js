import { isWebp } from './components/functions/webp.js'
import { verbs, nouns, when, question } from './utils/constants.js'
import Slot from './components/classes/Slot.js'


const arm = document.querySelector('.machine__arm')
const doh = document.querySelector('.doh')
const songMachine = document.querySelector('.song-machine')
const languageSelect = document.querySelector('.language__select')
const description = document.querySelector('.description')
const descriptionTitle = document.querySelector('.description__title')
const descriptionText = document.querySelector('.description__text')
const askHomer = document.querySelector('.ask-homer')
const descriptionButton = document.querySelector('.description__button')
const descriptionWords = document.querySelector('.description__words')
const circles = document.querySelectorAll('.machine__circle')
const slots = document.querySelectorAll('.slot__input')
const machineTitle = document.querySelector('.machine__title')
const slotVerbs = new Slot('.slot__input_verb', verbs, '.word-translate_1')
const slotNoun = new Slot('.slot__input_noun', nouns, '.word-translate_2')
const slotWhen = new Slot('.slot__input_when', when, '.word-translate_3')
const slotQuestion = new Slot('.slot__input_question', question,'.word-translate_4')
let timer = null
let lang = 'en';
let translate = 'ru';

function hideDescription() {
    description.classList.add('hide')
}

function setTimer() {
    timer? clearInterval(timer): null
    let seconds = 10
    timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            doh.play()
            machineTitle.textContent = 'LOVE TESTER'
        } else {
            machineTitle.textContent = seconds
        }
        seconds = seconds - 1
    }, 1000)
}

arm.addEventListener('click', () => {
    arm.classList.add('clicked')
    songMachine.play()
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
    askHomer.classList.remove('none')
})

languageSelect.addEventListener('input', () => {
    lang = languageSelect.value
    translate = lang === 'en'? 'ru': 'en';
})


descriptionButton.addEventListener('click', hideDescription)
askHomer.addEventListener('click', () => {
    description.classList.remove('hide')
    descriptionWords.classList.remove('none')
    descriptionTitle.textContent = 'What do you want?'
    descriptionText.textContent = 'Say the translation:'
})

isWebp()