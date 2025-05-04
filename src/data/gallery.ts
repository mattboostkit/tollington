export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  description?: string;
  url: string;
  thumbnail?: string;
  date: Date;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'summer-concert-2022',
    type: 'image',
    title: 'Summer Concert 2022',
    description: 'Our full choir performing at St. Mary\'s Church',
    url: 'https://images.pexels.com/photos/3419680/pexels-photo-3419680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2022-07-15'),
    category: 'Performances',
  },
  {
    id: 'rehearsal-session',
    type: 'image',
    title: 'Weekly Rehearsal Session',
    description: 'Practicing new arrangements at our regular Tuesday rehearsal',
    url: 'https://images.pexels.com/photos/7671979/pexels-photo-7671979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2023-02-07'),
    category: 'Rehearsals',
  },
  {
    id: 'workshop-january',
    type: 'image',
    title: 'Gospel Workshop January 2023',
    description: 'Community members joining us for a day of gospel singing',
    url: 'https://images.pexels.com/photos/8412468/pexels-photo-8412468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2023-01-14'),
    category: 'Workshops',
  },
  {
    id: 'christmas-service',
    type: 'image',
    title: 'Christmas Carol Service',
    description: 'Special performance at St. Paul\'s Cathedral',
    url: 'https://images.pexels.com/photos/6141914/pexels-photo-6141914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2022-12-18'),
    category: 'Performances',
  },
  {
    id: 'community-outreach',
    type: 'image',
    title: 'Community Outreach Program',
    description: 'Singing at Oakwood Care Home',
    url: 'https://images.pexels.com/photos/7712474/pexels-photo-7712474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2023-03-05'),
    category: 'Community',
  },
  {
    id: 'easter-performance',
    type: 'image',
    title: 'Easter Celebration Concert',
    description: 'Performing at All Saints Church',
    url: 'https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2023-04-16'),
    category: 'Performances',
  },
  {
    id: 'hallelujah-chorus-video',
    type: 'video',
    title: 'Hallelujah Chorus Performance',
    description: 'Our rendition of Handel\'s Hallelujah Chorus with a gospel twist',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2022-12-18'),
    category: 'Videos',
  },
  {
    id: 'amazing-grace-video',
    type: 'video',
    title: 'Amazing Grace',
    description: 'Soloist Jennifer Adams with choir backing',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2023-01-30'),
    category: 'Videos',
  },
  {
    id: 'choir-retreat',
    type: 'image',
    title: 'Annual Choir Retreat',
    description: 'Weekend of intensive practice and team building',
    url: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: new Date('2022-09-23'),
    category: 'Behind the Scenes',
  },
];

export const galleryCategories = Array.from(
  new Set(galleryItems.map((item) => item.category))
);