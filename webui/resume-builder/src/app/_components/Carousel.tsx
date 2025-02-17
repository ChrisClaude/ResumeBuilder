import React, { useMemo } from 'react';
import { GoDotFill } from 'react-icons/go';

const Carousel = () => {
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
      }
    ],
    []
  );
  return (
    <div className='flex flex-col items-center gap-y-24'>
      <div className='w-full bg-gray-500 flex'>
        {slides.map((slide, index) => (
          <div key={index} className='w-screen p-24'>
            <h1 className="text-5xl">{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center">
        {slides.map((slide, index) => (
          <GoDotFill key={index} size={40} className='hover:cursor-pointer' />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
