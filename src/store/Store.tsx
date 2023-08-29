'use client';

import React, { createContext, useReducer } from 'react';
import { StoreState } from './types';

import reducer from './reducer';

const modalInitial = {
  isOpen: false,
  component: '',
  componentProps: {},
};

const initialState: StoreState = {
  modal: modalInitial,
  alerts: [],
};

export const Context = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default Store;
