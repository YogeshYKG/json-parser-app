import React from 'react';
import { Typography, Avatar } from '@mui/material';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Ravi Sharma',
    location: 'Jaipur, Rajasthan',
    quote:
      'Switching to solar with this company was the best decision. We’re saving money every month and doing our bit for the planet.',
    image: 'https://www.svgrepo.com/show/521107/man-user.svg',
  },
  {
    name: 'Sunita Mehta',
    location: 'Udaipur, Rajasthan',
    quote:
      'Their installation team was professional and fast. I recommend them to all my neighbors!',
    image: 'https://www.svgrepo.com/show/521138/woman-user.svg',
  },
  {
    name: 'Deepak Yadav',
    location: 'Kota, Rajasthan',
    quote:
      'We were skeptical at first, but the savings and support have been outstanding. Highly reliable service.',
    image: 'https://www.svgrepo.com/show/521088/user-avatar.svg',
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialSection}>
      <Typography variant="h4" align="center" className={styles.testimonialHeading}>
        Success Stories from Our Customers
      </Typography>

      <div className={styles.testimonialWrapper}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <Avatar
              src={testimonial.image}
              alt={testimonial.name}
              sx={{ width: 64, height: 64, marginBottom: '1rem' }}
            />
            <Typography variant="body1" className={styles.quote}>
              “{testimonial.quote}”
            </Typography>
            <Typography variant="subtitle1" className={styles.name}>
              {testimonial.name}
            </Typography>
            <Typography variant="caption" className={styles.location}>
              {testimonial.location}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
