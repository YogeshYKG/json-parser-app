import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import {
  Room,
  DesignServices,
  Construction,
  Build,
  Settings,
  Description,
  EventAvailable,
} from "@mui/icons-material";

import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Explore Plans",
    description:
      "Compare our Basic, Premium, and Custom plans tailored to different needs and budgets.",
    icon: <Description fontSize="large" color="warning" />,
    keywords: ["Basic", "Premium", "Custom"],
    action: { label: "Compare Plans", link: "/plans" },
  },
  {
    title: "Schedule a Call",
    description:
      "Book a consultation via our calendar. Inquiry charge may apply for serious queries.",
    icon: <EventAvailable fontSize="large" color="primary" />,
    keywords: ["Booking", "Consultation"],
    action: { label: "Open Calendar", link: "/schedule" },
  },
  {
    title: "Site Visit",
    description:
      "We inspect your property to assess solar potential, shade, and roof condition.",
    icon: <Room fontSize="large" color="primary" />,
    keywords: ["Assessment", "On-site"],
  },
  {
    title: "Planning",
    description:
      "We design a customized solar system and handle paperwork and approvals.",
    icon: <DesignServices fontSize="large" color="success" />,
    keywords: ["Design", "Approval", "Blueprints"],
  },
  {
    title: "Installation",
    description:
      "Our expert team completes the setup with testing and activation.",
    icon: <Construction fontSize="large" color="secondary" />,
    keywords: ["Setup", "Hardware", "Activation"],
  },
  {
    title: "Testing",
    description:
      "We ensure everything works optimally and meets safety standards.",
    icon: <Build fontSize="large" color="info" />,
    keywords: ["Safety", "Performance", "Quality Check"],
  },
  {
    title: "Maintenance",
    description:
      "We provide ongoing support and maintenance to keep things running smoothly.",
    icon: <Settings fontSize="large" color="action" />,
    keywords: ["Support", "Monitoring", "Upkeep"],
    action: { label: "Contact Support", link: "/support" },
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

              {/* 🔹 Add Keywords */}
              {step.keywords && (
                <div className={styles.howitworksKeywords}>
                  {step.keywords.map((kw, i) => (
                    <span key={i} className={styles.keywordBadge}>
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              <Typography variant="body2" className={styles.howitworksStepDesc}>
                {step.description}
              </Typography>

              {/* 🔹 Add Action Button */}
              {step.action && (
                <a href={step.action.link} className={styles.stepActionLink}>
                  {step.action.label}
                </a>
              )}
            </div>
          </div>
        ))}

        <div className={styles.howitworksTimelineCapBottom}></div>
      </div>
    </div>
  );
};

export default HowItWorks;
