import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Grid, TextField, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';

const PasswordReset = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [validLink, setValidLink] = useState(false);
  const [loading, setLoading] = useState(true);
  const { control, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      newPassword: '',
      confirmNewPassword: ''
    }
  });

  useEffect(() => {
    const uidb = searchParams.get('uidb');
    const token = searchParams.get('token');

    if (uidb && token) {
      axios.get(`${process.env.REACT_APP_API_URL}/password-reset/${uidb}/${token}/`)
        .then(() => {
          setValidLink(true);
          setLoading(false);
        })
        .catch(() => {
          toast.error('Enlace de restablecimiento no válido.');
          setLoading(false);
          navigate('/signin');
        });
    } else {
      toast.error('Parámetros inválidos.');
      navigate('/signin');
    }
  }, [searchParams, navigate]);

  const onSubmit = async (data) => {
    const uidb = searchParams.get('uidb');
    const token = searchParams.get('token');

    if (data.newPassword !== data.confirmNewPassword) {
      setError('confirmNewPassword', { type: 'manual', message: 'Las contraseñas no coinciden' });
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/password-reset-complete/`, {
        uidb,
        token,
        password: data.newPassword
      });
      toast.success('Contraseña restablecida con éxito.');
      navigate('/signin');
    } catch (e) {
      toast.error('Error al restablecer la contraseña.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        {loading ? (
          <CircularProgress />
        ) : validLink ? (
          <>
            <Typography variant="h4">Restablecer contraseña</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="newPassword"
                control={control}
                rules={{ required: 'Nueva contraseña es requerida' }}
                render={({ field }) => (
                  <TextField
                    label="Nueva contraseña"
                    type="password"
                    {...field}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword?.message}
                    fullWidth
                    margin="normal"
                  />
                )}
              />
              <Controller
                name="confirmNewPassword"
                control={control}
                rules={{ required: 'Confirma tu nueva contraseña' }}
                render={({ field }) => (
                  <TextField
                    label="Confirma nueva contraseña"
                    type="password"
                    {...field}
                    error={!!errors.confirmNewPassword}
                    helperText={errors.confirmNewPassword?.message}
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
                {isSubmitting ? 'Restableciendo contraseña' : 'Restablecer contraseña'}
              </Button>
            </form>
          </>
        ) : (
          <Typography variant="h5">El enlace no es válido.</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default PasswordReset;
