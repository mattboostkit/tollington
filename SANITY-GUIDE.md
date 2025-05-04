# Sanity Integration Guide for Tollington Gospel Choir Website

This guide explains how to use Sanity CMS to manage the blog content for the Tollington Gospel Choir website.

## Getting Started

The website uses Sanity as a headless CMS to manage blog content. The Sanity Studio is included in this repository in the `tollington` directory.

### Running the Application

You can run both the website and Sanity Studio simultaneously with:

```bash
npm run dev:all
```

Or run them separately:

- Website: `npm run dev`
- Sanity Studio: `npm run sanity`

The Sanity Studio will be available at http://localhost:3333

## Content Structure

The Sanity schema includes the following content types:

### 1. Blog Posts

Blog posts are the main content type and include:

- Title
- Slug (URL path)
- Author (reference to Author)
- Main image
- Categories (references to Category)
- Published date
- Body content (rich text)

### 2. Authors

Authors represent the people who write blog posts:

- Name
- Slug
- Image
- Bio (rich text)

### 3. Categories

Categories help organize blog posts:

- Title
- Description

## Creating Content

### Creating a Blog Post

1. Log in to Sanity Studio
2. Click on "Posts" in the left sidebar
3. Click the "Create new" button
4. Fill in the required fields:
   - Title: The post title
   - Slug: Will be auto-generated from the title, but can be customized
   - Author: Select an existing author or create a new one
   - Main image: Upload an image for the post
   - Categories: Select one or more categories
   - Published at: Set the publication date
   - Body: Write the content using the rich text editor

5. Click "Publish" when ready

### Creating an Author

1. Click on "Authors" in the left sidebar
2. Click the "Create new" button
3. Fill in the required fields:
   - Name
   - Slug (auto-generated)
   - Image
   - Bio

4. Click "Publish"

### Creating a Category

1. Click on "Categories" in the left sidebar
2. Click the "Create new" button
3. Fill in the required fields:
   - Title
   - Description

4. Click "Publish"

## Rich Text Editor

The rich text editor in Sanity Studio allows you to:

- Format text (bold, italic)
- Add headings (H1-H4)
- Create lists
- Add links
- Insert images
- Add quotes

## Deployment

When you publish content in Sanity Studio, it becomes immediately available to the website. The website fetches content from Sanity's API in real-time.

## Troubleshooting

If you encounter issues with the Sanity integration:

1. Check the browser console for errors
2. Verify that the project ID in `src/utils/sanityClient.ts` matches your Sanity project
3. Make sure your Sanity dataset is named "production"
4. Check that CORS settings in Sanity allow requests from your website domain

For more help, refer to the [Sanity documentation](https://www.sanity.io/docs).
