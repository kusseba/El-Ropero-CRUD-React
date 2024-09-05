import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import '../assets/style/styles.css';

const Register = () => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/Register', data);
    } catch (error) {
      setError(error.response?.data?.message || 'Ocurrió un error al registrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <div className="register-form">
          <Typography variant="h4">Registro</Typography>
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
              name="first_name"
              control={control}
              rules={{ required: 'Nombre es requerido' }}
              render={({ field }) => (
                <TextField
                  label="Nombre"
                  {...field}
                  error={!!errors.first_name}
                  helperText={errors.first_name?.message}
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              rules={{ required: 'Apellido es requerido' }}
              render={({ field }) => (
                <TextField
                  label="Apellido"
                  {...field}
                  error={!!errors.last_name}
                  helperText={errors.last_name?.message}
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
            <Controller
              name="repeat_password"
              control={control}
              rules={{ 
                required: 'Repetir contraseña es requerido', 
                validate: value => value === getValues('password') || 'Las contraseñas no coinciden' 
              }}
              render={({ field }) => (
                <TextField
                  label="Repetir contraseña"
                  type="password"
                  {...field}
                  error={!!errors.repeat_password}
                  helperText={errors.repeat_password?.message}
                />
              )}
            />
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar'}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
