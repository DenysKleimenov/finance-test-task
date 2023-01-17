/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ticker } from '../types/Ticker';

export interface TickersState {
  tickers: Ticker[]
}

const initialState: TickersState = {
  tickers: [],
};

export const tickersListSlice = createSlice({
  name: 'tickersList',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Ticker[]>) => {
      state.tickers = action.payload;
    },
  },
});

export default tickersListSlice.reducer;
export const { actions } = tickersListSlice;
