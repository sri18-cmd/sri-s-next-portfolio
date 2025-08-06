import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
    {
        type: 'work' as const,
        title: 'Software Engineer Intern',
        institution: 'Tech Solutions Inc.',
        date: 'May 2023 - Aug 2023',
        description: [
            'Developed and maintained features for a large-scale web application using React and Node.js.',
            'Collaborated with a team of developers to ship code in an agile environment.',
            'Improved API response times by 30% through query optimization.'
        ]
    },
    {
        type: 'education' as const,
        title: 'Bachelor of Technology, CSE',
        institution: 'SRM University, AP',
        date: '2021 - Present',
        description: [
            'Specializing in Artificial Intelligence and Web Development.',
            'Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems.',
            'Member of the university coding club, participated in several hackathons.'
        ]
    }
];

const TimelineItem = ({ item }: { item: typeof timelineItems[number] }) => {
    const isWork = item.type === 'work';
    const Icon = isWork ? Briefcase : GraduationCap;
    
    return (
        <div className="relative pl-12 pb-12">
            <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
                <Icon className="h-5 w-5" />
            </div>
            <div className="absolute left-[15px] top-[40px] h-full w-px bg-border"></div>

            <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
            <h3 className="text-xl font-bold font-headline mb-1">{item.title}</h3>
            <p className="text-md text-primary font-semibold mb-3">{item.institution}</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                {item.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">
          Experience & Education
        </h2>
        <div className="max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
