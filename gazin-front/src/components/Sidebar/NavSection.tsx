import { ReactNode } from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';

import { Logo } from '../Header/Logo';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  const splitTitle = title.split(' ');
  const Title = splitTitle[0];
  const Subtitle = splitTitle[1];
  return (
    <>
      <Stack direction={['row']} spacing="0px">
        <Box>
          <Logo />
        </Box>
        <Box>
          <Text fontWeight="light" mt="3" color="Gray.50" fontSize="md">
            {Title}
          </Text>
          <Text fontWeight="black" color="Gray.50" fontSize="md">
            {Subtitle}
          </Text>
        </Box>
      </Stack>
      <Stack>{children}</Stack>
    </>
  );
}
