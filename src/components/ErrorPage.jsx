import React from 'react';
import { Stack, Typography } from '@mui/material';

const ErrorPage = () => (
  <Stack justifyContent='center' height='100vh'>
    <Typography component='h1' mb={4} textAlign='center' fontFamily='PNBold' fontSize={60}>¡Oops!</Typography>
    <Typography mb={4} textAlign='center'>Página no encontrada, si crees que esto está mal contacta con soporte.</Typography>
    <Typography textAlign='center' fontFamily='PNRegular'>
      <i>Not found</i>
    </Typography>
  </Stack>
);
export default ErrorPage;