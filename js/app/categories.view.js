
class CategoriesView {
    constructor() {
        this.selectors = {
            booksContainer: $('.books-content'),
            booksSaleContainer: '.book-sale',
            booksGenres: $('.genres__item'),
            busketBookContainer: $('.busket__books'),
            byBookBtn: '.by',
            busket: $('.busket'),
            busketRemoveBtn: '.busket__book-remove',
            busketMini: $('.busket-mini'),
            busketCount: $('.busket-mini__count'),
            totalPrice: $('.total-price__num'),
            busketMini: $('.busket-mini'),
            busketCloseBtn: $('.busket-close-btn'),
            confirmorderBtn: $('.confirm-order')
        }
        this.templates = {
            bookItem: function(book) {
                return `
                    <div class="book" data-id="${book.id}">
                    <div class="book-cover">
                        <img src="${book.src}" alt="${book.name}">
                        <div class="book-sale" data-sale ="${book.isSale}">
                            <span class="percents">${book.sale}%</span>
                            <span class="off">off</span>
                        </div>
                    </div>
                    <p class="book-name">${book.name}</p>
                    <span class="book-price">$${book.price}</span>
                    <button class="by">BY</button>
                    </div>
                `
            },

            busketItem: function(book, length) {
                return `
                        <tr data-id="${book.id}">
                            <th scope="row">${length}</th>
                            <td>${book.name}</td>
                            <td>$${book.price}</td>
                            <td><button class="busket__book-remove">Delete</button></td>
                        </tr>
                `
            }
        }
    }

    //methods
    renderBooks(books) {
        books.forEach(book => {
            this.selectors.booksContainer.append(this.templates.bookItem(book));
        });

        $(`${this.selectors.booksSaleContainer}[data-sale="false"]`).hide();
    }

    listenChangeCategories(cb) {
        this.selectors.booksGenres.on('click', function() {
            let categoryName = $(this).attr('data-genre');

            cb(categoryName);
        })
    }

    renderNewBooks(books) {
        this.selectors.booksContainer.empty();
        books.forEach(book => this.selectors.booksContainer.append(this.templates.bookItem(book)));

        $(`${this.selectors.booksSaleContainer}[data-sale="false"]`).hide();
    }

    listenByBook(cb) {
        this.selectors.booksContainer.on('click', this.selectors.byBookBtn, function() {
            let bookId = $(this).parent().attr('data-id');

            $(this).css('background', 'lightblue');
            cb(bookId);
        })
    }

    addBooksInBusket(data) {
        this.selectors.busketBookContainer.empty();

        let price = 0;

        let count = 0;

        data.forEach(book => {
            count++;
            
            this.selectors.busketBookContainer.append(this.templates.busketItem(book, count));
            price += +book.price;
        })

        this.selectors.busketCount.text(data.length);
        this.selectors.totalPrice.text(price);
        // this.selectors.busketMini.addClass('animBusket');
        // this.selectors.busketMini.delay(2000).removeClass('animBusket');
        
  
        
        this.selectors.busketMini.css('animation', 'addInBusket 1s running');

        this.selectors.busketMini.delay(2000).removeAttr('style');
    }

    removeBusketBook(cb) {
        this.selectors.busketBookContainer.on('click', this.selectors.busketRemoveBtn, function() {
            let id = +$(this).parents('tr').attr('data-id');
            console.log(id);
            cb(id)
        })
    }

    openBusket() {
        const self = this;
        this.selectors.busketMini.on('click', function() {
            self.selectors.busket.addClass('busket__show');
            $('body').addClass("body-curtain");
        })
    }

    closeBusket() {
        this.selectors.busketCloseBtn.on('click', () => {
            this.selectors.busket.removeClass('busket__show');
            $('body').removeClass("body-curtain");
        })
    }

    confirmOrder() {
        this.selectors.confirmorderBtn.on('click', () => {alert('Order was confirned!'); location.reload()})
    }
}

new CategoriesView().openBusket();
new CategoriesView().closeBusket();
new CategoriesView().confirmOrder();
