import { memo, useContext, useEffect } from 'react';

import { useToast } from '@chakra-ui/react';
import _ from 'lodash';

import { ToastContext } from '../../contexts/ToastContext';
import { translation } from '../../translation';

export function Component() {
  const { error, response, cangeStatus } = useContext(ToastContext);
  const toast = useToast();
  const successResponse = translation('saved_successfully');

  useEffect(() => {
    try {
      if (error) {
        const field = error[0].field ? error[0].field.toString() : 'Error';
        const message = error[0].message ? error[0].message.toString() : error;
        toast({
          position: 'bottom-left',
          title: `${field}`,
          description: `${message} !`,
          status: 'error',
          duration: 900000,
          isClosable: true,
        });
      } else if (response) {
        const result = _.get(response, 'data');
        if (result) {
          toast({
            position: 'bottom-left',
            title: 'Success',
            description: result.message || successResponse,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        }
      }
    } catch {
      toast({
        position: 'bottom-left',
        title: `Error`,
        description: `${error.message} !`,
        status: 'error',
        duration: 900000,
        isClosable: true,
      });
    }
    cangeStatus({ error: null, response: null });
  }, [cangeStatus, error, response, successResponse, toast]);

  return null;
}

export const ResponseToast = memo(Component);
