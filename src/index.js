import React from 'react';
import ReactDOM from 'react-dom';
import { ToggleButton } from './components/ToggleButton';
import { Address } from './components/Address';

ReactDOM.render(
  <div>
  <Address street="321 Autumn Lane" city="Gatlinuburg" />
  <ToggleButton />
  </div>,
  document.getElementById('root')
)
