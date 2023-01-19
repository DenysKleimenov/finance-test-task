import React from 'react';
import { Header } from './components/Header';
import { TickersList } from './components/TickersList';

const App: React.FC = () => (
  <div>
    <Header />
    <TickersList />
  </div>
);

export default App;
