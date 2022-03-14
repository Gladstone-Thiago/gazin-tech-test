import { yup as Yup } from '˜/utils/yup';
import * as yup from 'yup';

export const schema_sign_in = {
  email: Yup.email,
  password: Yup.password,
  keep_connected: yup.boolean(),
};
