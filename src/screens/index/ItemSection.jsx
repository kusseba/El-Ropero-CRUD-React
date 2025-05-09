import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack
} from '@mui/material';
import { Link } from 'react-router-dom';

const ItemSection = ({ item }) => (
  <Link to={`/product/${item.id}`}>
    <Card style={{ height: '100%', boxShadow: 'none', borderRadius: 0 }}>
      <CardMedia
        loading='lazy'
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

export default ItemSection;
