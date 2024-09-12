import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [registered, setRegistered] = useState(false);

  const { control, handleSubmit, setError, formState: { errors, isSubmitting }, getValues } = useForm({
    defaultValues: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      repeat_password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/signup/`, data);
      setRegistered(true);
      toast.success('Registro exitoso. Se ha enviado un correo de verificación.');
    } catch (e) {
      if (e?.response?.data) {
        let errorData = e.response.data;

        if (errorData.email) {
          setError('email', { type: 'manual', message: errorData.email });
        }

        if (errorData.password) {
          setError('password', { type: 'manual', message: errorData.password });
          setError('repeat_password', { type: 'manual', message: 'Las contraseñas no coinciden' });
        }

        if (!errorData.email && !errorData.password) {
          toast.error('Error inesperado en el registro.');
        }
      } else {
        toast.error('Error de red. Por favor, intenta de nuevo.');
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <div className="register-form">
            {registered ? (
              <Typography variant="h4">Se ha enviado un correo de verificación para que verifiques tu cuenta.</Typography>
            ) : (
              <>
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
                        fullWidth
                        margin="normal"
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
                        fullWidth
                        margin="normal"
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
                        fullWidth
                        margin="normal"
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
                        fullWidth
                        margin="normal"
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
                        fullWidth
                        margin="normal"
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    {isSubmitting ? 'Registrando' : 'Registrarse'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
