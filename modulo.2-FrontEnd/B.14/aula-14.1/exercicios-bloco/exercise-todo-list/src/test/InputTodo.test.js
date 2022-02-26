import React from 'react';
import { screen, render } from '@testing-library/react';
import InputTodo from '../InputTodo';

describe('Testando a aplicação - testando botão', () => {
  render(<InputTodo />);
  const addButton = screen.getByRole('button', { name: /adicionar/i });
  test('Necessário um botão para adicionar a tarefa.', () => {
    expect(addButton).toBeInTheDocument();
  });
});
