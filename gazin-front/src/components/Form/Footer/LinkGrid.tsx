import * as React from 'react';

import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
} from '@chakra-ui/react';

import { FooterHeading } from './FooterHeading';

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box maxH="60px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack color={'gray.200'}>
        <Link>How it works</Link>
        <Link>Pricing</Link>
      </Stack>
    </Box>
    <Box maxH="60px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack color={'gray.200'}>
        <Link>Privacy</Link>
        <Link>Terms</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
