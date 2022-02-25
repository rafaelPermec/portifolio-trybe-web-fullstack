import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText(/email válido/i);
  expect(isValid).toBeInTheDocument();
  expect(isValid.style.backgroundColor).toBe('green');
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
  expect(isValid.style.backgroundColor).toBe('red');
});

test('Não exibir a mensagem caso o email ainda não tenha sido enviado.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />)
  const isValid = screen.queryByRole('heading', { level: 3, name: 'Email Válido'} );
  expect(isValid).not.toBeInTheDocument();
});