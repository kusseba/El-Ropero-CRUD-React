import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setProfile } from '../../redux/main';

const Login = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/signin/`, data);
      localStorage.setItem('@token', res.data.token);
      dispatch(setProfile(res.data));
      toast.success('Inicio de sesión exitoso');
    } catch (e) {
      toast.error('Error al iniciar sesión');
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
