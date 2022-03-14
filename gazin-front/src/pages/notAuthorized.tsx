import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import { Heading } from '../components/Form/Heading';
import { translation } from '../translation';

export default function NotAuthorized() {
  return (
    <>
      {process.browser && (
        <>
          <Heading text="Não autorizado!" />
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={3}>
              {translation('access_to_the_page_has_been_denied')}
            </AlertTitle>
            <AlertDescription>
              {translation('you_do_not_have_authorization')}
            </AlertDescription>
          </Alert>
        </>
      )}
    </>
  );
}
