import React from 'react';
import {
  Container,
  Box,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => (
  <Box component='footer' py={3}>
    <Container maxWidth='lg' sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
      <Typography
        color='#e6e6e6'
        fontSize={20}
        lineHeight={1}
        fontFamily='Timing'
      >
        El Ropero
      </Typography>
      <Grid container spacing={{ xs: .5, sm: 1 }}>
        <Grid component='ul' xs={6} sm={6} md={3} style={{ listStyleType: 'none', paddingInlineStart: 8 }}>
          <Typography mb={.5} component='li' color='#e6e6e6' fontSize={14}>Contacto</Typography>
          <Typography mb={.5} component='li' color='#e6e6e6' fontSize={14}>Ayuda</Typography>
          <Typography component='li' color='#e6e6e6' fontSize={14}>Blog</Typography>
        </Grid>

        <Grid component='ul' xs={6} sm={6} md={3} style={{ listStyleType: 'none', paddingInlineStart: 8 }}>
          <Typography component='li' color='#e6e6e6' fontSize={14}>Envíos</Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;