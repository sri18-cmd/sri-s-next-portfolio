import { Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/sri18-cmd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/srivasanthvutukuri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://x.com/sri_vutukuri" target="_blank" rel="noopener noreferrer" aria-label="X">
              <XIcon className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://leetcode.com/u/sriv18/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Code className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Sri Vasanth Vutukuri. Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
