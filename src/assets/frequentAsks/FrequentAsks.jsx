import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Typography, List, ListItem, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/styles.css';

const FrequentAsks = () => {
  const navigate = useNavigate();
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    axios.get('/api/preguntas-frecuentes')
      .then(response => {
        setPreguntas(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePreguntaClick = (id) => {
    navigate(`/frequent-asks/${id}`);
  };

  return (
    <div className="frequent-asks-container">
      <Typography variant="h4" className="frequent-asks-title">Preguntas Frequentes</Typography>
      <List className="frequent-asks-list">
        {preguntas.map((pregunta, index) => (
          <ListItem key={index} className="frequent-asks-list-item">
            <Link className="frequent-asks-link" onClick={() => handlePreguntaClick(pregunta.id)}>
              <Typography variant="body1">{pregunta.pregunta}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FrequentAsks;
