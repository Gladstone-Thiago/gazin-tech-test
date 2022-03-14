import { ReactNode } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  HStack,
  Divider,
} from '@chakra-ui/react';

interface ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const Component = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}: ComponentProps) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent minW="50%" mt="5%" borderRadius="md">
        <ModalHeader bg="Gray.50">
          <HStack pt={6}>
            <Text fontWeight="light" color="Font.50" fontSize="2xl">
              {title}
            </Text>
            <Text fontWeight="black" color="Font.50" fontSize="2xl">
              {subtitle}
            </Text>
          </HStack>
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody pb={6} pt={10}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Component;
