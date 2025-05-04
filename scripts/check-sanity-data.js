// Script to check if data exists in Sanity
import { createClient } from '@sanity/client';

// Sanity client configuration
const client = createClient({
  projectId: '5cnyv1t8',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
});

async function checkData() {
  try {
    console.log('Checking Sanity data...');

    // Check categories
    const categories = await client.fetch('*[_type == "category"]');
    console.log(`Found ${categories.length} categories`);

    // Check authors
    const authors = await client.fetch('*[_type == "author"]');
    console.log(`Found ${authors.length} authors`);

    // Check posts
    const posts = await client.fetch('*[_type == "post"]');
    console.log(`Found ${posts.length} posts`);

    // Print details of posts
    if (posts.length > 0) {
      console.log('\nPost details:');
      posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title} (slug: ${post.slug?.current})`);
      });
    }

    // Check events
    const upcomingEvents = await client.fetch('*[_type == "event" && status == "upcoming"]');
    console.log(`\nFound ${upcomingEvents.length} upcoming events`);

    const pastEvents = await client.fetch('*[_type == "event" && status == "past"]');
    console.log(`Found ${pastEvents.length} past events`);

    // Print details of events
    if (upcomingEvents.length > 0) {
      console.log('\nUpcoming event details:');
      upcomingEvents.forEach((event, index) => {
        const eventDate = new Date(event.date).toLocaleDateString();
        console.log(`${index + 1}. ${event.title} (${eventDate}) - ${event.location}`);
      });
    }

    if (pastEvents.length > 0) {
      console.log('\nPast event details:');
      pastEvents.forEach((event, index) => {
        const eventDate = new Date(event.date).toLocaleDateString();
        console.log(`${index + 1}. ${event.title} (${eventDate}) - ${event.location}`);
      });
    }

    console.log('\nCheck completed!');
  } catch (error) {
    console.error('Error checking data:', error);
  }
}

checkData();
