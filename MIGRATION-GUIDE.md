# Migrating Mock Data to Sanity

This guide explains how to migrate the mock blog data from the website to Sanity CMS.

## Prerequisites

1. Node.js installed
2. Access to the Sanity project

## Step 1: Generate a Sanity API Token

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select the "Tollington" project
3. Navigate to "API" in the sidebar
4. Click on "Tokens" tab
5. Click "Add API token"
6. Name it something like "Data Migration"
7. Set the permissions to "Editor" (this allows writing data)
8. Click "Create token"
9. Copy the token (you'll only see it once)

## Step 2: Run the Migration Script

Run the migration script with your Sanity token:

```bash
# On Windows PowerShell
$env:SANITY_TOKEN="your-token-here"; npm run migrate-data

# On Windows Command Prompt
set SANITY_TOKEN=your-token-here && npm run migrate-data

# On macOS/Linux
SANITY_TOKEN=your-token-here npm run migrate-data
```

## What the Migration Script Does

The script performs the following actions:

1. Creates all the categories from the mock data
2. Creates all the authors with their images and bios
3. Creates all the blog posts, linking them to the appropriate authors and categories
4. Uploads all images to the Sanity asset store

## Troubleshooting

If you encounter any issues:

1. Check the console output for error messages
2. Verify that your Sanity token has the correct permissions
3. Make sure your Sanity project is properly set up
4. Check your internet connection (needed for uploading images)

## After Migration

After running the migration script:

1. Check if the data was successfully migrated:
   ```bash
   npm run check-data
   ```

2. Open Sanity Studio (`npm run sanity`)
3. Verify that all content has been properly imported
4. Make any necessary adjustments to the imported content

## Security Note

- Keep your Sanity token secure and don't commit it to version control
- Delete or rotate the token after migration if it's no longer needed
