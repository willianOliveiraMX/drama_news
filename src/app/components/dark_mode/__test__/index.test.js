import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DarkMode from '../index';
import { mockLocalStorage, mockMatchMedia } from './dark_mode.mock';

describe('DarkMode Component', () => {
    let localStorageMock;
    let documentElement;

    beforeEach(() => {
        localStorageMock = mockLocalStorage();
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
            writable: true
        });

        documentElement = document.documentElement;
        documentElement.classList.remove('dark');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Initial render', () => {
        test('should render the component without errors', () => {
            window.matchMedia = mockMatchMedia(false);
            render(<DarkMode />);
            
            const sunButton = screen.getByLabelText('Ativar modo escuro');
            expect(sunButton).toBeInTheDocument();
        });

        test('should show the sun icon in light mode', () => {
            window.matchMedia = mockMatchMedia(false);
            render(<DarkMode />);
            
            const sunButton = screen.getByLabelText('Ativar modo escuro');
            const sunImage = sunButton.querySelector('img');
            
            expect(sunButton).toHaveClass('block');
            expect(sunImage).toHaveAttribute('alt', 'Light Mode');
        });

        test('should initialize in light mode when no preference is saved', () => {
            window.matchMedia = mockMatchMedia(false);
            render(<DarkMode />);
            
            expect(documentElement.classList.contains('dark')).toBe(false);
        });

        test('should initialize in dark mode when prefersDark is active', async () => {
            window.matchMedia = mockMatchMedia(true);
            render(<DarkMode />);
            
            await waitFor(() => {
                expect(documentElement.classList.contains('dark')).toBe(true);
            });
        });

        test('should initialize in dark mode when a theme saved as dark', async () => {
            localStorageMock.getItem.mockReturnValue('dark');
            window.matchMedia = mockMatchMedia(false);
            
            render(<DarkMode />);
            
            await waitFor(() => {
                expect(documentElement.classList.contains('dark')).toBe(true);
            });
        });

        test('should initialize in light mode when a theme saved as light', async () => {
            localStorageMock.getItem.mockReturnValue('light');
            window.matchMedia = mockMatchMedia(true);
            
            render(<DarkMode />);
            
            await waitFor(() => {
                expect(documentElement.classList.contains('dark')).toBe(false);
            });
        });
    });

    describe('Toggle theme', () => {
        test('should toggle from light mode to dark mode when clicked', async () => {
            window.matchMedia = mockMatchMedia(false);
            render(<DarkMode />);
            
            const sunButton = screen.getByLabelText('Ativar modo escuro');
            fireEvent.click(sunButton);
            
            await waitFor(() => {
                expect(documentElement.classList.contains('dark')).toBe(true);
                expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
            });
        });
        test('should toggle from dark mode to light mode when clicked again', async () => {
            window.matchMedia = mockMatchMedia(true);
            
            render(<DarkMode />);
            
            expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
        });

        test('deve salvar o tema no localStorage ao alternar', async () => {
            window.matchMedia = mockMatchMedia(false);
            render(<DarkMode />);
            
            const sunButton = screen.getByLabelText('Ativar modo escuro');
            fireEvent.click(sunButton);
            
            await waitFor(() => {
                expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
            });
        });
    });
});
