import { LangStrings as dashboard } from '../components/Views/Dashboard/config/lang';
import { LangStrings as login } from '../components/Views/Login/config/lang';
import { LangStrings as developers } from '../components/Views/Registers/Developers/config/lang';
import { LangStrings as levels } from '../components/Views/Registers/Levels/config/lang';
import { LangStrings as WithBusinessRules } from '../components/WithBusinessRules/config/lang';
import { useTranslation } from '../hooks/useTranslation';
import { LangStrings as Default } from './langString';

export const translation = (key: string) => {
  const LangStrings = {
    en: {
      ...Default.en,
      ...WithBusinessRules.en,
      ...login.en,
      ...dashboard.en,
      ...developers.en,
      ...levels.en,
    },
    pt: {
      ...Default.pt,
      ...WithBusinessRules.pt,
      ...login.pt,
      ...dashboard.pt,
      ...developers.pt,
      ...levels.pt,
    },
  };

  const { t } = useTranslation(LangStrings);
  return t(key);
};
