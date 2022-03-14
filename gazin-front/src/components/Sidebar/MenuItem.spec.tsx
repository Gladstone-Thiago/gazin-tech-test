import { MdCheck } from 'react-icons/md';

import { render } from '@testing-library/react';

import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('MenuItem component', () => {
  it('menu item renders correctly', () => {
    const { getByText } = render(
      <Menu title="Atividades" leftIcon={<MdCheck />}>
        <MenuItem title="Home" icon={<MdCheck />} href="/" />
      </Menu>
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('MenuItem is receiving active', () => {
    const { getByText } = render(
      <Menu title="Atividades" leftIcon={<MdCheck />}>
        <MenuItem title="Home" icon={<MdCheck />} href="/" />
      </Menu>
    );

    expect(getByText('Home')).toHaveStyle('color: "blue.800"');
  });
});
