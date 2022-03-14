import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FaUserAlt,
  FaLock,
  FaRegEnvelope,
  FaRegAddressCard,
  FaPhoneAlt,
  FaMobile,
} from 'react-icons/fa';

import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { Button } from '˜/components/Form/Button';
import { Input } from '˜/components/Form/Input';
import { translation } from '˜/translation';
import { mask } from '˜/utils/mask';
import _ from 'lodash';
import * as yup from 'yup';

import { EditAdminUser, usersType } from '../../Login/config/service';
import { Permissions } from './components/Permissions';
import { Status } from './components/Status';
import { schema } from './config/schema';
import { formData } from './config/type';
interface ComponentProps {
  onClose: () => void;
  data: usersType;
}
const Component = ({ onClose, data }: ComponentProps) => {
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const [status, SetStatus] = useState(data.ativo);

  const formSchema = yup.object().shape(schema);
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  const [permissions, SetPermissions] = useState();

  const { errors } = formState;

  useEffect(() => {
    setValue('id', data.id);
    setValue('name', data.nome);
    setValue('email', data.email);
    setValue('cpf', data.cpf);
    setValue('rg', data.rg);
    setValue('phone', data.telefone);
    setValue('cell_phone', data.celular);
    setValue('password', data.senha);
    SetStatus(data.ativo);
  }, []);

  const handleSave: SubmitHandler<formData> = async (values) => {
    SetIsSubmitting(true);
    const response = await EditAdminUser({
      id: data.id,
      nome: values.name,
      email: values.email,
      cpf: values.cpf,
      rg: values.rg,
      telefone: values.phone,
      celular: values.cell_phone,
      senha: values.password,
      roles: permissions,
      ativo: status,
    });
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
        <Input
          name="email"
          icon={FaRegEnvelope}
          type="text"
          placeholder="Joaopaulofarias@email.com"
          label={translation('email')}
          error={errors.email}
          {...register('email')}
        />
        <Input
          name="cpf"
          icon={FaRegAddressCard}
          type="text"
          mask={mask.cpf}
          placeholder={mask.cpf}
          label={translation('cpf')}
          error={errors.cpf}
          {...register('cpf')}
        />

        <Input
          name="rg"
          icon={FaRegAddressCard}
          type="text"
          mask={mask.rg}
          placeholder={mask.rg}
          label={translation('rg')}
          error={errors.rg}
          {...register('rg')}
        />

        <Input
          name="cell_phone"
          icon={FaMobile}
          type="text"
          mask={mask.cell_phone}
          placeholder={mask.cell_phone}
          label={translation('cell_phone')}
          error={errors.cell_phone}
          {...register('cell_phone')}
        />

        <Input
          name="phone"
          icon={FaPhoneAlt}
          type="text"
          placeholder={mask.phone}
          mask={mask.phone}
          label={translation('phone')}
          error={errors.phone}
          {...register('phone')}
        />

        <Input
          name="password"
          icon={FaLock}
          type="password"
          placeholder="********"
          label={translation('password')}
          error={errors.password}
          {...register('password')}
        />

        <Input
          name="password_confirm"
          icon={FaLock}
          type="password"
          placeholder="********"
          label={translation('password_confirm')}
          error={errors.password_confirm}
          {...register('password_confirm')}
        />
      </SimpleGrid>
      {Status(SetStatus, data.ativo)}
      {Permissions(SetPermissions, data.roles)}
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
