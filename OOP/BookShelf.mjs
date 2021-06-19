export default class Bookshelf {

    constructor() {
        this.favoriteBooks = [];
    }

    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks() {
        console.log(`Favorite Books: ${ String(this.favoriteBooks.length) }`);

        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}
