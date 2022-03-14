import { translation } from '˜/translation';
import * as yupVal from 'yup';

import { regex } from './regex';

export const yup = {
  name: yupVal
    .string()
    .required(translation('required_name'))
    .matches(regex.name, translation('format_not_correct_string')),
  cpf: yupVal
    .string()
    .required(translation('required_cpf'))
    .matches(regex.cpf, translation('cpf_is_not_correct'))
    .test(
      'CPF_VALIDATION',
      translation('cpf_is_not_correct'),
      function (value) {
        value = value.replace(/\D/g, '');
        if (value.toString().length != 11 || /^(\d)\1{10}$/.test(value))
          return false;
        let result = true;
        [9, 10].forEach(function (j) {
          let soma = 0,
            r;
          value
            .split(/(?=)/)
            .splice(0, j)
            .forEach(function (e, i) {
              soma += parseInt(e) * (j + 2 - (i + 1));
            });
          r = soma % 11;
          r = r < 2 ? 0 : 11 - r;
          if (r != value.substring(j, j + 1)) result = false;
        });

        return result;
      }
    ),
  rg: yupVal
    .string()
    .required(translation('required_rg'))
    .matches(regex.rg, translation('rg_is_not_correct')),
  email: yupVal
    .string()
    .required(translation('required_email'))
    .email(translation('invalid_email')),
  cell_phone: yupVal
    .string()
    .required(translation('required_cell_phone'))
    .matches(regex.cell_phone, translation('cell_phone_is_not_correct')),
  phone: yupVal
    .string()
    .matches(regex.phone, translation('phone_is_not_correct')),
  password: yupVal
    .string()
    .required(translation('required_password'))
    .matches(regex.password, translation('rules_password')),
  password_confirmation: yupVal
    .string()
    .oneOf(
      [yupVal.ref('password'), null],
      translation('required_password_confirm')
    ),
};
