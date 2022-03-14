import { translation } from '˜/translation';
import { yup as Yup } from '˜/utils/yup';
import * as yup from 'yup';

export const schema = {
  name: Yup.name,
  sex: yup.string().required(translation('required')),
  hobby: yup.string().required(translation('required')),
  active: yup.boolean(),
  birth_date: yup.boolean(),
  level_id: yup.number().required(translation('required')),
};
