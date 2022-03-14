import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import { Box, Stack, SimpleGrid } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { Button } from '˜/components/Form/Button';
import { Input } from '˜/components/Form/Input';
import { Select_Sex } from '˜/components/WithBusinessRules/Select_Sex';
import { translation } from '˜/translation';
import { mask } from '˜/utils/mask';
import * as yup from 'yup';

import { schema } from './config/schema';
import { Create } from './config/service';
import { formData } from './config/type';

interface ComponentProps {
  onClose: () => void;
}

const Component = ({ onClose }: ComponentProps) => {
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const formSchema = yup.object().shape(schema);
  const { register, handleSubmit, control, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { errors } = formState;

  const handleSave: SubmitHandler<formData> = (values) => {
    SetIsSubmitting(true);
    Create(values);
    SetIsSubmitting(false);
    onClose();
  };

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
        <Input
          name="name"
          icon={FaUserAlt}
          type="text"
          placeholder="João Paulo Farias"
          label={translation('name')}
          error={errors.name}
          {...register('name')}
        />
        <Select_Sex
          control={control}
          name="sex"
          defaultValue={null}
          handleOnChange={() => {
            null;
          }}
          isRequired
          error={errors.sex}
          {...register('sex')}
        />
      </SimpleGrid>

      <Stack align="self-end">
        <Button
          text={translation('save')}
          onClick={handleSubmit(handleSave)}
          isLoading={isSubmitting}
          type="submit"
          buttonTheme="salve"
          maxW="120px"
          isDisabled={false}
        />
      </Stack>
    </Box>
  );
};

export default Component;
