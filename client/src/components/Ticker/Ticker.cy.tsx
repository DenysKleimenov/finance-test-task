import { Provider } from 'react-redux';
import { mount } from 'cypress/react';
import { Ticker as TickerData } from '../../types/Ticker';
import { convertTickerName, Ticker } from './Ticker';
import { store } from '../../app/store';

const testProps: TickerData = {
  ticker: 'MSFT',
  exchange: 'NASDAQ',
  price: 100,
  change: 25,
  change_percent: 0.34,
  dividend: 0.15,
  yield: 12,
  last_trade_time: new Date(),
};

Cypress.Commands.add('mount', (component, options = {}) => {
  const { ...mountOptions } = options;

  const wrapped = <Provider store={store}>{component}</Provider>;

  return mount(wrapped, mountOptions);
});

describe('<Ticker />', () => {
  it('should render', () => {
    cy.mount(<Ticker tickerData={testProps} />);
  });

  it('should pass props correctly', () => {
    cy.mount(<Ticker tickerData={testProps} />);
    cy.get('.ticker__name').should('have.text', testProps.ticker);
    cy.get('.company-name').should(
      'have.text',
      convertTickerName(testProps.ticker),
    );
    cy.get('[data-cy=change]').should('have.text', `$${testProps.change}`);
    cy.get('.ticker__price').should('have.text', `$${testProps.price}`);
    cy.get('.change-percent').should(
      'have.text',
      `${testProps.change_percent}%`,
    );
  });
});
