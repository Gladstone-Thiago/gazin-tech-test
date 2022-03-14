import { BsPeople } from 'react-icons/bs';

import { ButtonItem } from '˜/components/Sidebar/ButtonItem';
import { translation } from '˜/translation';

import { url } from './url';

export default function MenuUser() {
  const title = translation('title_levels');
  return <ButtonItem title={title} icon={<BsPeople />} href={url} />;
}
