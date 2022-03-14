import * as React from 'react';

import { HeadingProps } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';

export const FooterHeading = (props: HeadingProps) => (
  <Heading
    as="h4"
    color={'black'}
    fontSize="sm"
    fontWeight="normal"
    {...props}
  />
);
