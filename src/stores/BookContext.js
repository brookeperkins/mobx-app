import React, { useContext } from 'react';
import { createBookStore } from './bookStore';
import { useLocalObservable } from 'mobx-react';
/* eslint-disable react/prop-types */

const BookContext = ({ children }) => {
  const bookStore = useLocalObservable(() => createBookStore());

  return (
    <BookContext.Provider value={bookStore}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookStore = useContext(BookContext);
