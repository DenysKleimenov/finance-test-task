/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ticker } from '../types/Ticker';

export interface TickersState {
  tickers: Ticker[];
  query: string,
}

const initialState: TickersState = {
  tickers: [],
  query: '',
};

export const tickersListSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    set: (state, action: PayloadAction<Ticker[]>) => {
      state.tickers = action.payload;
    },
  },
});

export default tickersListSlice.reducer;
export const { actions } = tickersListSlice;
