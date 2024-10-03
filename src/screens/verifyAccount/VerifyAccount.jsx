import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, CircularProgress, Grid } from '@mui/material';
import { toast } from 'react-toastify';

const VerifyAccount = () => {
  const { uidb, token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (uidb && token) {
      axios.post(`${process.env.REACT_APP_API_URL}/verify-account/`, { uidb, token })
        .then(() => {
          toast.success('Cuenta verificada exitosamente.');
          setLoading(false);
        })
        .catch(() => {
          toast.error('Error al verificar la cuenta. Inténtalo de nuevo.');
        });
    } else {
      toast.error('Parámetros inválidos.');
    }
  }, [searchParams, navigate]);

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item>
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography variant="h5">Tu cuenta ha sido verificada. Ahora puedes iniciar sesión.</Typography>
        )}
        <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
          Ir al inicio de sesión
        </Button>
      </Grid>
    </Grid>
  );
};

export default VerifyAccount;
