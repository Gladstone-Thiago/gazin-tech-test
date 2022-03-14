import { MdAdd } from 'react-icons/md';

import { Icon, Button } from '@chakra-ui/react';

interface ComponentProps {
  onClick: () => void;
}

export const AddComponent = ({ onClick }: ComponentProps) => {
  return (
    <Button
      id="edit"
      variant="solid"
      bg="transparent"
      borderRadius="full"
      _hover={{
        backgroundColor: 'gray.100',
      }}
      color="white"
      onClick={() => {
        onClick();
      }}
    >
      <Icon as={MdAdd} w={6} h={6} color="black" />
    </Button>
  );
};
