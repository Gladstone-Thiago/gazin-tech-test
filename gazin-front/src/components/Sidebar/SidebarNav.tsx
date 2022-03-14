import { useContext } from 'react';

import { SkeletonText, Box, Stack } from '@chakra-ui/react';
import MenuDevelopers from '˜/components/Views/Registers/Developers/config/Menu';
import MenuLevels from '˜/components/Views/Registers/Levels/config/Menu';

import { AuthContext } from '../../contexts/AuthContext';
import { translation } from '../../translation';
import MenuDashboard from '../Views/Dashboard/config/Menu';
import { NavSection } from './NavSection';

export function SidebarNav() {
  const { isLoading } = useContext(AuthContext);

  const control_room = translation('title_control_room');

  return (
    <Stack align="strech">
      <NavSection title={control_room}>
        {!isLoading ? (
          <>
            <MenuDashboard />
            <MenuDevelopers />
            <MenuLevels />
          </>
        ) : (
          <Box minWidth="220px">
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
        )}
      </NavSection>
    </Stack>
  );
}
