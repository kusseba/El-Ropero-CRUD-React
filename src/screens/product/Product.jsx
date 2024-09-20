import * as React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import ProductImage from '../product/ProductImage.jsx';
import ProductInfo from '../product/ProductInfo.jsx'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



const Product = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      width: '85%',
      height: '500px',
      backgroundColor: '#f6f9fa',
      margin: '50px auto',
      borderRadius: '5px',
       }}>
      <Grid container spacing={0.5}>
        <Grid item xs={6} md={8}>
          <ProductImage/>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ProductInfo/>
          </Item>
        </Grid>
        <Grid item xs={6} md={12}>
          
        </Grid>
      </Grid>
    </Box>
  );


};

export default Product;