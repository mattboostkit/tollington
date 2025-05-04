// Migration script to import event data into Sanity
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

// Event data with updated 2025 dates
const upcomingEvents = [
  {
    id: 'summer-concert-2025',
    title: 'Summer Concert 2025',
    date: new Date('2025-07-15'),
    time: '7:00 PM - 9:30 PM',
    location: 'St. Mary\'s Church, London',
    image: 'https://images.pexels.com/photos/210766/pexels-photo-210766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Join us for a magical evening of uplifting gospel music at our annual summer concert.',
    details: 'Our annual summer concert returns with a celebration of gospel classics and contemporary Christian music. The evening will feature our full choir, special guest soloists, and a backing band of London\'s finest musicians. Refreshments will be available during intermission.',
    ticketLink: '#',
    eventType: 'concert',
    status: 'upcoming'
  },
  {
    id: 'gospel-workshop-june',
    title: 'Gospel Workshop',
    date: new Date('2025-06-24'),
    time: '10:00 AM - 4:00 PM',
    location: 'Tollington Community Centre',
    image: 'https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Learn gospel singing techniques and repertoire in this day-long workshop open to all skill levels.',
    details: 'This workshop is designed for singers of all levels who want to explore gospel music. Our experienced vocal coaches will guide you through vocal techniques, harmony, and the distinctive style of gospel singing. By the end of the day, participants will have learned several gospel songs to perform together.',
    ticketLink: '#',
    eventType: 'workshop',
    status: 'upcoming'
  },
  {
    id: 'charity-fundraiser',
    title: 'Charity Fundraiser',
    date: new Date('2025-08-05'),
    time: '3:00 PM - 6:00 PM',
    location: 'Finsbury Park',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An outdoor performance to raise funds for local homeless shelters.',
    details: 'Join us for an afternoon of music in the park as we raise funds for local homeless shelters. Bring your picnic blankets and enjoy gospel music in the beautiful surroundings of Finsbury Park. Food vendors will be present, and all proceeds from ticket sales will go directly to our partner charities.',
    ticketLink: '#',
    eventType: 'fundraiser',
    status: 'upcoming'
  }
];

const pastEvents = [
  {
    id: 'easter-celebration',
    title: 'Easter Celebration Concert',
    date: new Date('2024-04-16'),
    time: '6:30 PM - 8:30 PM',
    location: 'All Saints Church, London',
    image: 'https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A special Easter concert celebrating hope and renewal through gospel music.',
    eventType: 'concert',
    status: 'past'
  },
  {
    id: 'black-history-month',
    title: 'Black History Month Celebration',
    date: new Date('2024-10-22'),
    time: '7:00 PM - 9:00 PM',
    location: 'Hackney Town Hall',
    image: 'https://images.pexels.com/photos/2228568/pexels-photo-2228568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A concert honoring the rich tradition of gospel music and its cultural significance.',
    eventType: 'concert',
    status: 'past'
  },
  {
    id: 'christmas-carol-service',
    title: 'Christmas Carol Service',
    date: new Date('2024-12-18'),
    time: '5:00 PM - 7:00 PM',
    location: 'St. Paul\'s Cathedral',
    image: 'https://images.pexels.com/photos/6141914/pexels-photo-6141914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A festive evening of traditional carols and contemporary gospel Christmas music.',
    eventType: 'concert',
    status: 'past'
  }
];

// Helper function to convert string to Sanity block content
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

// Main migration function
async function migrateEvents() {
  try {
    console.log('Starting event migration...');
    
    // Combine all events
    const allEvents = [...upcomingEvents, ...pastEvents];
    
    // Create events
    for (const event of allEvents) {
      // Check if event already exists
      const existingEvent = await client.fetch(
        `*[_type == "event" && slug.current == $slug][0]`,
        { slug: event.id }
      );
      
      if (existingEvent) {
        console.log(`Event "${event.title}" already exists, skipping...`);
        continue;
      }
      
      // Create the event
      const newEvent = await client.create({
        _type: 'event',
        title: event.title,
        slug: {
          _type: 'slug',
          current: event.id
        },
        date: event.date.toISOString(),
        time: event.time,
        location: event.location,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: await uploadImage(event.image, `event-${event.id}`)
          }
        },
        description: event.description,
        details: event.details ? stringToBlocks(event.details) : undefined,
        ticketLink: event.ticketLink,
        eventType: event.eventType,
        status: event.status
      });
      
      console.log(`Created event: ${event.title}`);
    }
    
    console.log('Event migration completed successfully!');
  } catch (error) {
    console.error('Event migration failed:', error);
  }
}

// Run the migration
if (process.env.SANITY_TOKEN) {
  migrateEvents();
} else {
  console.error('SANITY_TOKEN environment variable is required. Please set it before running this script.');
  console.log('Example: SANITY_TOKEN=your-token node scripts/migrate-events.js');
}
