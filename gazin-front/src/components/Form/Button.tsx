import React, { ElementType } from 'react';
import {
  RiPencilLine,
  RiCheckFill,
  RiErrorWarningLine,
  RiArrowLeftLine,
} from 'react-icons/ri';

import {
  Button as ChakraButton,
  InputProps as ChakraInputProps,
  Icon,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraInputProps {
  text: string;
  buttonTheme: string;
  isLoading?: boolean;
  icon?: ElementType;
  type?: 'button' | 'reset' | 'submit';
}

export function Button({
  text,
  buttonTheme,
  isLoading = false,
  type = null,
  icon = null,
  ...rest
}: ButtonProps) {
  if (buttonTheme === 'primary') {
    return (
      <ChakraButton
        id={text}
        type={type}
        variant="solid"
        isLoading={isLoading}
        bg="Primary.50"
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        width="full"
        color="white"
        rightIcon={icon && <Icon as={icon || RiPencilLine} />}
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  if (buttonTheme === 'primary_outline') {
    return (
      <ChakraButton
        id={text}
        variant="outline"
        isLoading={isLoading}
        textColor=""
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        borderBottomWidth="2"
        borderTopWidth="2"
        boxShadow="lg"
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  if (buttonTheme === 'primary_link') {
    return (
      <ChakraButton
        id={text}
        fontSize="smaller"
        variant="link"
        textColor="Primary.50"
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        isLoading={isLoading}
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  if (buttonTheme === 'edit') {
    return (
      <ChakraButton
        id={text}
        variant="solid"
        isLoading={isLoading}
        bg="Primary.50"
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        width="full"
        color="white"
        leftIcon={<Icon as={icon || RiPencilLine} />}
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  if (buttonTheme === 'cancel') {
    return (
      <ChakraButton
        id={text}
        variant="solid"
        isLoading={isLoading}
        bg="gray.400"
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        width="full"
        color="white"
        boxShadow="lg"
        leftIcon={<Icon as={icon || RiErrorWarningLine} />}
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  if (buttonTheme === 'delete') {
    return (
      <ChakraButton
        id={text}
        variant="solid"
        isLoading={isLoading}
        bg="Red.400"
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        width="full"
        color="white"
        boxShadow="lg"
        leftIcon={<Icon as={icon || RiErrorWarningLine} />}
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  if (buttonTheme === 'salve') {
    return (
      <ChakraButton
        id={text}
        variant="solid"
        isLoading={isLoading}
        bg="Primary.50"
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        width="full"
        color="white"
        boxShadow="lg"
        leftIcon={<Icon as={icon || RiCheckFill} />}
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  if (buttonTheme === 'return') {
    return (
      <ChakraButton
        id={text}
        variant="outline"
        isLoading={isLoading}
        textColor=""
        bg="white"
        _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
        borderBottomWidth="2"
        borderTopWidth="2"
        boxShadow="lg"
        leftIcon={<Icon as={icon || RiArrowLeftLine} />}
        {...rest}
      >
        {text}
      </ChakraButton>
    );
  }
  return (
    <ChakraButton
      id={text}
      variant="outline"
      textColor="Green.500"
      _hover={{ filter: 'contrast(200%)', transition: '0.7s' }}
      isLoading={isLoading}
      leftIcon={<Icon as={icon} />}
      {...rest}
    >
      {text}
    </ChakraButton>
  );
}
