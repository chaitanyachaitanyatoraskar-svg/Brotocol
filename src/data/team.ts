import founderChaitanyaImg from '@/assets/images/founder-chaitanya.jpg';
import founder02Img from '@/assets/images/founder-02.jpg';

export interface TeamMember {
  id: string;
  slotCode: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  photoPosition?: string;
  websiteUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  githubUrl: string;
  xUrl: string;
  isPlaceholder: boolean;
}

/**
 * Centralized team directory.
 * Team Member 01 is populated with verified founder profile details.
 * Team Members 02-04 remain temporary placeholders until real details are provided.
 */
export const teamData: TeamMember[] = [
  {
    id: 'member-01',
    slotCode: '01',
    name: 'Chaitanya Toraskar',
    role: 'Founder / CEO',
    bio: 'Building practical digital solutions and turning business ideas into technology.',
    photoUrl: founderChaitanyaImg,
    photoPosition: '50% 42%',
    websiteUrl: 'https://chaitanya-roan.vercel.app/',
    linkedinUrl: 'https://www.linkedin.com/in/chaitanya-toraskar1122/',
    instagramUrl: '',
    githubUrl: 'https://github.com/chaitanyachaitanyatoraskar-svg',
    xUrl: 'https://x.com/ChaitanyaToras3',
    isPlaceholder: false,
  },
  {
    id: 'member-02',
    slotCode: '02',
    name: 'Arjun Mishra',
    role: 'FOUNDER / CTO',
    bio: 'Align technical systems and product innovation with overall business goals',
    photoUrl: founder02Img,
    photoPosition: '50% 44%',
    websiteUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
    githubUrl: '',
    xUrl: '',
    isPlaceholder: false,
  },
  {
    id: 'member-03',
    slotCode: '03',
    name: 'Team Member 03',
    role: 'UI/UX & Product Design',
    bio: 'Designing clean interfaces and effortless customer journeys.',
    photoUrl: '',
    websiteUrl: '#team',
    linkedinUrl: '#team',
    instagramUrl: '#team',
    githubUrl: '#team',
    xUrl: '',
    isPlaceholder: true,
  }
];
