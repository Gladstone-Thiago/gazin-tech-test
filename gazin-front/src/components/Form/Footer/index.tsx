import * as React from 'react';

import { Box, Stack, StackDivider } from '@chakra-ui/react';

import { Copyright } from './Copyright';
import { LinkGrid } from './LinkGrid';
import { SocialMediaLinks } from './SocialMediaLinks';

export default function Footer() {
  return (
    <Box
      as="footer"
      color="white"
      bg="orange.400"
      role="contentinfo"
      py="8"
      px={{ base: '4', md: '8' }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '10', lg: '28' }}
        >
          <Box flex="1"></Box>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '10', md: '20' }}
          >
            <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} flex="1" />
          </Stack>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  );
}
