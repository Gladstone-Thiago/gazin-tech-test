import { translation } from '˜/translation';
import { yup as Yup } from '˜/utils/yup';
import * as yup from 'yup';

export const schema = {
  name: Yup.name,
  email: Yup.email,
  cpf: Yup.cpf,
  rg: Yup.rg,
  cell_phone: Yup.cell_phone,
  phone: Yup.phone,
  password: Yup.password,
  password_confirmation: Yup.password_confirmation,
  // status: yup.boolean().required(translation('required_status')),
  // permissions: yup.array().required(translation('required_permissions')),
};
