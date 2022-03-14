import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import {
  Flex,
  Stack,
  chakra,
  FormControl,
  FormHelperText,
  Image,
  Box,
  Text,
  useBreakpointValue,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import Router from 'next/router';
import * as yup from 'yup';

import { AuthContext } from '../../../contexts/AuthContext';
import { ToastContext } from '../../../contexts/ToastContext';
import { translation } from '../../../translation';
import { Button } from '../../Form/Button';
import { Input } from '../../Form/Input';
import { Switch } from '../../Form/Switch';
import { url as urlDashboard } from '../Dashboard/config/url';
import { schema_sign_in } from './config/schema';
import { signIn } from './config/service';
import { formData } from './config/type';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function SignIn() {
  const ENV = `${process.env.NEXT_PUBLIC_ENV}`;
  const ENV_DEV_EMAIL = `${process.env.NEXT_PUBLIC_ENV_DEV_EMAIL}`;
  const DEV_PASSWORD = `${process.env.NEXT_PUBLIC_ENV_DEV_PASSWORD}`;

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { setUser, isAuthenticated, isLoading } = useContext(AuthContext);
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const { cangeStatus } = useContext(ToastContext);
  const signInFormSchema = yup.object().shape(schema_sign_in);

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<formData> = async (values) => {
    const result = await signIn(values, SetIsSubmitting, cangeStatus);
    if (!result) return;
    setUser(result);
    Router.push(urlDashboard);
  };

  useEffect(() => {
    if (ENV === 'development') {
      setValue('email', ENV_DEV_EMAIL);
      setValue('password', DEV_PASSWORD);
    }
  }, [DEV_PASSWORD, ENV, ENV_DEV_EMAIL, setValue]);

  useEffect(() => {
    isAuthenticated && Router.push(urlDashboard);
  }, [isAuthenticated]);

  return (
    <>
      <Stack
        direction={['row']}
        spacing="0px"
        mt="10"
        m="10"
        alignItems={isWideVersion && 'center'}
      >
        <>
          <Image
            src="/logo.jpeg"
            w={74}
            h={81}
            ml={isWideVersion ? 0 : 10}
            mt="-4"
          />
        </>
        <>
          <Text fontWeight="black" color="Gray.900" mt="20px" fontSize="md">
            {translation('title_control_room')}
          </Text>
        </>
      </Stack>
      <Flex
        flexDirection="column"
        width="80wh"
        height="80vh"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box boxShadow="dark-lg" rounded="md" bg="white" p="36px">
            <Stack spacing={4} mb={4}>
              {isLoading || isAuthenticated ? (
                <>
                  <SkeletonText
                    noOfLines={1}
                    height="24px"
                    w="200px"
                    ml="5"
                    mt="20px"
                  />
                  <SkeletonText
                    noOfLines={1}
                    height="24px"
                    w="200px"
                    ml="5"
                    mt="20px"
                  />
                  <Skeleton height="72px" w="300px" ml="10px" mt="6px" />
                </>
              ) : (
                <>
                  <Input
                    defaultValue={ENV_DEV_EMAIL}
                    name="email"
                    icon={CFaUserAlt}
                    type="text"
                    label={translation('email')}
                    error={errors.email}
                    minW={300}
                    {...register('email')}
                  />
                  <Input
                    defaultValue={DEV_PASSWORD}
                    name="password"
                    icon={CFaLock}
                    type="password"
                    label={translation('password')}
                    error={errors.password}
                    minW={300}
                    {...register('password')}
                  />

                  <FormControl>
                    <FormHelperText textAlign="left" mt={-1}>
                      <Switch
                        id="keep_connected"
                        name="keep_connected"
                        label={translation('keep_connected')}
                        fontSize="xs"
                        data-testid="keep_connected"
                        error={errors.keep_connected}
                        {...register('keep_connected')}
                      />
                    </FormHelperText>
                  </FormControl>
                  <Button
                    text={translation('login')}
                    onClick={handleSubmit(handleSignIn)}
                    isLoading={isSubmitting}
                    minW={300}
                    type="submit"
                    buttonTheme="primary"
                  />
                </>
              )}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
