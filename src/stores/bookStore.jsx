import { nanoid } from 'nanoid';

export const createBookStore = () => {
  return ({
    books: [],
    addBook(bookTitle) {
      this.books.push({
        bookTitle,
        id: nanoid(),
      });
    },
    removeBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },
  });
};
