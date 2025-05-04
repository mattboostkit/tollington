export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  image: string;
  description: string;
  details?: string;
  ticketLink?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 'summer-concert-2023',
    title: 'Summer Concert 2023',
    date: new Date('2023-07-15'),
    time: '7:00 PM - 9:30 PM',
    location: 'St. Mary\'s Church, London',
    image: 'https://images.pexels.com/photos/210766/pexels-photo-210766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Join us for a magical evening of uplifting gospel music at our annual summer concert.',
    details: 'Our annual summer concert returns with a celebration of gospel classics and contemporary Christian music. The evening will feature our full choir, special guest soloists, and a backing band of London\'s finest musicians. Refreshments will be available during intermission.',
    ticketLink: '#',
  },
  {
    id: 'gospel-workshop-june',
    title: 'Gospel Workshop',
    date: new Date('2023-06-24'),
    time: '10:00 AM - 4:00 PM',
    location: 'Tollington Community Centre',
    image: 'https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Learn gospel singing techniques and repertoire in this day-long workshop open to all skill levels.',
    details: 'This workshop is designed for singers of all levels who want to explore gospel music. Our experienced vocal coaches will guide you through vocal techniques, harmony, and the distinctive style of gospel singing. By the end of the day, participants will have learned several gospel songs to perform together.',
    ticketLink: '#',
  },
  {
    id: 'charity-fundraiser',
    title: 'Charity Fundraiser',
    date: new Date('2023-08-05'),
    time: '3:00 PM - 6:00 PM',
    location: 'Finsbury Park',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An outdoor performance to raise funds for local homeless shelters.',
    details: 'Join us for an afternoon of music in the park as we raise funds for local homeless shelters. Bring your picnic blankets and enjoy gospel music in the beautiful surroundings of Finsbury Park. Food vendors will be present, and all proceeds from ticket sales will go directly to our partner charities.',
    ticketLink: '#',
  },
  {
    id: 'community-singing-day',
    title: 'Community Singing Day',
    date: new Date('2023-09-16'),
    time: '11:00 AM - 2:00 PM',
    location: 'Tollington Park',
    image: 'https://images.pexels.com/photos/4867182/pexels-photo-4867182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Come sing with us! A free event where the community can join in and learn some gospel classics.',
    details: 'This free event invites everyone in the community to come together and experience the joy of singing gospel music. No previous experience is required - just a willingness to participate and have fun! Our choir members will lead the session, teaching simple gospel songs that everyone can join in with. Refreshments will be provided.',
  },
];

export const pastEvents: Event[] = [
  {
    id: 'easter-celebration',
    title: 'Easter Celebration Concert',
    date: new Date('2023-04-16'),
    time: '6:30 PM - 8:30 PM',
    location: 'All Saints Church, London',
    image: 'https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A special Easter concert celebrating hope and renewal through gospel music.',
  },
  {
    id: 'black-history-month',
    title: 'Black History Month Celebration',
    date: new Date('2022-10-22'),
    time: '7:00 PM - 9:00 PM',
    location: 'Hackney Town Hall',
    image: 'https://images.pexels.com/photos/2228568/pexels-photo-2228568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A concert honoring the rich tradition of gospel music and its cultural significance.',
  },
  {
    id: 'christmas-carol-service',
    title: 'Christmas Carol Service',
    date: new Date('2022-12-18'),
    time: '5:00 PM - 7:00 PM',
    location: 'St. Paul\'s Cathedral',
    image: 'https://images.pexels.com/photos/6141914/pexels-photo-6141914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A festive evening of traditional carols and contemporary gospel Christmas music.',
  },
];