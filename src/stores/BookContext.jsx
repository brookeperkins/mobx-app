import React, { createContext, useContext } from 'react';
import { createBookStore } from './BookStore';
import { useLocalObservable } from 'mobx-react';

const BookContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const BookProvider = ({ children }) => {
  const bookStore = useLocalObservable(() => createBookStore());

  return (
    <BookContext.Provider value={bookStore}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookStore = () => useContext(BookContext);
