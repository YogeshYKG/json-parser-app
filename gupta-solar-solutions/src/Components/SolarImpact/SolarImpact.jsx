import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  WbSunny,
  Autorenew,
  Paid,
} from '@mui/icons-material';
import styles from './SolarImpact.module.css';

const impacts = [
  {
    title: 'Reduced Carbon Footprint',
    description: 'Solar energy helps lower greenhouse gas emissions, making a positive impact on the planet.',
    icon: <Autorenew color="success" fontSize="large" />,
  },
  {
    title: 'Energy Independence',
    description: 'Generate your own electricity and reduce reliance on grid power and rising costs.',
    icon: <WbSunny color="warning" fontSize="large" />,
  },
  {
    title: 'Cost Savings',
    description: 'Save on electricity bills and get ROI within a few years of installation.',
    icon: <Paid color="primary" fontSize="large" />,
  },
];

const SolarImpact = () => {
  return (
    <div className={styles.impactSection}>
      <Typography variant="h4" align="center" className={styles.impactHeading}>
        Why Solar Makes a Difference
      </Typography>

      <div className={styles.impactWrapper}>
        {impacts.map((item, index) => (
          <div key={index} className={styles.impactCard}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <Typography variant="h6" className={styles.cardTitle}>
              {item.title}
            </Typography>
            <Typography variant="body2" className={styles.cardDesc}>
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarImpact;
