import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

import {
  Flex,
  Text,
  chakra,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';

import { useTranslation } from '../../hooks/useTranslation';

const CFaCheck = chakra(FaCheck);
const CAiOutlineGlobal = chakra(AiOutlineGlobal);

interface LanguageProps {
  showLanguageData?: boolean;
}

export function Language({ showLanguageData = true }: LanguageProps) {
  const { locale, locales, setLocale } = useTranslation(null);

  return (
    <Flex align="left" ml="20px" mt="20px">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<CAiOutlineGlobal />}
          variant="outline"
          borderWidth="0"
          color="black"
          _hover={{ bgColor: 'transparent' }}
          _focus={{ bgColor: 'transparent' }}
          _active={{ bgColor: 'transparent' }}
        />
        {showLanguageData && <Text color="black">{locale}</Text>}
        <MenuList>
          {locales.map(function (item) {
            return (
              <MenuItem
                key={item}
                onClick={() => setLocale(item)}
                icon={item === locale ? <CFaCheck /> : null}
              >
                <Text color="black">{item}</Text>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
}
