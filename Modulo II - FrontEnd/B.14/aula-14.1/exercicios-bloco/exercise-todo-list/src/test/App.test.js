import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a aplicação - testando input', () => {
  render(<App />);
  const inputTask = screen.getByLabelText('Tarefa:');
  const labelTask = screen.getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Testando a aplicação - testando botão', () => {
  render(<App />);
  const inputText = screen.getByRole('textbox', { name: /tarefa:/i });
  const addButton = screen.getAllByRole('button', { name: /adicionar/i });
  test('Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.', () => {
    userEvent.type(inputText, 'Hello World');
    userEvent.click(addButton[0]);
    const listItem = screen.queryByText(/hello world/i);
    expect(listItem).toBeInTheDocument();
  });
});
