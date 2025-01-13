import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', () => {
  it('should render the error message correctly', () => {
    const { getByText } = render(<ErrorMessage message="An error occurred" />);
    
    // Check if the error message is rendered
    expect(getByText('An error occurred')).toBeTruthy();
  });

  it('should render with correct styling', () => {
    const { getByText } = render(<ErrorMessage message="Test error" />);
    
    const errorText = getByText('Test error');
    
    // Check if the text has the correct style
    expect(errorText.props.style).toMatchObject({
      color: 'red',
      fontSize: 16,
    });
  });
});
