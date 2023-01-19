import { mount } from 'cypress/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { TickersList } from './TickersList';

Cypress.Commands.add('mount', (component, options = {}) => {
  const { ...mountOptions } = options;

  const wrapped = <Provider store={store}>{component}</Provider>;

  return mount(wrapped, mountOptions);
});

describe('<TickersList />', () => {
  it('should render', () => {
    cy.mount(<TickersList />);
  });
});
