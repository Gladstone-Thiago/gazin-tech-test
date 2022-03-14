import { useState } from 'react';

import { Box, Stack, Text, VStack } from '@chakra-ui/react';
import { Button } from '˜/components/Form/Button';
import { translation } from '˜/translation';
import _ from 'lodash';

import { Information } from './config/type';
import { InativeAdminUser } from '../../Login/config/service';

interface ComponentProps {
  information: Information;
  onClose: () => void;
}

const Component = ({ information, onClose }: ComponentProps) => {
  const [isSubmitting, SetIsSubmitting] = useState(false);

  const handleDelete = async () => {
    SetIsSubmitting(true);
    await InativeAdminUser(information.id, false);
    onClose();
    SetIsSubmitting(false);
  };

  const handleCancel = () => {
    SetIsSubmitting(true);
    onClose();
    SetIsSubmitting(false);
  };

  return (
    <Box>
      <VStack pt={6}>
        <Text fontWeight="light" color="Font.50" fontSize="2xl">
          {translation('confirm_delete')}
        </Text>
        <Text fontWeight="black" color="Font.50" fontSize="2xl">
          {`"${information.nome}"`} ?
        </Text>
      </VStack>

      <Stack align="self-end">
        <Stack direction={['column', 'row']} mt="40px">
          <Button
            text={translation('cancel')}
            onClick={handleCancel}
            type="submit"
            buttonTheme="cancel"
            maxW="120px"
            isDisabled={false}
          />
          <Button
            text={translation('delete')}
            onClick={handleDelete}
            isLoading={isSubmitting}
            type="submit"
            buttonTheme="delete"
            maxW="120px"
            isDisabled={false}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Component;
