import React, { useState } from 'react';
import { useObserver } from 'mobx-react';
import { useBookStore } from '../stores/BookContext';

const BookInput = () => {
  const [book, setBook] = useState('');
  const bookStore = useBookStore();

  const handleClick = () => {
    bookStore.addBook(book);
    setBook('');
    console.log(bookStore);
  };

  return useObserver(() => (
    <>
      <input
        value={book}
        onChange={(event) => setBook(event.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add Book</button>
    </>
  ));
};

export default BookInput;
