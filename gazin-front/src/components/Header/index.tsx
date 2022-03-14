import { RiMenuLine } from 'react-icons/ri';

import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { translation } from '../../translation';
import { Profile } from './Profile';
// import { Logo } from './Logo';
// import { Language } from './Language'

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Head>
        <title>{translation('title_aplication')}</title>
        <link
          rel="shortcut icon"
          type="image/jpeg"
          sizes="32X32"
          href="/logo.jpeg"
        />
      </Head>
      <Flex
        bg="white"
        as="header"
        maxWidth={3200}
        h="20"
        mx="auto"
        px="6"
        alignItems="flex-start"
      >
        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="4"
          ></IconButton>
        )}
        <Profile showProfileData={isWideVersion} />
        {/* <Language showLanguageData={isWideVersion} /> */}
      </Flex>
    </>
  );
}
