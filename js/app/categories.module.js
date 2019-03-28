class CategoriesModule {
    constructor() {
        this._model = new CategoriesModel();
        this._view = new CategoriesView();
        this._controler = new CategoriesController(this._model, this._view);
    }

    init() {
        this._controler.init();
    }
}

new CategoriesModule().init();