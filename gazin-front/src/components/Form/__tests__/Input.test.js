import { render } from '@testing-library/react';

import { Input } from '../Input';

describe('Button', () => {
  it('Should input have a label "TEST"', async () => {
    const { getByText } = render(<Input label="TEST" />);
    const label = getByText('TEST');

    expect(label).toHaveTextContent('TEST');
  });
});
