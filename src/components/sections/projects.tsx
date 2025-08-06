import ProjectCard from '@/components/project-card';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration and a modern UI.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'website screenshot',
    tags: ['React', 'Next.js', 'Firebase', 'Stripe'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A productivity tool for organizing tasks with a drag-and-drop interface.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'application interface',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An analytics dashboard for visualizing complex datasets with interactive charts.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'dashboard chart',
    tags: ['D3.js', 'React', 'Python', 'Flask'],
    demoUrl: '#',
    codeUrl: '#',
  },
   {
    title: 'Personal Blog Engine',
    description: 'A lightweight and fast blogging platform with markdown support and static site generation.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'blog article',
    tags: ['Next.js', 'Tailwind CSS', 'MDX'],
    demoUrl: '#',
    codeUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
