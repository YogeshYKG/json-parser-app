import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  Home,
  Business,
  BuildCircle,
} from '@mui/icons-material';
import styles from './OurServices.module.css';

const services = [
  {
    title: 'Residential Rooftop Installations',
    description: 'Affordable solar panels for homes with clean aesthetics and high efficiency.',
    icon: <Home color="primary" fontSize="large" />,
  },
  {
    title: 'Commercial Solar Panels',
    description: 'Robust solutions for offices, factories, and institutions to reduce energy costs.',
    icon: <Business color="success" fontSize="large" />,
  },
  {
    title: 'Maintenance & Repair',
    description: 'Scheduled checkups and quick fixes to keep your system running smoothly.',
    icon: <BuildCircle color="action" fontSize="large" />,
    comingSoon: true,
  },
];

const OurServices = () => {
  return (
    <div className={styles.servicesSection}>
      <Typography variant="h4" align="center" className={styles.servicesHeading}>
        Our Services
      </Typography>

      <div className={styles.servicesWrapper}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>{service.icon}</div>
            <Typography variant="h6" className={styles.cardTitle}>
              {service.title}
            </Typography>
            <Typography variant="body2" className={styles.cardDesc}>
              {service.description}
            </Typography>
            {service.comingSoon && (
              <div className={styles.comingSoon}>Coming Soon</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
