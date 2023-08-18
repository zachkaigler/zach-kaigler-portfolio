import projectsDemo from '../../../videos/ProjectsDemo.mp4';
import introsDemo from '../../../videos/IntrosDemo.mp4';
import studioDemo from '../../../videos/StudioDemo.mp4';
import chessDemo from '../../../videos/Chess2Demo.mp4';

export const projects = {
  'chess-2': {
    title: 'Chess 2',
    description: 'A fast paced chess variant with unique rules: No turns, piece cooldown, and direct capture of the King to win. Online multiplayer supported.',
    video: chessDemo,
    role: 'Lead Engineer + Lead Designer',
    contributions: [
      'Designed application UI/UX from the ground up, including an entirely custom component library and fully original graphics',
      'Architected custom framework facilitating fast and live player to player connections for quick, responsive games',
      'Manage complete production environment and scope across both ends of the stack',
    ],
    tools: [
      'Javascript',
      'React.js',
      'React Context',
      'React DnD',
      'Firebase',
      'SASS',
      'Photoshop',
      'Procreate',
      'Figma',
    ],
    link: 'https://playchess2.netlify.app/',
  },
  'clearmix-projects': {
    title: 'ClearMix Projects Platform',
    description: 'A fully featured, folder tree based user interface designed to help users ideate and plan video marketing campaigns, produce them through the ClearMix pipeline, and track them through completion.',
    video: projectsDemo,
    role: 'Lead Frontend Engineer',
    contributions: [
      'Responsible for planning, delegation, and development of platform from the ground up',
      'Architected key platform features including drag-n-drop functionality, video upload, full project customization, account balance integration, and more',
      'Developed custom wrapper hooks around React Query to allow for more performant data fetching, a DRYer codebase, and a friendlier dev experience',
    ],
    tools: [
      'TypeScript',
      'Next.js',
      'React.js',
      'React Query',
      'React Context',
      'React DnD',
      'AWS S3',
      'Jest',
      'React Testing Library',
      'SASS',
    ],
  },
  'clearmix-intros': {
    title: 'ClearMix Intros',
    description: 'A tool to help anyone create quick, professional, and personalized video introductions for content regardless of production or editing experience, and track their external engagement.',
    video: introsDemo,
    role: 'Frontend Engineer',
    contributions: [
      "Designed interactive landing pages for Intros content, customizable to a user's specifications - leading to thousands of Intros created and sent",
      'Contributed to key analytics tracking features, allowing users to gauge external engagement with their content and A/B test different intro styles',
    ],
    tools: [
      'TypeScript',
      'React.js',
      'React Context',
      'AWS S3',
      'Jest',
      'React Testing Library',
      'SASS',
      'WebRTC',
    ],
  },
  'clearmix-studio': {
    title: 'ClearMix Virtual Studio',
    description: 'A feature rich virtual recording platform built to make remote video production quick and pain-free.',
    video: studioDemo,
    role: 'Frontend Engineer',
    contributions: [
      'Developed suite of producer tools including the Notebook, allowing for the use of keyboard shortcuts for quick, integrated note-taking exported as Premiere Pro XML files',
      "Contributed to application's upload functionality, requiring the recording of high quality footage stored locally and uploaded to AWS S3 in parallel",
      'Completely refactored codebase and user interface from the ground up to bring to cleaner, more modern standards',
    ],
    tools: [
      'TypeScript',
      'React.js',
      'React Context',
      'Dailyjs',
      'AWS S3',
      'Jest',
      'React Testing Library',
      'SASS',
      'WebRTC',
    ],
  },
};