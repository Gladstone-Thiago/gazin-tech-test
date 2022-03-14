import * as React from 'react';

import { Text, TextProps } from '@chakra-ui/layout';

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" color="black" {...props}>
    &copy; {new Date().getFullYear()}, Inc. All rights reserved.
  </Text>
);
