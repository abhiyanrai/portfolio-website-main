//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/coschedule.PNG';
import Project2 from './assets/img/projects/snapdeal.PNG';
import Project3 from './assets/img/projects/pomodoro.PNG';
import Project4 from './assets/img/projects/geekbuying.PNG';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
// import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
// import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/bootstrap.svg';
import SkillImg10 from './assets/img/skills/github-icon.svg';
import SkillImg11 from './assets/img/skills/mongodb.svg';
import SkillImg12 from './assets/img/skills/redux.svg';
import SkillImg13 from './assets/img/skills/dsalgo.png';
import SkillImg14 from './assets/img/skills/express.svg';



// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'CoSchedule Clone',
    category: 'Tech Stack: HTML5 | CSS3 | JavaScript',
    descp: "CoSchedule is an all-in-one platform for planning, organizing, and executing all things content marketing."
  },
  {
    id: '2',
    image: Project2,
    name: 'Snapdeal Clone',
    category: 'Tech Stack: HTML5 | CSS3 | JavaScript | Bootstrap',
    descp: "A E-commerce web application for buying and selling of goods and services over the internet."
  },
  {
    id: '3',
    image: Project3,
    name: 'Pomodoro Timer App',
    category: 'Tech Stack: HTML5 | CSS3 | React | Context-API ',
    descp: "A Mini Timer app for managing your worktime through different modes."
  },
  {
    id: '4',
    image: Project4,
    name: 'Geekbuying Clone',
    category: 'Tech Stack: HTML5 | CSS3 | Bootstrap | React | Redux',
    descp: "A Electronics online web application for buying and selling goods and services over the internet."
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  // {
  //   name: 'all',
  // },
  // {
  //   name: 'UI/UX Design',
  // },
  // {
  //   name: 'web development',
  // },
  // {
  //   name: 'branding',
  // },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name: "HTML"
  },
  {
    image: SkillImg2,
    name: "HTML"
  },
  {
    image: SkillImg3,
    name: "HTML"
  },
  {
    image: SkillImg4,
    name: "HTML"
  },
  // {
  //   image: SkillImg5,
  // },
  {
    image: SkillImg12,
    name: "HTML"
  },
  {
    image: SkillImg7,
    name: "HTML"
  },
  // {
  //   image: SkillImg8,
  // },
  {
    image: SkillImg9,
    name: "HTML"
  },
  {
    image: SkillImg10,
    name: "HTML"
  },
  {
    image: SkillImg6,
    name: "HTML"
  },
  {
    image: SkillImg14,
    name: "HTML"
  },
  {
    image: SkillImg11,
    name: "HTML"
  },
  {
    image: SkillImg13,
    name: "HTML"
  }
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
