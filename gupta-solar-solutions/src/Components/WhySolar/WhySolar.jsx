import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  Savings,
  EmojiObjects,
  EnergySavingsLeaf,
  TrendingUp,
} from '@mui/icons-material';
import styles from './WhySolar.module.css';

const benefits = [
  {
    title: 'Cost Savings',
    description: 'Reduce electricity bills significantly over time.',
    icon: <Savings color="primary" fontSize="large" />,
  },
  {
    title: 'Government Subsidies',
    description: 'Avail incentives and tax credits on solar adoption.',
    icon: <EmojiObjects color="warning" fontSize="large" />,
  },
  {
    title: 'Clean Energy Source',
    description: 'Cut down on carbon emissions and support clean energy.',
    icon: <EnergySavingsLeaf color="success" fontSize="large" />,
  },
  {
    title: 'Long-term ROI',
    description: 'Increase property value with a future-ready investment.',
    icon: <TrendingUp color="secondary" fontSize="large" />,
  },
];

const WhySolar = () => {
  return (
    <div className={styles.whySolarSection}>
      <Typography variant="h4" align="center" className={styles.whySolarHeading}>
        Why Solar?
      </Typography>

      <div className={styles.benefitsWrapper}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.whysolarbenefitCard}>
            <div className={styles.iconWrapper}>{benefit.icon}</div>
            <Typography variant="h6" className={styles.cardTitle}>
              {benefit.title}
            </Typography>
            <Typography variant="body2" className={styles.cardDesc}>
              {benefit.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySolar;
