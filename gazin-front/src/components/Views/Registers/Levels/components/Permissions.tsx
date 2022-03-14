/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ReactElement,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  FormControl,
  Checkbox,
  FormLabel,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { translation } from '˜/translation';

const checkBoxArray = ['ADMFINANCEIRO', 'ADMFUNCIONAL', 'ADMMARKETING'];

function Permissions(
  SetPermissions: Dispatch<SetStateAction<any>>,
  permissions?: string[]
): ReactElement {
  const { handleSubmit, control, reset, setValue } = useForm<any>({});

  useEffect(() => {
    permissions &&
      permissions?.map((permission) => {
        setValue(permission, true);
      });
  }, []);

  const onSubmit = handleSubmit((data) => {
    const keys = Object.keys(data);

    const filtered = keys.filter(function (key) {
      return data[key];
    });
    SetPermissions(filtered);
  });

  return (
    <Stack>
      <FormLabel color="Font.50">{translation('permissions')}</FormLabel>
      <form onChange={onSubmit}>
        <FormControl>
          <HStack alignItems="flex-start">
            {checkBoxArray.map(
              (cbName): ReactElement => {
                return (
                  <Controller
                    control={control}
                    name={cbName as any}
                    key={cbName}
                    defaultValue={false}
                    render={({ field: { onChange, value, ref } }) => (
                      <Checkbox
                        colorScheme="purple"
                        onChange={onChange}
                        textTransform="capitalize"
                        ref={ref}
                        isChecked={value}
                      >
                        {cbName}
                      </Checkbox>
                    )}
                  />
                );
              }
            )}
          </HStack>
        </FormControl>
      </form>
    </Stack>
  );
}

export { Permissions };
