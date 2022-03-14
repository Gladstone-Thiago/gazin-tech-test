import { cloneElement, ReactElement } from 'react';

import { Box, HStack } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  sholdMatchExactHref?: boolean;
  title?: string;
}

export function ActiveLink({
  children,
  sholdMatchExactHref,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (sholdMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  } else if (
    !sholdMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  // backgroundColor: isActive ? 'Primary.50' : 'Secondary.50',
  return (
    <Link {...rest}>
      <HStack>
        <Box
          minH="40px"
          minW="6px"
          backgroundColor={isActive ? 'white' : 'Secondary.50'}
        />
        {cloneElement(children, {
          color: isActive ? 'Primary.50' : 'Gray.50',
        })}
      </HStack>
    </Link>
  );
}
