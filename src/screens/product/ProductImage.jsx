import axios from 'axios';
import React, {useState, useEffect} from 'react';

const ProductImage = ({Id}) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchProductImage = async () => {
            try {
const token = localStorage.getItem('@token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/${Id}/`, { headers: { 'Authorization': `Token ${token}` }
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

export default ProductImage;