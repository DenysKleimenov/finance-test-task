import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Ticker as TickerData } from '../types/Ticker';
import { actions as tickersActions } from '../features/tickersList';
import { AppDispatch } from './store';

export const serverRequest = () => {
  const socket = io('http://localhost:4000');

  return (dispatch: AppDispatch) => {
    useEffect(() => {
      socket.emit('start');

      socket.on('ticker', (response: TickerData[]) => {
        const res = Array.isArray(response) ? response : [response];
        dispatch(tickersActions.set(res));
      });
    }, []);
  };
};
