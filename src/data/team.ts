export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'dan-allwood',
    name: 'Dan Allwood',
    role: 'Choir Director',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Dan co-founded Tollington Gospel Choir in 2008 with a passion for gospel music and community building. With a background in music education and vocal performance, he brings expertise and passion to every rehearsal.',
    socialLinks: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: 'beth-allwood',
    name: 'Beth Allwood',
    role: 'Choir Director',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Beth co-founded Tollington Gospel Choir in 2008 with Dan. With her extensive musical background and love for teaching, she helps each singer discover their voice and gain confidence through gospel music.',
    socialLinks: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Assistant Director & Vocal Coach',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'John has been singing gospel music since childhood and brings both technical expertise and soulful interpretation to the choir. As a vocal coach, he helps members develop their range, tone, and expression.',
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Community Outreach Coordinator',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Jane manages the choir\'s community projects and partnerships with local organizations. With a background in community development, she ensures the choir remains connected to its roots while expanding its positive impact.',
    socialLinks: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
    },
  },
];