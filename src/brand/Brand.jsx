import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Button, Modal, Typography } from '@mui/material';

const Brand = () => {
  const [state, setState] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://el-ropero-crud.onrender.com/brand/');
        const data = await response.json();
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCreate = async (e) => {
    try {
      e.preventDefault();
      await fetch(`https://el-ropero-crud.onrender.com/brand/`, { method: 'POST', body: JSON.stringify(selected), headers: { 'Content-Type': 'application/json' } });
      setSelected(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      await fetch(`https://el-ropero-crud.onrender.com/brand/${selected.id}`, { method: 'PUT', body: JSON.stringify(selected), headers: { 'Content-Type': 'application/json' } });
      setSelected(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`https://el-ropero-crud.onrender.com/brand/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } });
      setSelected(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (!state) {
    return (
      <Box style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  };
  return (
    <>
      <Box border={1} display='flex' flexDirection='row'>
        <h1 styles={{ marginBottom: 20 }}>Marcas</h1>
        <Button onClick={() => setSelected({ name: '' })}>Crear</Button>
      </Box>

      {state.map((item, index) => (
        <Box key={index} border={1} display='flex' flexDirection='row'>
          <h2>{item.name}</h2>
          <Box display='flex' flexDirection='row'>
            <Button onClick={() => setSelected(item)}>Editar</Button>
            <Button onClick={() => handleDelete(item.id)}>Eliminar</Button>
          </Box>
        </Box>
      ))}


      {selected && <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            Editar elemento
          </Typography>

          <form onSubmit={selected.id ? handleUpdate : handleCreate}>
            <label>
              Nombre:
              <input type="text" name="name" value={selected.name} onChange={handleInputChange} />
            </label>

            <Button type='submit'>guardar</Button>
          </form>
        </Box>
      </Modal>}
    </>
  );
}

export default Brand;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};