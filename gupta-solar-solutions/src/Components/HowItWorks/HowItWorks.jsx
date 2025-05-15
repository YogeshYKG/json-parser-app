import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import {
  Room,
  DesignServices,
  Construction,
  Build,
  Settings,
  ArrowForwardIos,
  ArrowBackIos,
} from "@mui/icons-material";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Site Visit",
    description:
      "We inspect your property to assess solar potential, shade, and roof condition.",
    icon: <Room fontSize="large" color="primary" />,
  },
  {
    title: "Planning",
    description:
      "We design a customized solar system and handle paperwork and approvals.",
    icon: <DesignServices fontSize="large" color="success" />,
  },
  {
    title: "Installation",
    description:
      "Our expert team completes the setup with testing and activation.",
    icon: <Construction fontSize="large" color="secondary" />,
  },
  {
    title: "Testing",
    description:
      "We ensure everything works optimally and meets safety standards.",
    icon: <Build fontSize="large" color="info" />,
  },
  {
    title: "Maintenance",
    description:
      "We provide ongoing support and maintenance to keep things running smoothly.",
    icon: <Settings fontSize="large" color="action" />,
  },
];

const HowItWorks = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    console.log(styles.howitworksSection);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.howitworksShow);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => stepsRef.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <div className={styles.howitworksSection}>
      <Typography
        variant="h4"
        align="center"
        className={styles.howitworksHeading}
      >
        How It Works
      </Typography>

      <div className={styles.howitworksTimeline}>
        <div className={styles.howitworksTimelineCapTop}></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.howitworksTimelineItem} ${
              index % 2 === 0 ? styles.howitworksLeft : styles.howitworksRight
            }`}
            ref={(el) => (stepsRef.current[index] = el)}
          >
            <div className={styles.howitworksTimelineDot}>
              <span className={styles.howitworksBlink}>{index + 1}</span>
              <span className={styles.howitworksTick}>✓</span>
            </div>
            <div
              className={`${styles.howitworksContent} ${
                index % 2 === 0 ? styles.alignRight : styles.alignLeft
              }`}
            >
              <div className={styles.howitworksIcon}>{step.icon}</div>
              <Typography variant="h6" className={styles.howitworksStepTitle}>
                {step.title}
              </Typography>
              <Typography variant="body2" className={styles.howitworksStepDesc}>
                {step.description}
              </Typography>
            </div>
          </div>
        ))}

        <div className={styles.howitworksTimelineCapBottom}></div>
      </div>
    </div>
  );
};

export default HowItWorks;
