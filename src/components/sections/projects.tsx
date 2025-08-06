import ProjectCard from '@/components/project-card';
import fitKiingMain from './fit kiing main.png'; 
import todomain from './todo main.png';
import imagemain from './image prediction main.png';
import resumemain from './resume analyzer main.png';

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
    title: 'FIT KIING',
    description: 'A full-featured online fitness website with various features integrated and a modern UI.',
    imageUrl: fitKiingMain,
    aiHint: 'website screenshot',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://sri18-cmd.github.io/FITKIING/',
    codeUrl: 'https://github.com/sri18-cmd/FITKIING',
  },
  {
    title: 'IMAGE PREDICTION',
    description: 'A CNN Model , which predicts the image uploaded , trained using CIFAR Dataset.',
    imageUrl: imagemain,
    aiHint: 'application interface',
    tags: ['Python', 'PIL', 'CNN', 'NumPy', 'Pandas'],
    demoUrl: 'https://github.com/sri18-cmd/IMAGE-PREDICTON',
    codeUrl: 'https://github.com/sri18-cmd/IMAGE-PREDICTON',
  },
  {
    title: 'TODO-LIST',
    description: 'Developed a responsive Todo List web app with core functionalities like adding, editing, and deleting tasks via dynamic DOM manipulation.',
    imageUrl: todomain,
    aiHint: 'dashboard chart',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://todo-list-rust-kappa-61.vercel.app/',
    codeUrl: 'https://github.com/sri18-cmd/TODO-LIST',
  },
   {
    title: 'RESUME-ANALYZER',
    description: 'Developed a responsive Streamlit-based tool that evaluates resumes in real time and provides immediate, useful recommendations.',
    imageUrl: resumemain,
    aiHint: 'blog article',
    tags: ['Python', 'Streamlit', 'PyResparser', 'PDFMiner'],
    demoUrl: 'https://github.com/sri18-cmd/RESUME-ANALYZER',
    codeUrl: 'https://github.com/sri18-cmd/RESUME-ANALYZER',
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
