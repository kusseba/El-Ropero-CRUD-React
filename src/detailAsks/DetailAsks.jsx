import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../assets/style/styles.css';

const DetailAsks = () => {
  const { id } = useParams();
  const [respuesta, setRespuesta] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRespuesta = async () => {
      try {
        const response = await axios.get(`/api/preguntas-frecuentes/${id}`);
        setRespuesta(response.data.respuesta);
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
          <Typography variant="body1">{respuesta}</Typography>
        )}
      </div>
    </div>
  );
};

export default DetailAsks;
