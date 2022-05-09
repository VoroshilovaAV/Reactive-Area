import { State } from './../types/types';
import { configureStore } from '@reduxjs/toolkit';
import { boardsReducer } from './boardsSlice';

export const store = configureStore<State>({
  reducer: {
    boardsState: boardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
