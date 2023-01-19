/* eslint-disable camelcase */
import React from 'react';
import cn from 'classnames';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { usePrevious } from '../../app/hooks';
import { Ticker as TickerType } from '../../types/Ticker';
import './Ticker.css';

type Props = {
  tickerData: TickerType;
};

const convertTickerName = (tickerName: string) => {
  switch (tickerName) {
    case 'AAPL':
      return 'Apple';
    case 'GOOGL':
      return 'Google';
    case 'MSFT':
      return 'Microsoft';
    case 'AMZN':
      return 'Amazon';
    case 'FB':
      return 'Facebook';
    case 'TSLA':
      return 'Tesla';
    default:
      return tickerName;
  }
};

export const Ticker: React.FC<Props> = ({ tickerData }) => {
  const {
    ticker, price, change, change_percent,
  } = tickerData;

  const companyName = convertTickerName(ticker);
  const previousPrice = usePrevious(price);
  const currentPriceIsGreater = previousPrice && price > previousPrice;
  const currentPriceIsLess = previousPrice && price < previousPrice;

  return (
    <div className="ticker">
      <span className="ticker__name">{ticker}</span>
      <span className="company-name">{companyName}</span>
      <span className="ticker__price">{`$${price}`}</span>
      <span
        className={cn({
          'positive-change': currentPriceIsGreater,
          'negative-change': currentPriceIsLess,
        })}
      >
        {`$${change}`}
      </span>
      <span
        className={cn('change-percent', {
          'positive-change': currentPriceIsGreater,
          'negative-change': currentPriceIsLess,
        })}
      >
        {currentPriceIsGreater && <ArrowUpwardIcon />}
        {currentPriceIsLess && <ArrowDownwardIcon />}
        {`${change_percent}%`}
      </span>
    </div>
  );
};
