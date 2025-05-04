# Managing Your Site Logo with Sanity CMS

This guide explains how to upload and manage your site logo using Sanity CMS.

## Getting Started

The website now uses Sanity to manage site settings, including your logo. The Sanity Studio is included in this repository in the `tollington` directory.

### Running Sanity Studio

You can run Sanity Studio with:

```bash
npm run sanity
```

The Sanity Studio will be available at http://localhost:3333

## Initializing Site Settings

Before uploading a logo, you need to initialize the site settings in Sanity:

```bash
# Set your Sanity token as an environment variable
SANITY_TOKEN=your-token-here npm run init-settings
```

This will create a "Site Settings" document in Sanity with default values for your site title, description, and contact information.

## Uploading Your Logo

1. Log in to Sanity Studio
2. Click on "Site Settings" in the left sidebar
3. You should see a single document - click on it to edit
4. In the "Site Logo" field, click "Upload" to select and upload your logo
5. Optionally, upload a "Dark Mode Logo" for use on dark backgrounds
6. Click "Publish" to save your changes

## Logo Recommendations

- **Format**: PNG or SVG with transparent background is recommended
- **Size**: Aim for a width of 200-300px and a height of 80-100px
- **Resolution**: Use high-resolution images (2x for retina displays)
- **Dark Mode Logo**: Consider creating an alternative version with lighter colors for dark backgrounds

## How It Works

The website now includes a Logo component that:

1. Fetches the logo from Sanity when the site loads
2. Displays the appropriate logo based on context (light or dark background)
3. Falls back to a text-based logo if no image is available

## Font Changes

The header font has been changed to Manrope with -4% letter spacing as requested. This affects all headings throughout the site.

## Troubleshooting

If you encounter issues with your logo:

1. Check that the image was properly uploaded and published in Sanity
2. Verify that the image is in a web-compatible format (PNG, JPG, SVG)
3. Try clearing your browser cache
4. Check the browser console for any errors

For more help, refer to the [Sanity documentation](https://www.sanity.io/docs).
