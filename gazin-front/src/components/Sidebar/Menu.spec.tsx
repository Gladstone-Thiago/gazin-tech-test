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

describe('Menu component', () => {
  it('menu renders correctly', () => {
    const { getByText } = render(
      <Menu title="Atividades" leftIcon={<MdCheck />}>
        <MenuItem title="Home" icon={<MdCheck />} href="/" />
      </Menu>
    );

    expect(getByText('Atividades')).toBeInTheDocument();
  });

  it('menu is receiving active', () => {
    const { getByText } = render(
      <Menu title="Atividades" leftIcon={<MdCheck />}>
        <MenuItem title="Home" icon={<MdCheck />} href="/" />
      </Menu>
    );

    expect(getByText('Atividades')).toHaveStyle('color: "blue.800"');
  });
});
