import Bookshelf     from '../OOP/BookShelf.mjs';
import { fakeAjax }  from './fakeajax.mjs';

let BOOK_API = "https://some.url/api";

function loadBooks(bookshelf) {

    fakeAjax(BOOK_API, function favoriteBooks (bookNames) {

        for (let bookName of bookNames) {
            bookshelf.addFavoriteBook(bookName);
        }

        bookshelf.printFavoriteBooks();
    });
}

let myFavoriteBooks = new Bookshelf();
loadBooks(myFavoriteBooks);
