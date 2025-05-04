import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '5cnyv1t8', // Tollington Sanity project ID
  dataset: 'production',
  useCdn: false, // Set to false during development to avoid CORS issues
  apiVersion: '2023-05-03',
});

export const fetchBlogPosts = async (
  limit: number = 10,
  offset: number = 0,
  category?: string
) => {
  try {
    let query = `*[_type == "post"] | order(publishedAt desc) [${offset}...${offset + limit}] {
      title,
      "slug": slug.current,
      "excerpt": array::join(string::split(pt::text(body), ".")[0..1], ".") + ".",
      "featuredImage": mainImage.asset->url,
      publishedAt,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      "author": author->name,
      "category": categories[0]->title
    }`;

    if (category) {
      query = `*[_type == "post" && references(*[_type == "category" && title == "${category}"]._id)] | order(publishedAt desc) [${offset}...${offset + limit}] {
        title,
        "slug": slug.current,
        "excerpt": array::join(string::split(pt::text(body), ".")[0..1], ".") + ".",
        "featuredImage": mainImage.asset->url,
        publishedAt,
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
        "author": author->name,
        "category": categories[0]->title
      }`;
    }

    const posts = await client.fetch(query);

    // If no posts are found in Sanity, fall back to mock data during development
    if (posts && posts.length > 0) {
      return posts;
    } else {
      console.warn('No posts found in Sanity, using mock data');
      return getMockBlogPosts();
    }
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error);
    return getMockBlogPosts();
  }
};

export const fetchBlogPost = async (slug: string) => {
  try {
    const query = `*[_type == "post" && slug.current == "${slug}"][0] {
      title,
      body,
      "featuredImage": mainImage.asset->url,
      publishedAt,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      "author": author->{name, "image": image.asset->url, bio},
      "categories": categories[]->title
    }`;

    const post = await client.fetch(query);

    if (post) {
      return post;
    } else {
      console.warn(`No post found with slug "${slug}", using mock data`);
      return getMockBlogPost(slug);
    }
  } catch (error) {
    console.error('Error fetching blog post from Sanity:', error);
    return getMockBlogPost(slug);
  }
};

export const fetchCategories = async () => {
  try {
    const query = `*[_type == "category"] {
      title,
      "count": count(*[_type == "post" && references(^._id)])
    }`;

    const categories = await client.fetch(query);

    if (categories && categories.length > 0) {
      return categories;
    } else {
      console.warn('No categories found in Sanity, using mock data');
      return getMockCategories();
    }
  } catch (error) {
    console.error('Error fetching categories from Sanity:', error);
    return getMockCategories();
  }
};

// Function to fetch site settings from Sanity
export const fetchSiteSettings = async () => {
  try {
    console.log('Executing Sanity query for site settings...');
    const query = `*[_type == "siteSettings"][0] {
      title,
      description,
      "logo": logo.asset->url,
      "darkLogo": darkLogo.asset->url,
      "favicon": favicon.asset->url,
      contactInfo,
      socialMedia
    }`;

    console.log('Using Sanity client with config:', client.config());
    const settings = await client.fetch(query);
    console.log('Raw settings response:', settings);

    if (settings) {
      console.log('Site settings found:', {
        title: settings.title,
        hasLogo: !!settings.logo,
        hasDarkLogo: !!settings.darkLogo
      });
      return settings;
    } else {
      console.warn('No site settings found in Sanity');
      return null;
    }
  } catch (error) {
    console.error('Error fetching site settings from Sanity:', error);
    console.error('Error details:', error instanceof Error ? error.message : String(error));
    return null;
  }
};

// Function to fetch events from Sanity
export const fetchEvents = async (status: 'upcoming' | 'past' = 'upcoming') => {
  try {
    const query = `*[_type == "event" && status == $status] | order(date ${status === 'upcoming' ? 'asc' : 'desc'}) {
      title,
      "slug": slug.current,
      date,
      time,
      location,
      "image": image.asset->url,
      description,
      details,
      ticketLink,
      eventType
    }`;

    const events = await client.fetch(query, { status });

    if (events && events.length > 0) {
      // Transform the data to match the Event interface
      return events.map((event: any) => ({
        id: event.slug,
        title: event.title,
        date: new Date(event.date),
        time: event.time,
        location: event.location,
        image: event.image,
        description: event.description,
        details: event.details,
        ticketLink: event.ticketLink
      }));
    } else {
      console.warn(`No ${status} events found in Sanity, using mock data`);
      return status === 'upcoming' ? getMockUpcomingEvents() : getMockPastEvents();
    }
  } catch (error) {
    console.error('Error fetching events from Sanity:', error);
    return status === 'upcoming' ? getMockUpcomingEvents() : getMockPastEvents();
  }
};

