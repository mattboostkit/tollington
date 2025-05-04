import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

import SEO from '../components/SEO';
import SanityBlockContent from '../components/SanityBlockContent';
import { fetchBlogPost, fetchBlogPosts } from '../utils/sanityClient';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;

      setIsLoading(true);
      try {
        const fetchedPost = await fetchBlogPost(slug);
        setPost(fetchedPost);

        // Fetch related posts (in a real app, this would filter by category)
        const fetchedRelatedPosts = await fetchBlogPosts(3);
        setRelatedPosts(fetchedRelatedPosts.filter(p => p.slug !== slug));
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-purple-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-purple-800 mb-4">
            Post Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = format(new Date(post.publishedAt), 'MMMM d, yyyy');

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt || post.title}
        image={post.featuredImage}
      />

      <div className="pt-24 pb-16 bg-white">
        <div className="container-custom">
          {/* Back to blog link */}
          <Link to="/blog" className="inline-flex items-center text-purple-700 hover:text-purple-800 mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to all posts
          </Link>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-8 h-96">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Post Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-purple-800">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center text-gray-600 text-sm gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{formattedDate}</span>
                  </div>

                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{post.estimatedReadingTime} min read</span>
                  </div>

                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>By {post.author?.name || 'Unknown Author'}</span>
                  </div>
                </div>

                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.categories.map((category: string) => (
                      <Link
                        key={category}
                        to={`/blog?category=${category}`}
                        className="bg-purple-100 text-purple-800 text-xs font-medium py-1 px-2 rounded-full"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Post Content */}
              <article className="prose prose-lg max-w-none">
                {typeof post.body === 'string' ? (
                  // Handle string content (from mock data)
                  post.body.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  // Handle Sanity block content
                  <SanityBlockContent blocks={post.body} />
                )}
              </article>

              {/* Share Links */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium mr-4">Share:</span>
                  <div className="flex space-x-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-700 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Author Bio */}
              {post.author && (
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-serif font-semibold mb-4 text-purple-800">
                    About the Author
                  </h3>
                  <div className="flex items-start">
                    {post.author.image && (
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                    )}
                    <div>
                      <p className="font-medium text-gray-900 mb-2">{post.author.name}</p>
                      {post.author.bio && (
                        <div className="text-gray-600 text-sm">
                          {typeof post.author.bio === 'string' ? (
                            <p>{post.author.bio}</p>
                          ) : (
                            <SanityBlockContent blocks={post.author.bio} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-semibold mb-4 text-purple-800">
                    Related Posts
                  </h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.slug} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <Link to={`/blog/${relatedPost.slug}`} className="group">
                          <h4 className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(relatedPost.publishedAt).toLocaleDateString('en-GB', {
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;