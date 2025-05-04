# Managing Events with Sanity CMS

This guide explains how to manage events for the Tollington Gospel Choir website using Sanity CMS.

## Getting Started

The website uses Sanity as a headless CMS to manage event content. The Sanity Studio is included in this repository in the `tollington` directory.

### Running Sanity Studio

You can run Sanity Studio with:

```bash
npm run sanity
```

The Sanity Studio will be available at http://localhost:3333

## Event Structure

The Sanity schema for events includes the following fields:

- **Title**: The name of the event
- **Slug**: URL-friendly identifier (auto-generated from title)
- **Date**: When the event takes place
- **Time**: Time range (e.g., "7:00 PM - 9:30 PM")
- **Location**: Where the event takes place
- **Image**: Featured image for the event
- **Short Description**: Brief summary (appears in event cards)
- **Full Details**: Rich text content with more information
- **Ticket Link**: URL to purchase tickets (optional)
- **Event Type**: Category of event (concert, workshop, fundraiser, etc.)
- **Status**: Whether the event is upcoming or past

## Creating Events

### Adding a New Event

1. Log in to Sanity Studio
2. Click on "Events" in the left sidebar
3. Click the "Create new" button
4. Fill in the required fields:
   - Title: The event name
   - Slug: Will be auto-generated from the title
   - Date: Select the event date
   - Time: Enter the time range
   - Location: Enter the venue
   - Image: Upload an image for the event
   - Short Description: Brief summary (max 200 characters)
   - Full Details: Add detailed information using the rich text editor
   - Ticket Link: Add a URL for ticket purchases (optional)
   - Event Type: Select the appropriate category
   - Status: Set to "upcoming" for future events

5. Click "Publish" when ready

### Managing Event Status

Events are displayed on the website based on their status:

- **Upcoming**: Displayed on the homepage and in the "Upcoming" tab on the Events page
- **Past**: Displayed in the "Past" tab on the Events page
- **Cancelled**: Not displayed on the website (for record-keeping)

To change an event's status:

1. Find the event in Sanity Studio
2. Change the "Status" field
3. Click "Publish" to save changes

## Migrating Events

A migration script is included to populate Sanity with sample events:

```bash
# Set your Sanity token as an environment variable
SANITY_TOKEN=your-token-here npm run migrate-events
```

This will create three upcoming events and three past events with dates in 2025 and 2024 respectively.

## Checking Event Data

To verify that events have been properly added to Sanity:

```bash
npm run check-data
```

This will display a list of all events in the Sanity dataset.

## Troubleshooting

If you encounter issues with events:

1. Check the browser console for errors
2. Verify that the event has been published in Sanity
3. Make sure the event has the correct status (upcoming/past)
4. Check that the date format is correct

For more help, refer to the [Sanity documentation](https://www.sanity.io/docs).
