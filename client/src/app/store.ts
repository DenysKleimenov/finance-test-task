import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tickersListReducer from '../features/tickersList';

const store = configureStore({
  reducer: {
    tickers: tickersListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
