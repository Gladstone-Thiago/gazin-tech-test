/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ReactElement,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import { FormLabel, Stack, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import { translation } from '˜/translation';

function Status(
  SetStatus: Dispatch<SetStateAction<any>>,
  myStatus?: boolean
): ReactElement {
  const [value, setValue] = React.useState('true');

  useEffect(() => {
    setValue(String(myStatus));
  }, []);

  useEffect(() => {
    SetStatus(value === 'true' ? true : false);
  }, [value, SetStatus]);

  return (
    <VStack align="self-start" mb="10px">
      <FormLabel color="Font.50">{translation('status')}</FormLabel>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio
            _checked={{ color: 'Primary.50', bg: 'Primary.50' }}
            value="true"
          >
            Ativo
          </Radio>
          <Radio
            _checked={{ color: 'Primary.50', bg: 'Primary.50' }}
            value="false"
          >
            Inativo
          </Radio>
        </Stack>
      </RadioGroup>
    </VStack>
  );
}

export { Status };
