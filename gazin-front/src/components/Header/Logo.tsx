import { Image, Link } from '@chakra-ui/react';

import { url } from '../Views/Dashboard/config/url';
export function Logo() {
  return (
    <Link href={url}>
      <Image src="/logo.jpeg" w={94} h={101} ml={10} />
    </Link>
  );
}
