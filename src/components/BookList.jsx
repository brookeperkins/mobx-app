import React from 'react';
import { useObserver } from 'mobx-react';
import { useBookStore } from '../stores/BookContext';

const BookList = () => {
  const bookStore = useBookStore();

  return useObserver(() => (
    <ul>
      {bookStore.books.map((book) => {
        console.log(book);
        return (
          <li
            key={book.id}
            onClick={() => bookStore.removeBook(book.id)}
          >
            {book.bookTitle}
          </li>
        );
      })}
    </ul>
  ));
};

export default BookList;
