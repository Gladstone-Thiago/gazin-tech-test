import { ReactElement } from 'react';

import {
  MenuItem as ChakraMenuItem,
  Link as ChakraLink,
} from '@chakra-ui/react';

interface NavSectionProps {
  title: string;
  icon: ReactElement;
  href: string;
}

export function MenuItem({ title, icon, href }: NavSectionProps) {
  return (
    <ChakraLink display="flex" href={href}>
      <ChakraMenuItem
        id={title}
        name={title}
        href={href}
        borderColor="Gray.50"
        fontWeight="light"
        color="Gray.50"
        icon={icon}
      >
        {title}
      </ChakraMenuItem>
    </ChakraLink>
  );
}
