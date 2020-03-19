import React from 'react';
import ReactDOM from 'react-dom';
import SolarCell from './SolarCell';

test('renders Solar Cell', () => {
  const div = document.createElement("div");
  ReactDOM.render(<SolarCell cellNum={0} voltage={0} temperature={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
