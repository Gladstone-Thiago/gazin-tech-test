import { Heading as ChakraHeading } from '@chakra-ui/react';

interface BaseProps {
  text: string;
}

export function Heading({ text }: BaseProps) {
  return (
    <ChakraHeading size="xl" pl="2" pb="2" color="Gray.900">
      {text}
    </ChakraHeading>
  );
}
