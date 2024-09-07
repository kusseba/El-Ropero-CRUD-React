import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography } from '@mui/material';
import axios from 'axios';
import '../assets/style/styles.css';

const Login = () => {
  const { 
    control, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    setError 
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/login', data);
    } catch (error) {
      setError('api', {
        type: 'manual',
        message: error.response?.data?.message || 'Error al iniciar sesión',
      });
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <div className="register-form">
          <Typography variant="h4">Iniciar sesión</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{ required: 'Correo electrónico es requerido' }}
              render={({ field }) => (
                <TextField
                  label="Correo electrónico"
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Contraseña es requerida' }}
              render={({ field }) => (
                <TextField
                  label="Contraseña"
                  type="password"
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            {errors.api && (
              <Typography variant="body2" color="error">
                {errors.api.message}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
