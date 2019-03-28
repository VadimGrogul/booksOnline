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
    }

    changeCategory() {
        this._view.listenChangeCategories(category => {
            this._model.changeCategory(category, books => {
                this._view.renderNewBooks(books);
            })
        })
    }
}