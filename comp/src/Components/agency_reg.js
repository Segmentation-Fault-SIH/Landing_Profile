import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Grid, Avatar, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LockIcon from '@mui/icons-material/LockOutlined';
import './agency_reg.css';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    latitude: '',
    longitude: '',
    area_of_expertise: '',
    contact: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <Container component="main" maxWidth="xs" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #3BCBBE 50%, white 50%)'
    }}>
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: '#3BCBBE' }}>
          <LockIcon style={{ color: '#ffffff' }} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          AGENCY REGISTRATION
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                sx={{ borderRadius: '2px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                required
                sx={{ borderRadius: '25px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                required
                sx={{ borderRadius: '25px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" sx={{ borderRadius: '25px' }}>
                <InputLabel htmlFor="area_of_expertise">Area of Expertise</InputLabel>
                <Select
                  label="Area of Expertise"
                  name="area_of_expertise"
                  value={formData.area_of_expertise}
                  onChange={handleInputChange}
                  required
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="Option 1">Disaster Response</MenuItem>
                  <MenuItem value="Option 2">Humanitarian Aid</MenuItem>
                  <MenuItem value="Option 3">Search and Rescue</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                inputProps={{ inputMode: 'numeric' }}
                sx={{ borderRadius: '25px' }}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2, borderRadius: '25px', backgroundColor: '#3BCBBE', color: 'white' }}>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default RegistrationPage;
