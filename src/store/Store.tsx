'use client';

import React, { createContext, useReducer } from 'react';
import { ReducerAction, StoreState, modalInitial } from './types';

import reducer from './reducer';

const initialState: StoreState = {
  modal: modalInitial,
  alerts: [],
};

export const Context = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<ReducerAction>;
}>({ state: initialState, dispatch: () => {} });

function Store({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default Store;
