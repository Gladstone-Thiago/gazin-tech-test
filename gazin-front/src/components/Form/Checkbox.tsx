import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  CheckboxProps as ChakraCheckboxProps,
  Checkbox as ChakraCheckbox,
  HStack,
} from '@chakra-ui/react';

interface CheckboxProps extends ChakraCheckboxProps {
  name: string;
  label?: string;
  error?: FieldError;
  defaultChecked?: boolean;
}

const CheckboxBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ name, label, defaultChecked, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <HStack spacing={4}>
        <ChakraCheckbox
          id={name}
          name={name}
          colorScheme="orange"
          defaultChecked={defaultChecked}
          ref={ref}
          {...rest}
        />
        {!!label && (
          <FormLabel color="Primary.50" htmlFor={name}>
            {label}
          </FormLabel>
        )}
      </HStack>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Checkbox = forwardRef(CheckboxBase);
