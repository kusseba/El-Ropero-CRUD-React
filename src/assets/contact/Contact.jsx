import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid, Typography, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import '../style/styles.css';

const Contact = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post('/api/contact', data);
    } catch (error) {
      setError(error.response?.data?.message || 'Error al enviar el mensaje');
    } finally {
      setLoading(false);
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
            {error && (
              <Typography variant="body2" className="error-message">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              className="contact-button"
            >
              Enviar
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
