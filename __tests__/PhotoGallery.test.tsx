

import { render, screen } from '@testing-library/react';
import PhotoGallery from '../components/PhotoGallery';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';

// Mock the useRouter hook
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('PhotoGallery', () => {
    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            query: { hotelId: '123' }, // Mock hotelId for testing
        });
    });

    test('renders loading state initially', () => {
        render(<PhotoGallery />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    // Additional tests can be added here for other functionalities
});