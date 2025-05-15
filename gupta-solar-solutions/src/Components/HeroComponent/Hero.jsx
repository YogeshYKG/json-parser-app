// Hero.jsx
import React from 'react';
import styles from '../../Routes/HomePage/HomePage.module.css';

// Images 
import heroBannerImage from '../../assets/BannerImages/HeroBanner.jpg';
// Icons
import factoryIcon from '../../assets/IconsImages/Factory.png';
import buildingIcon from '../../assets/IconsImages/Building.png';
import officesIcon from '../../assets/IconsImages/Offices.png';

const cardData = [
  {
    delay: '0.2s',
    bgColor: styles.cardBlue,
    title: 'Homes & Housing Society',
    image: officesIcon,
    link: 'homes-housing-society.html',
    
    description:
      'By installing solar power plant on roofs of homes and housing societies, you can effectively lower your electricity costs, promote sustainability, and play a part in fostering a more environmentally conscious community.',
  },
  {
    delay: '0.4s',
    bgColor: styles.cardOrange,
    title: 'Commercial',
    image: buildingIcon,
    link: 'commercial.html',
    description:
      'Solar rooftop systems in commercial spaces offer substantial benefits, including reduced electricity expenses, decreased operational expenditures, and a positive impact on environmental sustainability within the community.',
  },
  {
    delay: '0.6s',
    bgColor: styles.cardTeal,
    title: 'Industrial',
    image: factoryIcon,
    link: 'industrial.html',
    description:
      'Implementing solar rooftop solutions in industrial settings can result in significant financial benefits, including reduced electricity expenses, enhanced energy reliability, and a commitment to environmental stewardship.',
  },
];

const HeroCard = ({ delay, bgColor, title, image, link, description }) => (
    <div
        className={`${styles.customCardCol} col-lg-4 col-md-6 m-t30 wow fadeInUp`}
        data-wow-delay={delay}
        style={{
        visibility: 'visible',
        animationDelay: delay,
        animationName: 'fadeInUp',
        }}
      >
        <div className={`${styles.card} ${bgColor}`}>
            <img src={image} alt={title} className={`${styles.cardImage}`} />
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardText}>{description}</p>
            <a className={styles.cardButton} href={link}>
                Know More &gt;&gt;
            </a>
        </div>
    </div>
  
);

const Hero = () => {
  return (
    <div className={styles.mainBnrOne}>
      <section
        className={`section-wrapper2 content-inner-2 overlay-black-middle background-luminosity bg-dark ${styles.sectionWrapper}`}
        style={{ '--hero-bg': `url(${heroBannerImage})` }}
      >
        <div className={`container ${styles.sectionHead} `}>
          <div
            className={`text-center wow fadeInUp ${styles.solarizeHead}`}
            data-wow-delay="0.2s"
            style={{
              visibility: 'visible',
              animationDelay: '0.2s',
              animationName: 'fadeInUp',
            }}
          >
            <h2 className={`title text-white ${styles.solarize}`}>Solarize</h2>
            <h3 className={`text-white ${styles.solarize2}`}>your</h3>
          </div>

          <div className={`row justify-content-center ${styles.cardParent}`}>
            {cardData.map((card, idx) => (
              <HeroCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
