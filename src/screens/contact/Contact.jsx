import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem('@token');
      await axios.post(`${process.env.REACT_APP_API_URL}/contact/`, data, { headers: { 'Authorization': `Token ${token}` } });
      toast.success('Mensaje enviado con éxito');
    } catch {
      toast.error('Error al enviar el mensaje');
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <div className="contact-form">
          <Typography variant="h4" className="contact-title">Contacto</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              rules={{ required: 'El título es obligatorio' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Título"
                  fullWidth
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  className="contact-field"
                />
              )}
            />
            <Controller
              name="detail"
              control={control}
              rules={{ required: 'El detalle es obligatorio' }}
              render={({ field }) => (
                <TextareaAutosize
                  {...field}
                  minRows={4}
                  placeholder="Detalle"
                  className={`contact-textarea ${errors.detail ? 'error' : ''}`}
                />
              )}
            />
            {errors.detail && (
              <Typography variant="body2" className="error-message">
                {errors.detail.message}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              className="contact-button"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
