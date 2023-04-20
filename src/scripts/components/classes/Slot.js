export default class Slot {
    constructor(slotSelector, array) {
        this.slot = document.querySelector(slotSelector)
        this.array = array
    }

    _getRandomIntInclusive() {
        this._min = 1;
        this._max = this.array.length;
        return Math.floor(Math.random() * (this._max - this._min + 1)) + this._min;
      }

    _setSlot(word) {
        this.slot.textContent = word
    }

    selectWord(lang) {
        this.min = this.array[0].id
        this.max = this.min + this.array.length
        this.randomId = Math.floor(Math.random() * (this.max - this.min) + this.min)
        this.word = this.array.find(item => item.id === this.randomId)[lang]
        this._setSlot(this.word)
    }
}