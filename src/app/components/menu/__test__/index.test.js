import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from '../index';

describe('Menu Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Init render', () => {
        test('should render without errors', () => {
            render(<Menu />);
            
            const menuButton = screen.getByLabelText('Menu');
            expect(menuButton).toBeInTheDocument();
        });

        test('should render title', () => {
            render(<Menu />);
            
            const title = screen.getByText('Drama News');
            expect(title).toBeInTheDocument();
            expect(title).toHaveClass('text-2xl', 'font-bold');
        });
    });

    describe('open and close menu', () => {
        test('should open menu', async () => {
            render(<Menu />);
            
            const menuButton = screen.getByLabelText('Menu');
            fireEvent.click(menuButton);
            
            await waitFor(() => {
                const menuPanel = screen.getByText('Drama News').parentElement.parentElement;
                expect(menuPanel).toHaveClass('translate-x-0');
            });
        });

        test('should close menu', async () => {
            render(<Menu />);
            
            const menuButton = screen.getByLabelText('Menu');
            fireEvent.click(menuButton);
            
            await waitFor(() => {
                const menuPanel = screen.getByText('Drama News').parentElement.parentElement;
                expect(menuPanel).toHaveClass('translate-x-0');
            });
            
            const inicioLink = screen.getByText('Início');
            fireEvent.click(inicioLink);
            
            await waitFor(() => {
                const menuPanel = screen.getByText('Drama News').parentElement.parentElement;
                expect(menuPanel).toHaveClass('-translate-x-full');
            });
        });
    });
});
