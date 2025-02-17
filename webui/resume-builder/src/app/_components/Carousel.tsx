'use client';
import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { GoDotFill } from 'react-icons/go';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo<
    {
      title: string;
      description: string;
    }[]
  >(
    () => [
      {
        title: 'AI Resume Builder',
        description: 'Build your resume in a few clicks',
      },
      {
        title: 'Leverage AI',
        description: 'Improve the content of your resume with cutting-edge AI technology',
      },
      {
        title: 'Stand out',
        description: 'Make your resume stand out with a unique design',
      },
    ],
    []
  );

  const handleDotClick = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsPaused(true); // Pause auto-sliding when user interacts

    // Resume auto-sliding after 7 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 7000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="flex flex-col items-center gap-y-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 p-24 text-center">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        {slides.map((_, index) => (
          <GoDotFill
            key={index}
            size={40}
            className={`hover:cursor-pointer transition-colors duration-300 ${
              currentSlide === index ? 'text-blue-500' : 'text-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
