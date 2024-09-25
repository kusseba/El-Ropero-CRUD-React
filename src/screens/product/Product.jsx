import * as React from 'react'
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


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


{/*Extrae la imagen del producto en la pirmera parte de la Grilla de producto*/}
const ProductImage = ({Id}) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
      const fetchProductImage = async () => {
          try {
const token = localStorage.getItem('@token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/${Id}/`, { headers: { 'Authorization': `Token ${token}` } });
              const imageUrlFromApi = response.data.image;
              setImageUrl(imageUrlFromApi);
          } catch (error) {
              console.error('Error fetching product image: ', error);
              
          }
      };
      fetchProductImage();
  }, [Id]);

  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Product"
          style={{ width: '80%', height: 'auto' }}
        />
      ) : (
        <p> ...Loading </p>
      )}
    </div>
  );
};


{/*Agrega los datos como nombre y precia en la segunda parte de la grilla desde la API. */}
const ProductInfo = ({Id}) => {
  const [productData, setProductData] = useState({
      name: '',
      price: '',
      discoount: ''
  });

  useEffect(() => {
      const fetchProductData = async () => {
          try {
const token = localStorage.getItem('@token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/${Id}/`, { headers: { 'Authorization': `Token ${token}` } });
              const productInfo = response.data;
              setProductData({
                  name: productInfo.name || 'Producto no nombrado',
                  price: productInfo.price ? `${productInfo.price} $` : 'Precio no registrado',                
                
                });
          } catch (error) {
              console.error('Error fetching product data:', error);
              
          }
      };
      fetchProductData();
  }, [Id]);

  return(
      <Card> 
      <React.Fragment>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          </Typography>
          <br/>
          <Typography variant="h5" component="div">
            {productData.name}
          </Typography>
          <br/>
          <Typography variant="body2">
            {productData.price}
            <br />
          </Typography>
          <br/>
          <br/>
          <br/>
        </CardContent>     
        <CardActions>
          <Button size="small" sx={{ width: '50%', backgroundColor: '#020a0d', color: '#f9ff76', borderRadius: '10px' }}>
            Comprar
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" sx={{ width: '50%', backgroundColor: '#020a0d', color: '#f9ff76', borderRadius: '10px' }}>
            Agregar al Carrito
          </Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
}


{/*Tercera parte crea una Grid donde se muestran los elementos de las tres primeros Id de los Productos en la API */}
const ProductCardList = ({product}) => (
  <Card sx={{maxWidth: 150}}>
    <CardMedia
      sx={{height: 140, width: '100px'}}
      image={product.image}
      title={product.name}
    />
    <CardContent>
      <Typography variant="body2" component="div">
          {product.name}
      </Typography>
      <Typography variant="body2" component="div">
          {product.name}
      </Typography>
    </CardContent>
  </Card>
);

const ThreeGridList = () => {
  const [products, setProducts] = useState([
    {id: '', image: '', name: '', price: ''},
    {id: '', image: '', name: '', price: ''},
    {id: '', image: '', name: '', price: ''},
  ]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
//const token = localStorage.getItem('@token');
      //const response = await axios.get(`${process.env.REACT_APP_API_URL}/produc/${Id}/`, { headers: { 'Authorization': `Token ${token}` } });
        //const data = response.data;
        //setProducts(data[0], data[1], data[3]);
      } catch (error) {
        console.error('Error fetching products data:', error);
      }
    };
    
    fetchProductData();
  }, []);

  return (
    <Grid item xs={6} md={12}>
      <Grid container spacing={3}>
        <Grid item xs>
          <ProductCardList product={products[0]} />  
        </Grid>
        <Grid item xs>
          <ProductCardList product={products[1]} />  
        </Grid>
        <Grid item xs>
          <ProductCardList product={products[2]} />  
        </Grid>
      </Grid>
    </Grid>
  );
}


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
        {/*
        <Grid item xs={6} md={12}>
          <ThreeGridList/>
        </Grid>
        */}        
      </Grid>
    </Box>
  );


};

export default Product;
