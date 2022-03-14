import React from 'react';
import { BsBell, BsCircleFill } from 'react-icons/bs';

import {
  Flex,
  Box,
  Wrap,
  WrapItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  Icon,
} from '@chakra-ui/react';

export function Notification() {
  const initialFocusRef = React.useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <Flex align="flex-end" ml="auto">
        <Wrap>
          <WrapItem>
            <PopoverTrigger>
              <Box ml="3">
                <Icon as={BsBell} w={6} h={5} />
                <Icon
                  mt="-4"
                  ml="-2.5"
                  as={BsCircleFill}
                  w={4}
                  h={4}
                  color="red.500"
                  borderColor="red.100"
                  borderWidth={2}
                  borderRadius="full"
                />
              </Box>
            </PopoverTrigger>
          </WrapItem>
        </Wrap>
      </Flex>
      <PopoverContent color="black" borderColor="black">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverFooter
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
          mt="30px"
        ></PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
