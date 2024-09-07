import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/styles.css';

const DetailAsks = () => {
  const { id } = useParams();
  const [respuesta, setRespuesta] = useState('');

  useEffect(() => {
    axios.get(`/api/preguntas-frecuentes/${id}`)
      .then(response => {
        setRespuesta(response.data.respuesta);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="detail-asks-container">
      <Typography variant="h4" className="detail-asks-title">Respuesta</Typography>
      <div className="detail-asks-content">
      <Typography variant="body1">{respuesta}</Typography>
      </div>
    </div>
  );
};

export default DetailAsks;
