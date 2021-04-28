import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UnitSwitch from '../UnitSwitch';

test('Switch unit when radio button clicked', () => {
  const unitChange = jest.fn();
  const { getByTestId } = render(<UnitSwitch unit="F" handleUnitChange={unitChange} />);
  const radioBtn = getByTestId('switch-c');

  fireEvent.click(radioBtn);

  expect(unitChange).toHaveBeenCalled();
});
