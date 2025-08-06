import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/animated-text';
import { Github, Linkedin, Code, Download, ArrowDown } from 'lucide-react';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

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
            alt="Sri Vasanth Vutukuri"
            width={150}
            height={150}
            className="rounded-full mb-6 border-4 border-primary/50 shadow-lg"
            data-ai-hint="professional photo"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-headline text-balance">
            Hi, I'm Sri Vasanth Vutukuri
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 text-balance">
            I build <AnimatedText />
          </p>
          <div className="flex space-x-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/sri18-cmd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/srivasanthvutukuri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/sri_vutukuri" target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://leetcode.com/u/sriv18/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                    <Code className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" className="group">
              <a href="https://drive.google.com/file/d/1BIMg8V7Iz1qWxWBaZml5h1Xg6IxJeYR_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                My Resume
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
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
