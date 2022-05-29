import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

export const emailTestValidate = async (input, typeText, errorText) => {
  input.value = '';
  await userEvent.type(input, typeText);
  expect(screen.getByText(errorText)).toBeInTheDocument();
};
