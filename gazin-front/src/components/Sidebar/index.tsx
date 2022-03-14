import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDraweSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <>
      {isDraweSidebar ? (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="Secondary.50" p="4">
              <DrawerCloseButton mt="4" />
              <DrawerBody>
                <SidebarNav />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      ) : (
        <Box>
          <VStack align="stretch" spacing={10}>
            <SidebarNav />
          </VStack>
        </Box>
      )}
    </>
  );
}
