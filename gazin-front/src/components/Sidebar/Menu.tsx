import { ReactNode, ReactElement } from 'react';

import { Menu as ChakraMenu, MenuButton, Button } from '@chakra-ui/react';

interface NavSectionProps {
  title: string;
  children: ReactNode;
  leftIcon: ReactElement;
}

export function Menu({ title, children, leftIcon, ...rest }: NavSectionProps) {
  return (
    <ChakraMenu id={title}>
      <MenuButton
        id={title}
        name={title}
        borderColor="Blue.50"
        fontWeight="light"
        color="blue.800"
        variant="link"
        as={Button}
        leftIcon={leftIcon}
        pt="3"
        pb="4"
        {...rest}
      >
        {title}
      </MenuButton>
      {children}
    </ChakraMenu>
  );
}
