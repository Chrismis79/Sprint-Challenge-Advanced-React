import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToggleDark from './components/ToggleDark';
import {render} from '@testing-library/react';
import '@testing-library/dom';

test('renders App without crashing', () => {
  render(<App />);
});

test('It displays a hearder with the test World Cup', () => {
  const {getByText} = render(<App/>);
  getByText(/world cup/i);
});

test('It displays a button with the words dark mode', () => {
  const {getByText} = render(<App/>);
  getByText(/dark mode/i);
})

test ('Players rendering', () => {
  const things = [{
    name: "Alex Morgan",
    country: "United States",
    searches: 100,
    id: 0,
  }, {
    name: "Megan Rapinoe",
    country: "United States",
    searches: 99,
    id: 1
  }]
  const {getByText} = render(<ToggleDark data={things}/>)
  expect(getByText(/alex morgan/i)).toBeInTheDocument();
  expect(getByText(/megan rapinoe/i)).toBeInTheDocument();
})
