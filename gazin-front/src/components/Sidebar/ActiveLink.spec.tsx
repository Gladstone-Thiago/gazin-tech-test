import { render } from '@testing-library/react';

import { ActiveLink } from './ActiveLink';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('ActiveLink component', () => {
  it('active link renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href="/">
        <a>Login</a>
      </ActiveLink>
    );

    expect(getByText('Login')).toBeInTheDocument();
  });

  it('active link is receiving active class', () => {
    const { getByText } = render(
      <ActiveLink href="/">
        <a>Login</a>
      </ActiveLink>
    );

    expect(getByText('Login')).toHaveStyle('color: "blue.800"');
  });
});
