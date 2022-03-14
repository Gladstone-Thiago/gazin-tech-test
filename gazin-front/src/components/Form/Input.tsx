import {
  ElementType,
  useState,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import { FieldError } from 'react-hook-form';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import InputMask from 'react-input-mask';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  chakra,
  InputLeftElement,
  InputRightElement,
  Button,
  Icon,
} from '@chakra-ui/react';
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: ElementType;
  type: string;
  placeholder?: string;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mask?: string;
}

const CFaRegEyeSlash = chakra(FaRegEyeSlash);
const CFaFaRegEye = chakra(FaRegEye);

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    icon,
    type,
    placeholder,
    label,
    error = null,
    onChange = null,
    mask = null,
    ...rest
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowClick() {
    setShowPassword(!showPassword);
  }
  if (type === 'password') {
    return (
      <FormControl isInvalid={!!error} id={name}>
        {!!label && (
          <FormLabel color="Font.50" htmlFor={name}>
            {label}
          </FormLabel>
        )}
        <InputGroup>
          <InputLeftElement pointerEvents="none" color="Font.50">
            <Icon as={icon} color="Gray.300" fontSize="20" />
          </InputLeftElement>
          <ChakraInput
            name={name}
            type={showPassword ? 'text' : 'password'}
            bg="white"
            color="Font.50"
            focusBorderColor="Gray.50"
            borderColor="Gray.300"
            borderRadius={5}
            variant="outline"
            onChange={onChange}
            _active={{ bgColor: 'Gray.100' }}
            _focus={{ bgColor: 'Gray.100' }}
            _hover={{ bgColor: 'Gray.100' }}
            _placeholderShown={{ color: 'Gray.300' }}
            _autofill={{ bgColor: 'Gray.300' }}
            maxW="600px"
            ref={ref}
            {...rest}
          />
          <InputRightElement width="15%">
            <Button h="1.85rem" size="sm" onClick={handleShowClick}>
              {showPassword ? <CFaFaRegEye /> : <CFaRegEyeSlash />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }
  return (
    <FormControl isInvalid={!!error} id={name}>
      {!!label && (
        <FormLabel color="Font.50" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="Font.50">
          <Icon as={icon} color="Gray.300" fontSize="20" />
        </InputLeftElement>
        <ChakraInput
          as={mask ? InputMask : null}
          placeholder={placeholder}
          name={name}
          type={type}
          bg="white"
          color="Font.50"
          focusBorderColor="Gray.50"
          borderColor="Gray.300"
          borderRadius={5}
          variant="outline"
          onChange={onChange}
          mask={mask}
          maskchar={null}
          _active={{ bgColor: 'Gray.100' }}
          _focus={{ bgColor: 'Gray.100' }}
          _hover={{ bgColor: 'Gray.100' }}
          _placeholderShown={{ color: 'Gray.300' }}
          _autofill={{ bgColor: 'Gray.300' }}
          maxW="600px"
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
