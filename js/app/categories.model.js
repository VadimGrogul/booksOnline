class CategoriesModel {
    constructor() {
        this.data = [
            {
                name: 'The Hare With Amber Eyes',
                price: '$40',
                src: './img/1.jpg',
                isSale: true,
                sale: 30,
                genre: 'Science fiction'
            },
            {
                name: 'Name Namevich',
                price: '$50',
                src: './img/2.jpg',
                isSale: false,
                sale: 0,
                genre: 'Fantasy'
            },
            {
                name: 'Can love Happen Twice',
                price: '$49',
                src: './img/3.jpg',
                isSale: true,
                sale: 30,
                genre: 'Mystery'
            },
            {
                name: 'The immortals of Meluha',
                price: '$150',
                src: './img/4.jpg',
                isSale: false,
                sale: 0,
                genre: 'Romance'
            },
            {
                name: 'Lifeis What You Make It',
                price: '$65',
                src: './img/5.jpg',
                isSale: false,
                sale: 0,
                genre: 'Romance'
            },
            {
                name: 'Marathon BABA',
                price: '$50',
                src: './img/6.jpg',
                isSale: false,
                sale: 0,
                genre: 'Mystery'
            },
            {
                name: 'Grisham',
                price: '$150',
                src: './img/7.jpg',
                isSale: false,
                sale: 0,
                genre: 'Science fiction'
            },
            {
                name: 'The long Dark Tea Time Of The Soul',
                price: '$59',
                src: './img/8.jpg',
                isSale: true,
                sale: 30,
                genre: 'Fantasy'
            },
            {
                name: 'The Armaggeddon RAG',
                price: '$50',
                src: './img/9.jpg',
                isSale: false,
                sale: 0,
                genre: 'Science fiction'
            },
            {
                name: 'A Walk Across the Sun',
                price: '$70',
                src: './img/10.jpg',
                isSale: false,
                sale: 0,
                genre: 'Mystery'
            },
            {
                name: 'The Sins of The Futher',
                price: '$30',
                src: './img/11.jpg',
                isSale: false,
                sale: 0,
                genre: 'Science fiction'
            },
            {
                name: 'The Magic',
                price: '$150',
                src: './img/12.jpg',
                isSale: false,
                sale: 0,
                genre: 'Fantasy'
            },
            {
                name: 'Crossroads',
                price: '$50',
                src: './img/13.jpg',
                isSale: false,
                sale: 0,
                genre: 'Mystery'
            },
            {
                name: 'Grisham',
                price: '$5',
                src: './img/14.jpg',
                isSale: true,
                sale: 30,
                genre: 'Romance'
            },
            {
                name: 'I Never it was You',
                price: '$150',
                src: './img/15.jpg',
                isSale: false,
                sale: 0,
                genre: 'Mystery'
            }
        ]
    }

    //methods
    getBooks(cb) {
        cb(this.data);
    }

    changeCategory(genre, cb) {
        if(genre == 'All') {
            cb(this.data);
        } else {
            let newData = this.data.filter(el => el.genre === genre);
            cb(newData)
        }
        
    }
}