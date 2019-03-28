
class CategoriesView {
    constructor() {
        this.selectors = {
            booksContainer: $('.books-content'),
            booksSaleContainer: '.book-sale',
            booksGenres: $('.genres__item')
        }
        this.templates = {
            bookItem: function(book) {
                return `
                    <div class="book">
                    <div class="book-cover">
                        <img src="${book.src}" alt="${book.name}">
                        <div class="book-sale" data-sale ="${book.isSale}">
                            <span class="percents">${book.sale}%</span>
                            <span class="off">off</span>
                        </div>
                    </div>
                    <p class="book-name">${book.name}</p>
                    <span class="book-price">${book.price}</span>
                    </div>
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
}