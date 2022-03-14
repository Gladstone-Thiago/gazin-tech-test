import { MdDelete } from 'react-icons/md';

import { Icon, Button } from '@chakra-ui/react';

interface ComponentProps {
  onClick: (information) => void;
  information: any;
}

export const DeleteComponent = ({ onClick, information }: ComponentProps) => {
  return (
    <Button
      id="edit"
      variant="solid"
      bg="gray.200"
      borderRadius="full"
      _hover={{ filter: 'contrast(110%)', transition: '0.7s' }}
      color="white"
      onClick={() => {
        onClick(information);
      }}
    >
      <Icon as={MdDelete} size="20px" color="black" />
    </Button>
  );
};
