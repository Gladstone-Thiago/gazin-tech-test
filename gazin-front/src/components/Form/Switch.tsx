import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  SwitchProps as ChakraSwitchProps,
  Switch as ChakraSwitch,
  Stack,
} from '@chakra-ui/react';

interface SwitchProps extends ChakraSwitchProps {
  id: string;
  name: string;
  label?: string;
  fontSize?: string;
  colort?: string;
  error?: FieldError;
}

const SwitchBase: ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (
  { id, name, label, fontSize = 'md', error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <Stack spacing={-1} display="flex" alignItems="center" direction="row">
        {!!label && (
          <FormLabel color="Font.50" fontSize={fontSize} htmlFor={name}>
            {label}
          </FormLabel>
        )}
        <ChakraSwitch
          ref={ref}
          size="sm"
          id={id}
          name={name}
          colorScheme="purple"
          pb={1}
          {...rest}
        />
      </Stack>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Switch = forwardRef(SwitchBase);
