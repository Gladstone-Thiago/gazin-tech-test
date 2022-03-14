import { ReactNode } from 'react';

import {
  Flex,
  Box as ChakraBox,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Heading } from './Heading';
interface BaseProps {
  children: ReactNode;
  title?: string;
  permission?: string[];
}

export function Base({ children, title, permission }: BaseProps) {
  const { asPath, pathname } = useRouter();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  if (
    asPath === '/login/sign-in' ||
    asPath === '/login/recover-password' ||
    asPath === '/login/request-access' ||
    pathname === '/login/change-password'
  ) {
    return <>{children}</>;
  }

  return (
    <Flex bg="white" direction="column" h="100vh">
      <ChakraBox bgPosition="right" bgRepeat="no-repeat">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={2}
          bg="Secondary.50"
        >
          {isWideVersion && (
            <GridItem rowSpan={2} colSpan={1}>
              <Flex
                mt={{ base: '10', md: '10' }}
                pr={{ base: '4', md: '4' }}
                minW="28vh"
              >
                <Sidebar />
              </Flex>
            </GridItem>
          )}
          <GridItem bg="white" rowSpan={2} colSpan={isWideVersion ? 4 : 6}>
            <ChakraBox minH="100vh" m={{ base: 2, md: 4 }}>
              <Header />
              <>
                <Heading text={title} />
                {children}
              </>
            </ChakraBox>
          </GridItem>
          {!isWideVersion && (
            <Flex
              mt={{ base: '10', md: '8' }}
              pl={{ base: '12', md: '8' }}
              minW="10vh"
            >
              <Sidebar />
            </Flex>
          )}
        </Grid>
      </ChakraBox>
    </Flex>
  );
}
