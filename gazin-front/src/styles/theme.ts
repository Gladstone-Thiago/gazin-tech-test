import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    Primary: {
      50: '#004BF1',
      700: '#004BE9',
    },
    Secondary: {
      50: '#474747',
    },
    Font: {
      50: '#474747',
    },
    Yellow: {
      '300': '#F6E05E',
    },
    Red: {
      '400': '#F56565',
    },
    Green: {
      '50': '#73D19B',
      '200': '#19B65C',
      '400': '#48BB78',
      '500': '#19B400',
    },
    Gray: {
      '50': '#F7FAFC',
      '100': '#F9F9F9',
      '150': '#F0F0F0',
      '200': '#D7D7D7',
      '300': '#BCBCBC',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'Black',
      },
    },
  },
});
