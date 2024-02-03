import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Arthur Koblet`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am an expert in <strong className="text-stone-100">Front-end</strong> development</p>
      <p className="prose-sm text-stone-200 lg:prose-lg">Skills: JavaScript/TypeScript, HTML/CSS, node.js, Rest API, Firebase,</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg" style={{}}> Experience: 4 years of commercial experience</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> Goal: Provide high quality products and exceptional customer service</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> Communication: Excellent communication and collaboration skills</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> Training: Continually updating my knowledge of the latest technologies</p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Pride myself on my ability to turn ideas into well-structured code.        My goal is to help you achieve your goals by providing innovative solutions and supporting the project after implementation. I enjoy working both independently and as part of a team, and I always strive for clean and efficient code. 
  If you are looking for a professional developer who can turn your ideas into reality, contact me. Let's start creating something unique and valuable today!`,
  aboutItems: [
    { label: 'Location', text: 'Austria', Icon: MapIcon },
    { label: 'Age', text: '31', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Austria', Icon: FlagIcon },
    { label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon },
    { label: 'Study', text: 'Graz University of Technology', Icon: AcademicCapIcon }
    //{ label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programing languages',
    skills: [
      {
        name: 'Javascript',
        level: 10,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'PHP',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'project 1',
    description: 'This project, which I developed ',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage1,
  },
  {
    title: 'project 2',
    description: 'This project, which I developed ',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage2,
  },
  {
    title: 'project 3',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage3,
  },
  {
    title: 'project 4',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage4,
  },
  {
    title: 'project 5',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage5,
  },
  {
    title: 'project 6',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage6,
  },
  {
    title: 'project 7',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage7,
  },
  {
    title: 'project 8',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage8,
  },
  {
    title: 'project 9',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage9,
  },
  {
    title: 'project 10',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage10,
  },
  {
    title: 'project 11',
    description: 'This project, which I developed',
    url: 'https://travelworldfirst.vercel.app/home',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    //content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
    content: <p></p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    //content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      // <p>
      //   Describe work, special projects, notable achievements, what technologies you have been working with, and
      //   anything else that would be useful for an employer to know.
      // </p>
      <p>
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      // <p>.
      //   Describe work, special projects, notable achievements, what technologies you have been working with, and
      //   anything else that would be useful for an employer to know.
      // </p>
      <p>

      </p>

    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'I had a good time with Arthur Koblet. I hope to work with again',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'I had a good time with Arthur Koblet. I hope to work with again',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'I had a good time with Arthur Koblet. I hope to work with again',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'tigtiger.ckiff.com',
      href: 'mailto:tigtiger.ckiff.com',
    },
    {
      type: ContactType.Location,
      text: 'Austria',
      //href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx' },
  // { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  // { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  // { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  // { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
