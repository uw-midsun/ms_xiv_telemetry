import React from 'react';
import ReactDOM from 'react-dom';
import BatteryCell from './BatteryCell';

test('renders Battery Cell', () => {
  const div = document.createElement("div");
  ReactDOM.render(<BatteryCell cellNum={0} voltage={0} temperature={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
