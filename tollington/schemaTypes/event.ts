import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g. "7:00 PM - 9:30 PM"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'details',
      title: 'Full Details',
      type: 'blockContent',
    }),
    defineField({
      name: 'ticketLink',
      title: 'Ticket Link',
      type: 'url',
      description: 'Link to purchase tickets (optional)',
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Concert', value: 'concert'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Fundraiser', value: 'fundraiser'},
          {title: 'Community Event', value: 'community'},
          {title: 'Private Event', value: 'private'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Past', value: 'past'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      media: 'image',
    },
    prepare(selection) {
      const {title, date, location, media} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: `${formattedDate} | ${location}`,
        media,
      }
    },
  },
})
