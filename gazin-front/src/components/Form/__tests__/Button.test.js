import { render } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  it('Should button have a name "BUTTON"', async () => {
    const { getByText } = render(<Button text="BUTTON" />);
    const button = getByText('BUTTON');

    expect(button).toHaveTextContent('BUTTON');
  });
});
