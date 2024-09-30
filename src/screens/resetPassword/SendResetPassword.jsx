import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const SendResetPasswordEmail = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(`/send-reset-password/`, data);
      toast.success('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
    } catch (e) {
      toast.error('Error al enviar el correo de recuperación.');
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4">Recuperar Contraseña</Typography>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? 'Enviando correo...' : 'Enviar correo de recuperación'}
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SendResetPasswordEmail;