// Mock data functions to use until Sanity is set up
const getMockUpcomingEvents = () => {
  return upcomingEvents;
};

const getMockPastEvents = () => {
  return pastEvents;
};

// Import mock events data
import { upcomingEvents, pastEvents } from '../data/events';

// Mock blog data functions
const getMockBlogPosts = () => {
  return [
    {
      slug: "summer-concert-highlights",
      title: "Summer Concert Highlights",
      excerpt: "Relive the magical moments from our summer concert series that captivated audiences and lifted spirits.",
      publishedAt: new Date("2025-06-15"),
      author: "Emma Thompson",
      featuredImage: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Performances",
      estimatedReadingTime: 4
    },
    {
      slug: "new-members-welcome",
      title: "Welcome to Our New Members",
      excerpt: "We're thrilled to introduce the newest voices joining our choir this season. Meet the talented individuals bringing fresh energy.",
      publishedAt: new Date("2025-05-22"),
      author: "Michael Richards",
      featuredImage: "https://images.pexels.com/photos/8412420/pexels-photo-8412420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Community",
      estimatedReadingTime: 3
    },
    {
      slug: "gospel-workshop-success",
      title: "Gospel Workshop Success",
      excerpt: "Our recent gospel workshop brought together singers of all levels for a day of learning, sharing, and soulful music.",
      publishedAt: new Date("2025-04-10"),
      author: "James Wilson",
      featuredImage: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Workshops",
      estimatedReadingTime: 5
    },
    {
      slug: "behind-the-music",
      title: "Behind the Music: Our Choir's Creative Process",
      excerpt: "Explore how we select, arrange, and bring to life the powerful gospel songs in our repertoire.",
      publishedAt: new Date("2025-03-15"),
      author: "Olivia Parker",
      featuredImage: "https://images.pexels.com/photos/6173866/pexels-photo-6173866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Behind the Scenes",
      estimatedReadingTime: 6
    }
  ];
};

const getMockBlogPost = (slug: string) => {
  const posts = {
    "summer-concert-highlights": {
      title: "Summer Concert Highlights",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      featuredImage: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      publishedAt: new Date("2025-06-15"),
      estimatedReadingTime: 4,
      author: {
        name: "Emma Thompson",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Choir director and vocal coach with over 15 years of experience"
      },
      categories: ["Performances", "Events"]
    },
    "new-members-welcome": {
      title: "Welcome to Our New Members",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      featuredImage: "https://images.pexels.com/photos/8412420/pexels-photo-8412420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      publishedAt: new Date("2025-05-22"),
      estimatedReadingTime: 3,
      author: {
        name: "Michael Richards",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Community manager and choir tenor section leader"
      },
      categories: ["Community", "Announcements"]
    },
    "gospel-workshop-success": {
      title: "Gospel Workshop Success",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      featuredImage: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      publishedAt: new Date("2025-04-10"),
      estimatedReadingTime: 5,
      author: {
        name: "James Wilson",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Vocal coach and workshop facilitator"
      },
      categories: ["Workshops", "Education"]
    },
    "behind-the-music": {
      title: "Behind the Music: Our Choir's Creative Process",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      featuredImage: "https://images.pexels.com/photos/6173866/pexels-photo-6173866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      publishedAt: new Date("2025-03-15"),
      estimatedReadingTime: 6,
      author: {
        name: "Olivia Parker",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Music arranger and choir alto section leader"
      },
      categories: ["Behind the Scenes", "Music"]
    }
  };

  return posts[slug as keyof typeof posts] || null;
};

const getMockCategories = () => {
  return [
    { title: "Performances", count: 5 },
    { title: "Community", count: 3 },
    { title: "Workshops", count: 4 },
    { title: "Behind the Scenes", count: 2 },
    { title: "Events", count: 7 },
    { title: "Announcements", count: 3 },
    { title: "Music", count: 6 },
    { title: "Education", count: 3 },
  ];
};