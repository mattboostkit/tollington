// Script to initialize site settings in Sanity
import { createClient } from '@sanity/client';

// Sanity client configuration
const client = createClient({
  projectId: '5cnyv1t8',
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // You'll need to provide this as an environment variable
  apiVersion: '2023-05-03',
  useCdn: false, // We need to write data, so we can't use the CDN
});

// Default site settings
const defaultSettings = {
  _type: 'siteSettings',
  title: 'Tollington Gospel Choir',
  description: 'Bringing musical joy to the community through gospel music since 2008.',
  contactInfo: {
    address: "St Saviour's Church, Hanley Road, London N4 3DQ",
    email: "tollingtongospelchoir@gmail.com",
    phone: "020 7123 4567"
  },
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com"
  }
};

// Main function to initialize site settings
async function initSiteSettings() {
  try {
    console.log('Checking for existing site settings...');
    
    // Check if site settings already exist
    const existingSettings = await client.fetch('*[_type == "siteSettings"][0]');
    
    if (existingSettings) {
      console.log('Site settings already exist. Updating...');
      
      // Update existing settings
      await client.patch(existingSettings._id)
        .set({
          title: defaultSettings.title,
          description: defaultSettings.description,
          contactInfo: defaultSettings.contactInfo,
          socialMedia: defaultSettings.socialMedia
        })
        .commit();
      
      console.log('Site settings updated successfully!');
    } else {
      console.log('No site settings found. Creating new settings...');
      
      // Create new settings
      const result = await client.create(defaultSettings);
      
      console.log(`Site settings created with ID: ${result._id}`);
    }
    
    console.log('Site settings initialization completed!');
    console.log('You can now upload a logo in the Sanity Studio under "Site Settings".');
  } catch (error) {
    console.error('Error initializing site settings:', error);
  }
}

// Run the initialization
if (process.env.SANITY_TOKEN) {
  initSiteSettings();
} else {
  console.error('SANITY_TOKEN environment variable is required. Please set it before running this script.');
  console.log('Example: SANITY_TOKEN=your-token node scripts/init-site-settings.js');
}
