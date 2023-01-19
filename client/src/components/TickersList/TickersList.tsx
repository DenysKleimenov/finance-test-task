import React from 'react';
import { TextField } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { convertTickerName, Ticker } from '../Ticker/Ticker';
import { actions as tickersActions } from '../../features/tickersList';
import './TickersList.css';
import { serverRequest } from '../../app/serverRequest';

export const TickersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tickers, query } = useAppSelector((state) => state.tickers);
  const onChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(tickersActions.setQuery(event.target.value));
  };

  const filteredTickers = tickers.filter((ticker) => {
    const tickerName = ticker.ticker.toLowerCase();
    const companyName = convertTickerName(ticker.ticker).toLowerCase();

    return (
      companyName.includes(query.toLowerCase())
      || tickerName.includes(query.toLowerCase())
    );
  });

  dispatch(serverRequest());

  return (
    <ul className="tickers">
      <TextField
        id="standard-basic"
        label="Enter ticker name"
        variant="standard"
        color="primary"
        margin="normal"
        value={query}
        onChange={onChange}
        data-cy="input"
      />
      {filteredTickers.map((ticker) => (
        <Ticker key={ticker.ticker} tickerData={ticker} />
      ))}
    </ul>
  );
};
