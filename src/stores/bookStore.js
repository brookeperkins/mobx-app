import { nanoid } from 'nanoid';

export const createBookStore = () => {
  return {
    books: [],
    addBook(bookTitle) {
      this.books.push({
        bookTitle,
        id: nanoid(),
      });
    },
    removeBooks(id) {
      this.books = this.books.filter((books) => books.id !== id);
    },
  };
};
