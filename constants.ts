
import { Project, ProjectCategory } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AeroLink Smart Tower',
    description: 'A cloud-integrated aeroponic system featuring real-time environmental monitoring and remote nutrient management.',
    category: ProjectCategory.AI,
    imageUrl: 'https://picsum.photos/seed/neural/800/600',
    demoUrl: 'https://github.com',
    creator: { name: 'John Lloyd Tortor', url: 'https://facebook.com' }
  },
  {
    id: '2',
    title: 'EtherFlow Dashboard',
    description: 'Real-time blockchain analytics and transaction visualization platform.',
    category: ProjectCategory.CRYPTO,
    imageUrl: 'https://picsum.photos/seed/crypto/800/600',
    demoUrl: 'https://github.com',
    creator: { name: 'John Lloyd Tortor', url: 'https://facebook.com' }
  },
  {
    id: '3',
    title: 'Lumina UI Kit',
    description: 'A comprehensive design system focusing on accessibility and glassmorphism.',
    category: ProjectCategory.DESIGN,
    imageUrl: 'https://picsum.photos/seed/design/800/600',
    demoUrl: 'https://github.com',
    creator: { name: 'John Lloyd Tortor', url: 'https://facebook.com' }
  },
  {
    id: '4',
    title: 'Aura Social Network',
    description: 'Privacy-first social platform with end-to-end encrypted messaging.',
    category: ProjectCategory.WEB,
    imageUrl: 'https://picsum.photos/seed/social/800/600',
    demoUrl: 'https://github.com',
    creator: { name: 'John Lloyd Tortor', url: 'https://facebook.com' }
  },
  {
    id: '5',
    title: 'Zenith Fitness Tracker',
    description: 'Predictive health monitoring app using wearable sensor data.',
    category: ProjectCategory.MOBILE,
    imageUrl: 'https://picsum.photos/seed/fitness/800/600',
    demoUrl: 'https://github.com',
    creator: { name: 'John Lloyd Tortor', url: 'https://facebook.com' }
  }
];
