import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  TextareaProps as ChakraTextareaProps,
  InputGroup,
  Textarea as ChakraTextarea,
} from '@chakra-ui/react';

interface Props extends ChakraTextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (
  { name, placeholder, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel color="Font.50" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <ChakraTextarea
          placeholder={placeholder}
          name={name}
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Textarea = forwardRef(TextareaBase);
