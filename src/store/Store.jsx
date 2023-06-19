import React, { createContext, useReducer } from 'react';

import reducer from './reducer'

const modalInitial = {
  isOpen: false,
  component: '',
  componentProps: {},
};

const initialState = {
  modal: modalInitial,
}

export const Context = createContext(initialState);

function Store({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]} >
      {children}
    </Context.Provider>
  )
}

export default Store;
