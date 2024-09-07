import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography, List, ListItem, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../assets/style/styles.css';

const FrequentAsks = () => {
  const navigate = useNavigate();
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await axios.get('/api/preguntas-frecuentes');
        setPreguntas(response.data);
      } catch (error) {
        toast.error('Error al cargar las preguntas frecuentes');
      } finally {
        setLoading(false);
      }
    };

    fetchPreguntas();
  }, []);

  const handlePreguntaClick = (id) => {
    navigate(`/frequent-asks/${id}`);
  };

  return (
    <div className="frequent-asks-container">
      <Typography variant="h4" className="frequent-asks-title">Preguntas Frequentes</Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <List className="frequent-asks-list">
          {preguntas.map((pregunta, index) => (
            <ListItem key={index} className="frequent-asks-list-item">
              <Link
                className="frequent-asks-link"
                onClick={() => handlePreguntaClick(pregunta.id)}
                underline="hover"
              >
                <Typography variant="body1">{pregunta.pregunta}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default FrequentAsks;
