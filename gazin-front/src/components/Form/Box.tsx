import { ReactNode } from 'react';

import {
  Box as ChakraBox,
  Stack,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface BoxProps extends ChakraInputProps {
  children: ReactNode;
}

export function Box({ children, ...rest }: BoxProps) {
  return (
    <ChakraBox minW={{ base: '100%', md: '100%' }}>
      <Stack
        spacing={4}
        borderRadius={8}
        borderWidth={1}
        p="1rem"
        borderColor="Gray.200"
        backgroundColor="Gray.100"
        shadow="xs"
        {...rest}
      >
        {children}
      </Stack>
    </ChakraBox>
  );
}
