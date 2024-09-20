import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const cardInfo = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Colección de Primavera
      </Typography>
      <Typography variant="h5" component="div">
        Vestido de Verano
      </Typography>
      <Typography variant="body2">
        Precio: 35.000
        <br />
        {'40% de descuento'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" sx={{backgroundColor: '#020a0d', fontStyle: '#f9ff76 ', borderRadius: '10px'}}>
      Comprar
      </Button>
    </CardActions>
    <CardActions>
      <Button size="small" sx={{backgroundColor: '#020a0d', fontStyle: '#f9ff76 ', borderRadius: '10px'}}>
      Agregar al Carrito
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth: 90 }}>
      <Card variant="outlined">{cardInfo}</Card>
    </Box>
  );
}
