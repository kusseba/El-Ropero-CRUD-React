import axios from "axios";
import React, {useState, useEffect} from 'react';
import {Card, CardContent, Typography, CardActions, Button} from '@mui/material';

const ProductCard = ({Id}) => {
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