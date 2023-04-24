export default class Slot {
    constructor(slotSelector, array, translateSelector) {
        this.slot = document.querySelector(slotSelector)
        this.translateButton = document.querySelector(translateSelector)
        this.array = array
        this.setEventListener()
    }

    setEventListener() {
        this.translateButton.addEventListener('click', () => {
            this.getTranslate()
        })
    }

    _setSlot(word) {
        this.slot.textContent = word
        this.translateButton.textContent = word
    }

    getTranslate() {
        this.langTranslate = this.lang === 'en'? 'ru': 'en';
        this.translate = this.array.find(item => item.id === this.randomId)[this.langTranslate]
        this.translateButton.textContent = this.translate
    }

    selectWord(lang) {
        this.lang = lang
        this.min = this.array[0].id
        this.max = this.min + this.array.length
        this.randomId = Math.floor(Math.random() * (this.max - this.min) + this.min)
        this.word = this.array.find(item => item.id === this.randomId)[this.lang]
        this._setSlot(this.word)
    }
}