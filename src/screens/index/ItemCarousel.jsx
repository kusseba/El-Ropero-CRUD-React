import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack
} from '@mui/material';
import { Link } from 'react-router-dom';

const ItemCarousel = ({ item }) => (
  <Link to={`/product/${item.id}`}>
    <Card style={{ border: '1px solid #d4d4d4', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px 0 rgba(0,0,0,.3)', marginRight: 10, height: '100%' }}>
      <CardMedia
        loading='eager'
        component='img'
        height={160}
        image={item.image}
        alt={item.name}
      />
      <CardContent style={{ padding: 8, height: '100%' }} >
        <Typography
          className='card-title'
          mb={1}
          fontSize={14}
          lineHeight='18px'
          color='rgba(0, 0, 0, 0.6)'
          fontWeight={400}
          overflow='hidden'
          textOverflow='ellipsis'
          component='h2'
        >
          {item.name}
        </Typography>
        {!!item.offer_price ?
          <>
            <Stack direction='row' spacing={.5} alignItems='center'>
              <Typography variant='caption' style={{ textDecoration: 'line-through' }}>
                {parseFloat(item.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
              </Typography>
              <Typography fontSize={14} color='#00b100' fontWeight={500}>
                {parseFloat((((item.price - item.offer_price) / item.price) * 100).toFixed(0))}% OFF
              </Typography>
            </Stack>
            <Typography fontSize={20} lineHeight={1.25} fontWeight={500}>
              {parseFloat(item.offer_price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
            </Typography>
          </>
          :
          <Typography fontSize={20} lineHeight={1.25} fontWeight={500}>
            {parseFloat(item.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
          </Typography>
        }
      </CardContent>
    </Card>
  </Link>
);

export default ItemCarousel;
