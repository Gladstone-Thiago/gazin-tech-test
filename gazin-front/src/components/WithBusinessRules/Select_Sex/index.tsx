/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-types */
import {
  useState,
  useEffect,
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
} from 'react';
import { FieldError, FieldValues } from 'react-hook-form';

import {
  SelectProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';

import { ToastContext } from '../../../contexts/ToastContext';
import { translation } from '../../../translation';
import { Loading } from '../../Form/Loading';
import { GetData } from './config/service';

interface Props extends SelectProps {
  name: string;
  error?: FieldError;
  isRequired: boolean;
  ref: React.RefObject<HTMLSelectElement>;
  control: FieldValues;
  handleOnChange: Function;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
  { handleOnChange, onBlur, name, control, error },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} id={name}>
      <FormLabel color="Blue.400" htmlFor={name}>
        {translation('title_sex')}
      </FormLabel>
      <Select
        ref={ref}
        control={control}
        name={name}
        onBlur={onBlur}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          handleOnChange(e)
        }
        placeholder={translation('select')}
        size="md"
        maxW="400px"
      >
        <>
          <option key="F" value="Feminino">
            Feminino
          </option>
          <option key="M" value="Masculino">
            Masculino
          </option>
        </>
      </Select>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Select_Sex = forwardRef(SelectBase);
