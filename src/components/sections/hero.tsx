import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/animated-text';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-0">
         <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="abstract background"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Image
            src="https://placehold.co/150x150.png"
            alt="Your Name"
            width={150}
            height={150}
            className="rounded-full mb-6 border-4 border-primary/50 shadow-lg"
            data-ai-hint="professional photo"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-headline text-balance">
            Hi, I'm Your Name
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 text-balance">
            I build <AnimatedText />
          </p>
          <div className="flex space-x-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </Button>
          </div>
          <Button asChild size="lg" className="group">
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
         <a href="#about" aria-label="Scroll down">
             <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center items-start p-1">
                 <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
             </div>
         </a>
      </div>
    </section>
  );
};

export default Hero;
