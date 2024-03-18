'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { IconButton } from '@/components/Button';

import styles from './Carousel.module.scss';

type CarouselProps = {
  className?: string;
  children: React.ReactNode[];
  cardsPerSlide?: number;
  slideTimeInSeconds?: number;
};

function Carousel({
  className,
  children,
  slideTimeInSeconds,
  cardsPerSlide = 1,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const startSliding = useCallback(() => {
    if (slideTimeInSeconds && slideTimeInSeconds > 0) {
      const timer = setInterval(() => {
        setCurrentSlide(
          (prevSlide) =>
            (prevSlide + 1) %
            Math.ceil(React.Children.count(children) / cardsPerSlide),
        );
      }, slideTimeInSeconds * 1000);
      intervalIdRef.current = timer;
    }
  }, [cardsPerSlide, children, slideTimeInSeconds]);

  useEffect(() => {
    startSliding();
    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, [children, slideTimeInSeconds, startSliding]);

  const handleIndicatorClick = (i: number) => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    setCurrentSlide(i);
    startSliding();
  };

  const stopSliding = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  };

  const resumeSliding = () => {
    if (
      !intervalIdRef.current &&
      slideTimeInSeconds &&
      slideTimeInSeconds > 0
    ) {
      startSliding();
    }
  };

  const totalSlides = Math.ceil(React.Children.count(children) / cardsPerSlide);

  return (
    <div
      className={`${styles.carouselContainer} ${className}`}
      onMouseEnter={stopSliding}
      onMouseLeave={resumeSliding}
    >
      <IconButton
        className={styles.arrow}
        disabled={currentSlide === 0}
        icon={BsChevronLeft}
        onClick={() => handleIndicatorClick(currentSlide - 1)}
      />
      <div className={styles.carouselSlidesContainer}>
        <div
          className={styles.carouselSlides}
          style={{
            transform: `translateX(-${100 * currentSlide}%)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={styles.carouselSlide}
              style={{
                flex: `1 0 ${100 / cardsPerSlide}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
        <div className={styles.carouselIndicators}>
          {Array(totalSlides)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.carouselIndicator} ${
                  i === currentSlide ? styles.active : ''
                }`}
                onClick={() => handleIndicatorClick(i)}
              />
            ))}
        </div>
      </div>
      <IconButton
        className={styles.arrow}
        disabled={currentSlide === totalSlides - 1}
        icon={BsChevronRight}
        onClick={() => handleIndicatorClick(currentSlide + 1)}
      />
    </div>
  );
}

export default Carousel;
