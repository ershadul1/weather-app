import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Arrow from '../Arrows';

test('Left arrow triggers prev function', () => {
  const prevFunction = jest.fn();
  const nextFunction = jest.fn();
  const { getByTestId } = render(
    <Arrow
      prev={prevFunction}
      next={nextFunction}
      currentCard={1}
      totalCards={5}
    />,
  );
  const leftArrow = getByTestId('left-arrow');

  fireEvent.click(leftArrow);

  expect(prevFunction).toHaveBeenCalled();
});

test('Right arrow triggers next function', () => {
  const prevFunction = jest.fn();
  const nextFunction = jest.fn();
  const { getByTestId } = render(
    <Arrow
      prev={prevFunction}
      next={nextFunction}
      currentCard={0}
      totalCards={5}
    />,
  );
  const rightArrow = getByTestId('right-arrow');

  fireEvent.click(rightArrow);

  expect(nextFunction).toHaveBeenCalled();
});
