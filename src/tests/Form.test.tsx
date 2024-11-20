import { render, screen, fireEvent } from '@testing-library/react';
import FormGenerator from '../components/Form/FormGenerator';
import { JsonSchema } from '../utils/schemaInterfaces';

const mockSchema: JsonSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
  },
  required: ['name'],
};

describe('FormGenerator Component', () => {
  test('renders form fields based on schema', () => {
    render(<FormGenerator schema={mockSchema} />);
    expect(screen.getByLabelText('name')).toBeInTheDocument();
    expect(screen.getByLabelText('age')).toBeInTheDocument();
  });

  test('shows error message for required fields', async () => {
    render(<FormGenerator schema={mockSchema} />);
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    expect(await screen.findByText('name is required')).toBeInTheDocument();
  });

  test('submits form data correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<FormGenerator schema={mockSchema} />);
    fireEvent.change(screen.getByLabelText('name'), { target: { value: 'John Doe' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'John Doe', age: '' });
    consoleSpy.mockRestore();
  });
});
