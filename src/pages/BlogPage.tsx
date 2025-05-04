import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import { fetchBlogPosts, fetchCategories } from '../utils/sanityClient';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
        
        const fetchedPosts = await fetchBlogPosts(10, 0, activeCategory || undefined);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [activeCategory]);

  const filteredPosts = posts.filter(post => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled through the filteredPosts computed value
  };

  return (
    <>
      <SEO 
        title="Blog" 
        description="Stay updated with our choir's latest news, events, and insights on gospel music through our blog."
      />

      <Hero
        title="Our Blog"
        subtitle="News, stories, and insights from Tollington Gospel Choir"
        image="https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Blog Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
                </div>
              ) : filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      publishedAt={new Date(post.publishedAt)}
                      author={post.author}
                      featuredImage={post.featuredImage}
                      category={post.category}
                      estimatedReadingTime={post.estimatedReadingTime}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-purple-800">
                    No posts found
                  </h3>
                  <p className="text-gray-600">
                    {searchQuery
                      ? `No posts matching "${searchQuery}"`
                      : activeCategory
                      ? `No posts in the "${activeCategory}" category`
                      : 'No blog posts available'}
                  </p>
                  {(searchQuery || activeCategory) && (
                    <button
                      className="mt-4 text-purple-700 font-medium"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory(null);
                      }}
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Search Box */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-serif font-semibold mb-4 text-purple-800">
                  Search Articles
                </h3>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pr-10 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors border-gray-300"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      <Search size={18} />
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-serif font-semibold mb-4 text-purple-800">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      className={`text-left w-full ${
                        activeCategory === null
                          ? 'font-medium text-purple-700'
                          : 'text-gray-700 hover:text-purple-700'
                      }`}
                      onClick={() => handleCategoryClick(null)}
                    >
                      All Categories
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.title}>
                      <button
                        className={`text-left w-full flex justify-between items-center ${
                          activeCategory === category.title
                            ? 'font-medium text-purple-700'
                            : 'text-gray-700 hover:text-purple-700'
                        }`}
                        onClick={() => handleCategoryClick(category.title)}
                      >
                        <span>{category.title}</span>
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif font-semibold mb-4 text-purple-800">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <li key={post.slug} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <Link to={`/blog/${post.slug}`} className="group">
                        <h4 className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-purple-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p
              className="text-purple-100 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stay updated with our latest news, events, and blog posts delivered straight to your inbox.
            </motion.p>
            
            <motion.form
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                required
              />
              <button
                type="submit"
                className="btn-secondary whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
            
            <motion.p
              className="text-purple-200 text-sm mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;