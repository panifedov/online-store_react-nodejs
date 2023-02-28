import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильник'},
            {id:2, name: 'Смартфон'},
            {id:3, name: 'Ноутбук'},
            {id:4, name: 'Телевизор'}
        ] 
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
            {id:3, name: 'Lenovo'},
            {id:4, name: 'Asus'},
        ]
        
        this._devices = [
            {id:1, name: 'Iphone 14 pro', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:2, name: 'Iphone 14 pro', price: 25000, rating: 2, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:3, name: 'Iphone 14 pro', price: 25000, rating: 4, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:4, name: 'Iphone 14 pro  ', price: 25000, rating: 45, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:1, name: 'Iphone 14 pro', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:2, name: 'Iphone 14 pro', price: 25000, rating: 2, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:3, name: 'Iphone 14 pro', price: 25000, rating: 4, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:4, name: 'Iphone 14 pro  ', price: 25000, rating: 45, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},            {id:1, name: 'Iphone 14 pro', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:2, name: 'Iphone 14 pro', price: 25000, rating: 2, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:3, name: 'Iphone 14 pro', price: 25000, rating: 4, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:4, name: 'Iphone 14 pro  ', price: 25000, rating: 45, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},            {id:1, name: 'Iphone 14 pro', price: 25000, rating: 5, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:2, name: 'Iphone 14 pro', price: 25000, rating: 2, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:3, name: 'Iphone 14 pro', price: 25000, rating: 4, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
            {id:4, name: 'Iphone 14 pro  ', price: 25000, rating: 45, img: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/ '},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
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