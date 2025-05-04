import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  image,
}) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Quote size={36} className="text-amber-400 mb-4" />
      
      <blockquote className="mb-6 text-gray-700 italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        
        <div>
          <p className="font-medium text-purple-800">{name}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;