import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DetailAsks = () => {
  const { id } = useParams();
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRespuesta = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/faq/${id}`);
        setState(response.data);
      } catch (error) {
        toast.error('Error al cargar la respuesta');
      } finally {
        setLoading(false);
      }
    };

    fetchRespuesta();
  }, [id]);

  return (
    <div className="detail-asks-container">
      <Typography variant="h4" className="detail-asks-title">Respuesta</Typography>
      <div className="detail-asks-content">
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <>
            <Typography variant="body1">{state.title}</Typography>
            <Typography variant="body1">{state.detail}</Typography>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailAsks;
