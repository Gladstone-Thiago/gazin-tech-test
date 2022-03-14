import { ReactElement } from 'react';

import { Button, Link as ChakraLink, Box } from '@chakra-ui/react';

import { ActiveLink } from './ActiveLink';

interface NavSectionProps {
  title: string;
  icon: ReactElement;
  href: string;
}

export function ButtonItem({ title, icon, href }: NavSectionProps) {
  return (
    <ActiveLink href={href} passHref as={href}>
      <Box
        h="40px"
        minW="full"
        alignItems="stretch"
        cursor="pointer"
        _hover={{
          bg: 'Primary.50',
          color: 'white',
        }}
      >
        <ChakraLink
          style={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
        >
          <Button
            id={title}
            name={title}
            fontWeight="bold"
            borderColor={'transparent'}
            color="Gray.50"
            leftIcon={icon}
            variant="link"
            mt="3"
            mb="1"
            ml="2"
          >
            {title}
          </Button>
        </ChakraLink>
      </Box>
    </ActiveLink>
  );
}
