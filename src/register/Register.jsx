import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import '../assets/style/styles.css';

const Register = () => {
  const { control, handleSubmit, setError, formState: { errors, isSubmitting }, getValues } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://el-ropero-crud.onrender.com/v1/signup/', data);
    } catch (e) {
      if (e?.response?.data) {
        let error = [];

        if (e.response.data.email) {
          error.push({
            field: 'email',
            message: e.response.data.email
          });
        }

        if (e.response.data.password) {
          error.push({
            field: 'password',
            message: e.response.data.password
          },
            {
              field: 'repeat_password',
              message: e.response.data.password
            });
        }

        if (error.length > 0) {
          error.forEach(({ field, message }) =>
            setError(field, { type: 'manual', message })
          );
          return;
        }
      }
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <div className="register-form">
          <Typography variant="h4">Registrarse</Typography>
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
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Registrando...' : 'Registrarse'}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
