import founderChaitanyaImg from '@/assets/images/founder-chaitanya.jpg';
import founder02Img from '@/assets/images/founder-02.jpg';
import satyamMishraImg from '@/assets/images/satyam-mishra.jpg';
import vaibhavImg from '@/assets/images/vaibhav-vivek-singh.jpg';

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
    role: 'Chief Operating Officer',
    bio: 'Align technical systems and product innovation with overall business goals',
    photoUrl: founder02Img,
    photoPosition: '50% 44%',
    websiteUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/arjun-mishra-3a5bb03a9/',
    instagramUrl: '',
    githubUrl: 'https://github.com/arjunmishra7880',
    xUrl: 'https://x.com/ArjunMi17922585',
    isPlaceholder: false,
  },
  {
    id: 'member-03',
    slotCode: '03',
    name: 'Satyam Mishra',
    role: 'Developer ',
    bio: 'IT strategy and operations with business objectives, improving efficiency',
    photoUrl: satyamMishraImg,
    photoPosition: '50% 28%',
    websiteUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/satyam-mishra-36b06223a',
    instagramUrl: '',
    githubUrl: 'https://github.com/mishrasatyam01473-ai/',
    xUrl: 'https://x.com/SatyamMish47438',
    isPlaceholder: false,
  },
  {
    id: 'member-04',
    slotCode: '04',
    name: 'Vaibhav Vivek Singh',
    role: 'Marketing Head',
    bio: 'responsible for overall marketing strategy, brand positioning,',
    photoUrl: vaibhavImg,
    photoPosition: '50% 80%',
    websiteUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
    githubUrl: '',
    xUrl: '',
    isPlaceholder: false,
  },
];
