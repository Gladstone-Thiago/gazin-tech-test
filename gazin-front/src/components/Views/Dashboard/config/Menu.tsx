import { BsHouseDoor } from 'react-icons/bs';

import { translation } from '../../../../translation';
import { ButtonItem } from '../../../Sidebar/ButtonItem';
import { url } from './url';

export default function MenuUser() {
  const title = translation('title_home_page');
  return <ButtonItem title={title} icon={<BsHouseDoor />} href={url} />;
}
