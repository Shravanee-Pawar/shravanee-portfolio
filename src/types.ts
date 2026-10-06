export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'AI / ML' | 'Web App' | 'Social Impact' | 'Tourism';
  githubUrl: string;
  demoUrl?: string;
  features?: string[];
  gradient: string;
  accentColor: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  scoreLabel: string;
  score: string;
  period: string;
  location: string;
  iconName: string;
}

export interface Certification {
  title: string;
  issuer: string;
  category: string;
  date?: string;
}

export interface Achievement {
  title: string;
  eventOrOrg: string;
  projectAssociated?: string;
  description: string;
  type: 'hackathon' | 'award' | 'extracurricular';
  icon: string;
  badgeText: string;
}

export interface Interest {
  title: string;
  icon: string;
  description: string;
}
