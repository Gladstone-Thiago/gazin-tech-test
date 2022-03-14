import { SkeletonText, Box, FormLabel } from '@chakra-ui/react';

interface BaseProps {
  type: 'select' | 'page' | 'table';
  title: string;
}

export function Loading({ type, title }: BaseProps) {
  if (type === 'select') {
    return (
      <Box maxW="400px" boxShadow="lg" bg="white">
        <FormLabel color="Font.50" htmlFor={title}>
          {title}
        </FormLabel>
        <SkeletonText mt="1" noOfLines={1} spacing="1" />
      </Box>
    );
  }

  if (type === 'page') {
    return (
      <Box boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={20} spacing="4" />
      </Box>
    );
  }

  return (
    <Box boxShadow="lg" bg="white">
      <FormLabel color="Font.50" htmlFor={title}>
        {title}
      </FormLabel>
      <SkeletonText mt="4" noOfLines={10} spacing="4" />
    </Box>
  );
}
