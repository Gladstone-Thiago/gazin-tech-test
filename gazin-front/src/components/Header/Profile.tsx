import React, { useContext, useState } from 'react';

import {
  Flex,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  ButtonGroup,
  Stack,
  SkeletonCircle,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { get } from 'lodash';
import { useRouter } from 'next/router';

import { AuthContext } from '../../contexts/AuthContext';
import { ToastContext } from '../../contexts/ToastContext';
import { translation } from '../../translation';
import { Button } from '../Form/Button';
import { signOut } from '../Views/Login/config/service';
import { Notification } from './Notification';
interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const router = useRouter();
  const { cangeStatus } = useContext(ToastContext);
  const { user, isLoading, setUser } = useContext(AuthContext);
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const initialFocusRef = React.useRef();

  const handleSignOut = async () => {
    SetIsSubmitting(true);
    setUser(null);
    await signOut(SetIsSubmitting, cangeStatus);
    SetIsSubmitting(false);
    router.push('/');
  };

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <Flex align="left" ml="auto" mr="14px">
        {isLoading ? null : (
          <Stack spacing={-1} ml="1" mr="5" mt="5">
            <Notification />
          </Stack>
        )}

        {showProfileData && (
          <>
            {isLoading && (
              <>
                <SkeletonText
                  noOfLines={2}
                  height="40px"
                  w="200px"
                  ml="5"
                  mt="20px"
                />
                <Skeleton height="40px" w="200px" ml="10px" mt="6px" />
              </>
            )}
          </>
        )}
        <Wrap>
          <WrapItem>
            {isLoading ? (
              <SkeletonCircle size="55" ml="10px" />
            ) : (
              <>
                <PopoverTrigger>
                  <Avatar
                    size="md"
                    name={get(user, 'name')}
                    src={get(user, 'avatar')}
                  />
                </PopoverTrigger>
                {/* <PopoverTrigger>
                  <Icon as={CBsChevronDown} mt="20px" w={6} h={5} />
                </PopoverTrigger> */}
              </>
            )}
          </WrapItem>
        </Wrap>
      </Flex>
      <PopoverContent borderColor="Secondary.50">
        <PopoverArrow />
        <PopoverCloseButton />

        <PopoverFooter
          borderColor="Secondary.50"
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
          mt="30px"
        >
          <Text fontSize="sm">{translation('logout')}</Text>
          <ButtonGroup size="sm">
            <Button
              isLoading={isSubmitting}
              text={translation('yes')}
              buttonTheme="primary_outline"
              onClick={() => handleSignOut()}
            />
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
