import React from 'react';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
  });
});
