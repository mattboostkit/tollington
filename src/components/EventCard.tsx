import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface EventCardProps {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  image: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  image,
  description,
}) => {
  const formattedDate = format(date, 'EEEE, do MMMM yyyy');

  return (
    <motion.div
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-serif text-xl mb-3 text-purple-800">{title}</h3>
        
        <div className="space-y-2 mb-4 text-sm text-gray-700">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-amber-500" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-amber-500" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-amber-500" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="mt-auto">
          <Link
            to={`/events/${id}`}
            className="inline-block text-purple-700 font-medium hover:text-purple-800 underline"
          >
            Event Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;