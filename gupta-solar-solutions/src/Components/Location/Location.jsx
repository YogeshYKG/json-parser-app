import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './Location.module.css';

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '12px',
};

const center = {
  lat: 26.9124, // Jaipur
  lng: 75.7873,
};

const Location = () => {
  return (
    <Box className={styles.aboutSection}>
      <Typography variant="h4" align="center" className={styles.aboutHeading}>
        About Us
      </Typography>

      <Grid container spacing={4} className={styles.aboutWrapper}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" className={styles.aboutText}>
            We are a Rajasthan-based solar energy firm with a strong local presence. Our team
            has successfully deployed over 500+ installations across residential, commercial,
            and industrial sectors.
          </Typography>
          <Typography variant="body1" className={styles.aboutText}>
            We are certified under MNRE guidelines and partner with top solar panel
            manufacturers to ensure long-term performance and safety.
          </Typography>
          <Typography variant="body1" className={styles.aboutText}>
            Office: Near GT Central Mall, Malviya Nagar, Jaipur – 302017
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              options={{ draggable: true }}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;
