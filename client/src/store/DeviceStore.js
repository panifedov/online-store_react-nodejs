import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'холодильник'},
            {id:2, name: 'dqwd'}
        ] 
        this._brands = [
            {id:1, name: 'gfd'},
            {id:2, name: 'dqwvfdsxcvgfdcvfrd'}
        ]
         
        this._devices = [
            {id:1, name: 'холодильник', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:2, name: 'dqwd', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:3, name: 'хол12r42одильник', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:4, name: 'vlvfpewl1  ', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}