import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Code } from 'lucide-react';
import type { Project } from './sections/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden relative border-2 border-border/60 hover:border-primary/80 transition-all duration-300 transform hover:-translate-y-2">
      <CardContent className="p-0">
        <div className="relative h-52 w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={project.aiHint}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <Button asChild variant="secondary">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Code className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card">
          <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="font-code text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
