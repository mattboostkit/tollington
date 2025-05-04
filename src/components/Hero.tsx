import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlay?: boolean;
  height?: 'full' | 'large' | 'medium' | 'small';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  overlay = true,
  height = 'large',
}) => {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[600px] md:min-h-[700px]',
    medium: 'min-h-[400px] md:min-h-[500px]',
    small: 'min-h-[300px] md:min-h-[400px]',
  };

  return (
    <div
      className={`relative flex items-center justify-center ${heightClasses[height]} bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      )}
      
      <div className="container-custom relative z-10 text-center text-white pt-16">
        <motion.h1
          className="mb-6 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        
        {(ctaText || secondaryCtaText) && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {ctaText && ctaLink && (
              <Link to={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
            )}
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink} className="btn bg-white text-purple-800 hover:bg-gray-100 focus:ring-purple-500">
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;