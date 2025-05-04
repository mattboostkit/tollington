import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, Tag } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: Date;
  author: string;
  featuredImage: string;
  category: string;
  estimatedReadingTime: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  publishedAt,
  author,
  featuredImage,
  category,
  estimatedReadingTime,
}) => {
  const formattedDate = format(publishedAt, 'MMMM d, yyyy');

  return (
    <motion.article
      className="card h-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/blog/${slug}`} className="relative block h-52 overflow-hidden">
        <img
          src={featuredImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-purple-700 text-white text-xs font-medium py-1 px-2 rounded">
          {category}
        </div>
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{estimatedReadingTime} min read</span>
          </div>
        </div>
        
        <h3 className="font-serif text-xl mb-2 hover:text-purple-700 transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          
          <Link
            to={`/blog/${slug}`}
            className="text-purple-700 font-medium hover:text-purple-800"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;