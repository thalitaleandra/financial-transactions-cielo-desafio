import { render, fireEvent } from '@testing-library/react';
import {DarkModeContext} from '../../../Context/darkModeContext';
import Navbar from '../index';

test('renders Navbar component', () => {
  const handleFilterDataMock = jest.fn();

  const { getByPlaceholderText, getByLabelText } = render(
    <Navbar disabled={false} handleFilterData={handleFilterDataMock} />
  );

  const searchInput = getByPlaceholderText('Insira Id da Transação...');
  const searchButton = getByLabelText('Ícone de busca');

  expect(searchInput).toBeTruthy();
  expect(searchButton).toBeTruthy();
});

test('clicking on DarkModeIcon toggles dark mode', () => {
    const dispatchMock = jest.fn();
    const { getByLabelText } = render(
        <DarkModeContext.Provider value={{ dispatch: dispatchMock, darkMode: true }}>
          <Navbar disabled={false} handleFilterData={() => {}} />
        </DarkModeContext.Provider>
      );
    const darkModeIcon = getByLabelText('Ícone de modo escuro');
    fireEvent.click(darkModeIcon);
    expect(dispatchMock).toHaveBeenCalled();
  });