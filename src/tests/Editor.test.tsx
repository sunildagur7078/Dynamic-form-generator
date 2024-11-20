import { render, screen, fireEvent } from '@testing-library/react';
import JsonEditor from '../components/Editor/JsonEditor';

describe('JsonEditor Component', () => {
  test('renders the editor correctly', () => {
    render(<JsonEditor onChange={jest.fn()} error={null} />);
    const editor = screen.getByRole('textbox');
    expect(editor).toBeInTheDocument();
  });

  test('displays error message when invalid JSON is entered', () => {
    render(<JsonEditor onChange={jest.fn()} error="Invalid JSON" />);
    const errorMessage = screen.getByText('Invalid JSON');
    expect(errorMessage).toBeInTheDocument();
  });
});
