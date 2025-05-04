import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

export const fetchBlogPosts = async (
  limit: number = 10,
  offset: number = 0,
  category?: string
) => {
  let query = `*[_type == "post"] | order(publishedAt desc) [${offset}...${offset + limit}] {
    title,
    slug,
    excerpt,
    "featuredImage": mainImage.asset->url,
    publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    "author": author->name,
    "category": categories[0]->title
  }`;

  if (category) {
    query = `*[_type == "post" && references(*[_type == "category" && title == "${category}"]._id)] | order(publishedAt desc) [${offset}...${offset + limit}] {
      title,
      slug,
      excerpt,
      "featuredImage": mainImage.asset->url,
      publishedAt,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      "author": author->name,
      "category": categories[0]->title
    }`;
  }

  // For now, we'll use mock data since Sanity is not set up yet
  return getMockBlogPosts();
};

export const fetchBlogPost = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
    title,
    body,
    "featuredImage": mainImage.asset->url,
    publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    "author": author->{name, "image": image.asset->url, bio},
    "categories": categories[]->title
  }`;

  // For now, we'll use mock data since Sanity is not set up yet
  return getMockBlogPost(slug);
};

export const fetchCategories = async () => {
  const query = `*[_type == "category"] {
    title,
    "count": count(*[_type == "post" && references(^._id)])
  }`;

  // For now, we'll use mock data since Sanity is not set up yet
  return getMockCategories();
};

// Mock data functions to use until Sanity is set up
const getMockBlogPosts = () => {
  return [
    {
      slug: "summer-concert-highlights",
      title: "Summer Concert Highlights",
      excerpt: "Relive the magical moments from our summer concert series that captivated audiences and lifted spirits.",
      publishedAt: new Date("2023-06-15"),
      author: "Emma Thompson",
      featuredImage: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Performances",
      estimatedReadingTime: 4
    },
    {
      slug: "new-members-welcome",
      title: "Welcome to Our New Members",
      excerpt: "We're thrilled to introduce the newest voices joining our choir this season. Meet the talented individuals bringing fresh energy.",
      publishedAt: new Date("2023-05-22"),
      author: "Michael Richards",
      featuredImage: "https://images.pexels.com/photos/8412420/pexels-photo-8412420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Community",
      estimatedReadingTime: 3
    },
    {
      slug: "gospel-workshop-success",
      title: "Gospel Workshop Success",
      excerpt: "Our recent gospel workshop brought together singers of all levels for a day of learning, sharing, and soulful music.",
      publishedAt: new Date("2023-04-10"),
      author: "James Wilson",
      featuredImage: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Workshops",
      estimatedReadingTime: 5
    },
    {
      slug: "behind-the-music",
      title: "Behind the Music: Our Choir's Creative Process",
      excerpt: "Explore how we select, arrange, and bring to life the powerful gospel songs in our repertoire.",
      publishedAt: new Date("2023-03-15"),
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
      publishedAt: new Date("2023-06-15"),
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
      publishedAt: new Date("2023-05-22"),
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
      publishedAt: new Date("2023-04-10"),
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
      publishedAt: new Date("2023-03-15"),
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