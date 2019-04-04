class CategoriesController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    init() {
        this._model.getBooks(books => {
            this._view.renderBooks(books);
        });

        this.changeCategory();
        this.byBook();
        this.removeFromBusket();
    }

    changeCategory() {
        this._view.listenChangeCategories(category => {
            this._model.changeCategory(category, books => {
                this._view.renderNewBooks(books);
            })
        })
    }

    byBook() {
        this._view.listenByBook(bookId => {
            this._model.getBookForBusket(bookId, data => {
                 this._view.addBooksInBusket(data)
            })
        })
    }

    removeFromBusket() {
        this._view.removeBusketBook(bookId => {
            this._model.removeFromBusket(bookId, data => {
                this._view.addBooksInBusket(data);
            })
        })
    }
}