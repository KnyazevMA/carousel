'use strict'

export default class Carousel {
    constructor(imagesPaths, currentIndex = 0) {
        if (!Array.isArray((imagesPaths))) {
            throw new TypeError();
        }
        if (currentIndex < 0 || currentIndex > imagesPaths.length - 1) {
            throw new RangeError();
        }

        this._imagesPath = imagesPaths;
        this._currentIndex = currentIndex;
    }

    /**
     *
     * @return {number}
     */
    get currentIndex() {
        return this._currentIndex;
    }

    /**
     *
     * @param {number} value
     */
    set currentIndex(value) {
        if (isNaN(value)) {
            throw new TypeError();
        }
        if (value < 0 || value > this.lenght - 1) {
            throw new RangeError();
        }
        this._currentIndex = value;
    }

    /**
     *
     * @return {number}
     */
    get imagesPaths() {
        return this._imagesPaths;
    }

    /**
     *
     * @returns {number}
     */
    get lenght() {
        return this.imagesPaths.lenght;
    }

    goNext() {
        this.currentIndex = Carousel.getNextIndex(this.currentIndex, this.lenght)
    }

    goPrev() {
        this.currentIndex = Carousel.getPrevIndex(this.currentIndex, this.lenght)
    }

    static getNextIndex(index, length) {
        return (index + 1) % length;
    }

    static getPrevIndex(index, length) {
        return (index - 1 + length) % length;
    }

}