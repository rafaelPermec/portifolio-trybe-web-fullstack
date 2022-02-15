import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Se a palavra Carregando... é renderizada na tela quando a aplicação é iniciada', () => {
  render(<App />);
  const linkElement = screen.getByText(/carregando.../i);
  expect(linkElement).toBeInTheDocument();
});

test('Verifica se Minecraft aparecerá na tela', async () => {
  render(<App />);
  const minecraftEl = await screen.findAllByText(/minecraft/i);
  expect(minecraftEl[0]).toBeInTheDocument();
})

test('após o carregamento da lista de jogos, clique no link Ver detalhes do segundo jogo da lista. E se a tela de detalhes exibe as informações Release Year e Sales, do jogo correspondente.', async () => {
  render(<App />);
  const detailsEl = await screen.findAllByText(/ver detalhes/i);
  expect(detailsEl[1]).toBeInTheDocument();
  const clickEl = detailsEl[1];
  userEvent.click(clickEl);
  const year = await screen.findByText(/release year/i);
  const sales = await screen.findByText(/sales/i);
  expect(year && sales).toBeInTheDocument();
})

