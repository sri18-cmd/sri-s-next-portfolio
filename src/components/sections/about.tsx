import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Component, Server, Wrench } from 'lucide-react';

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'C++'],
  frameworks: ['React.js', 'Next.js', 'Node.js', 'Django', 'Tailwind CSS'],
  tools: ['Git & GitHub', 'Docker', 'Firebase', 'AWS', 'Vercel']
};

const SkillCard = ({ title, icon, skillsList }: { title: string; icon: React.ReactNode; skillsList: string[] }) => (
  <Card className="bg-background/50 border-border/50">
    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
      {icon}
      <CardTitle className="font-headline text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="flex flex-wrap gap-2 mt-2">
        {skillsList.map(skill => (
          <li key={skill} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-code">{skill}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 space-y-4 text-lg text-muted-foreground text-balance">
            <p>
              Hello! I'm a passionate and driven B.Tech student from Greater Noida, India, with a deep love for building elegant and efficient technology solutions.
            </p>
            <p>
              My journey in tech is fueled by a curiosity to understand how things work and a desire to create impactful applications. I'm currently in my 3rd year, specializing in AI and Full-Stack Web Development.
            </p>
             <p>
              My goal is to leverage my skills to build innovative products that solve real-world problems and contribute to the ever-evolving world of technology.
            </p>
          </div>
          <div className="md:col-span-3 space-y-6">
            <SkillCard title="Languages" icon={<CodeXml className="text-primary"/>} skillsList={skills.languages} />
            <SkillCard title="Frameworks & Libraries" icon={<Component className="text-primary"/>} skillsList={skills.frameworks} />
            <SkillCard title="Tools & Platforms" icon={<Wrench className="text-primary"/>} skillsList={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
