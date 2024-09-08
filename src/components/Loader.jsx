import React from 'react';
import { Box, Stack, CircularProgress } from '@mui/material';

const Loader = (props) => (
  <Box position='absolute' bgcolor='#FFFFFF' zIndex={999} top={0} bottom={0} left={0} right={0} {...props}>
    <Stack height='100%' alignItems='center' justifyContent='center'>
      <CircularProgress sx={{ color: '#009ee3' }} />
    </Stack>
  </Box>
);
export default Loader;