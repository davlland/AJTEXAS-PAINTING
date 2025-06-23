// src/components/Header.test.jsx
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../Header';

// Utilidad para renderizar con router
function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

test('abre y cierra el menú móvil al hacer clic en el botón hamburguesa', async () => {
  // Simula modo móvil
  window.matchMedia = vi.fn().mockImplementation(query => ({
    matches: true,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));

  renderWithRouter(<Header />);
  const menuButton = screen.getByLabelText(/abrir menú/i);
  fireEvent.click(menuButton);

  const galeriaLink = screen.getByText(/galería/i);
  expect(galeriaLink).toBeVisible();

  // Cierra el menú haciendo clic en el fondo oscuro
  fireEvent.click(document.querySelector('.fixed.inset-0'));

  // Espera a que el menú tenga la clase de oculto (translate-x-full)
  await waitFor(() => {
    const navMenu = document.querySelector('nav.fixed');
    expect(navMenu).toHaveClass('translate-x-full');
  });
});

test('muestra y oculta el submenú de Servicios en escritorio', async () => {
  // Simula modo escritorio
  window.matchMedia = vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));

  renderWithRouter(<Header />);
  const serviciosButton = screen.getByRole('button', { name: /servicios/i });
  fireEvent.click(serviciosButton);

  const paintTexturingLink = screen.getByText(/paint & texturing/i);
  expect(paintTexturingLink).toBeVisible();

  fireEvent.click(serviciosButton);

  // Espera a que el submenú tenga la clase de oculto (opacity-0)
  await waitFor(() => {
    const submenu = paintTexturingLink.parentElement.parentElement;
    expect(submenu).toHaveClass('opacity-0');
  });
});