// Migration script to import mock data into Sanity
import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import https from 'https';
import path from 'path';

// Use node-fetch for older Node.js versions that don't have global fetch
let fetch;
try {
  fetch = global.fetch;
} catch (e) {
  console.log('Global fetch not available, using node-fetch');
  // This is a fallback for older Node.js versions
  const download = (url, dest) => {
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(dest);
      https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {
          reject(err);
        });
      });
    });
  };

  fetch = async (url) => {
    const tempPath = path.join('temp', `temp-${Date.now()}`);
    if (!fs.existsSync('temp')) {
      fs.mkdirSync('temp');
    }

    await download(url, tempPath);
    const buffer = fs.readFileSync(tempPath);
    fs.unlinkSync(tempPath);

    return {
      arrayBuffer: async () => buffer
    };
  };
}

// Sanity client configuration
const client = createClient({
  projectId: '5cnyv1t8',
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // You'll need to provide this as an environment variable
  apiVersion: '2023-05-03',
  useCdn: false, // We need to write data, so we can't use the CDN
});

// Mock data from the application
const mockPosts = {
  "summer-concert-highlights": {
    title: "Summer Concert Highlights",
    slug: "summer-concert-highlights",
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
    slug: "new-members-welcome",
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
    slug: "gospel-workshop-success",
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
    slug: "behind-the-music",
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

const mockCategories = [
  { title: "Performances", description: "Live performances and concerts by the choir" },
  { title: "Community", description: "News and updates about our choir community" },
  { title: "Workshops", description: "Educational workshops and training sessions" },
  { title: "Behind the Scenes", description: "A look at what goes on behind the scenes" },
  { title: "Events", description: "Upcoming and past events" },
  { title: "Announcements", description: "Important announcements from the choir" },
  { title: "Music", description: "All about the music we perform and create" },
  { title: "Education", description: "Educational content about gospel music" }
];

// Helper function to convert string body to Sanity block content
function stringToBlocks(text) {
  if (!text) return [];

  return text.split('\n\n').map(paragraph => ({
    _type: 'block',
    _key: uuidv4(),
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: uuidv4(),
        text: paragraph,
        marks: []
      }
    ]
  }));
}

// Helper function to create a slug from a string
function createSlug(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// Main migration function
async function migrateData() {
  try {
    console.log('Starting migration...');

    // Step 1: Create categories
    console.log('Creating categories...');
    const categoryMap = {};

    for (const category of mockCategories) {
      // Check if category already exists
      const existingCategory = await client.fetch(
        `*[_type == "category" && title == $title][0]`,
        { title: category.title }
      );

      if (existingCategory) {
        console.log(`Category "${category.title}" already exists, skipping...`);
        categoryMap[category.title] = existingCategory._id;
        continue;
      }

      const newCategory = await client.create({
        _type: 'category',
        title: category.title,
        description: category.description
      });

      categoryMap[category.title] = newCategory._id;
      console.log(`Created category: ${category.title}`);
    }

    // Step 2: Create authors
    console.log('Creating authors...');
    const authorMap = {};
    const authors = [...new Set(Object.values(mockPosts).map(post => post.author.name))];

    for (const authorName of authors) {
      // Find the author data
      const authorData = Object.values(mockPosts).find(post => post.author.name === authorName).author;

      // Check if author already exists
      const existingAuthor = await client.fetch(
        `*[_type == "author" && name == $name][0]`,
        { name: authorName }
      );

      if (existingAuthor) {
        console.log(`Author "${authorName}" already exists, skipping...`);
        authorMap[authorName] = existingAuthor._id;
        continue;
      }

      // Create the author
      const newAuthor = await client.create({
        _type: 'author',
        name: authorName,
        slug: {
          _type: 'slug',
          current: createSlug(authorName)
        },
        bio: stringToBlocks(authorData.bio),
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: await uploadImage(authorData.image, `author-${createSlug(authorName)}`)
          }
        }
      });

      authorMap[authorName] = newAuthor._id;
      console.log(`Created author: ${authorName}`);
    }

    // Step 3: Create blog posts
    console.log('Creating blog posts...');

    for (const [slug, post] of Object.entries(mockPosts)) {
      // Check if post already exists
      const existingPost = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]`,
        { slug }
      );

      if (existingPost) {
        console.log(`Post "${post.title}" already exists, skipping...`);
        continue;
      }

      // Get category references
      const categoryRefs = post.categories.map(cat => ({
        _type: 'reference',
        _key: uuidv4(),
        _ref: categoryMap[cat]
      }));

      // Create the post
      const newPost = await client.create({
        _type: 'post',
        title: post.title,
        slug: {
          _type: 'slug',
          current: slug
        },
        author: {
          _type: 'reference',
          _ref: authorMap[post.author.name]
        },
        mainImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: await uploadImage(post.featuredImage, `post-${slug}`)
          }
        },
        categories: categoryRefs,
        publishedAt: post.publishedAt.toISOString(),
        body: stringToBlocks(post.body)
      });

      console.log(`Created post: ${post.title}`);
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Helper function to upload an image from a URL
async function uploadImage(url, filename) {
  try {
    console.log(`Uploading image: ${url}`);

    // Fetch the image
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    // Upload to Sanity
    const result = await client.assets.upload('image', Buffer.from(buffer), {
      filename
    });

    return result._id;
  } catch (error) {
    console.error(`Failed to upload image ${url}:`, error);
    throw error;
  }
}

// Run the migration
if (process.env.SANITY_TOKEN) {
  migrateData();
} else {
  console.error('SANITY_TOKEN environment variable is required. Please set it before running this script.');
  console.log('Example: SANITY_TOKEN=your-token node scripts/migrate-mock-data.js');
}
