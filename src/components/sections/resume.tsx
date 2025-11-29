import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
    {
        type: 'work' as const,
        title: 'ServiceNow Developer Intern',
        institution: 'Bangmetric LLC',
        date: 'November 2025',
        description: [
            'Developed and configured multiple modules on the ServiceNow platform, including form layouts, lists, and workflows.',

'Implemented UI changes such as UI Policies, UI Actions, and Form/UI customizations to enhance user experience.',

'Wrote and optimized both Client-side and Server-side scripts (Client Scripts, Business Rules, Script Includes) to automate processes and enforce business logic.',

'Created and configured Data Policies and UI Policies to maintain data consistency and enforce field behaviors.',

'Hands-on experience in implementing platform features like Catalog Items, GlideRecord operations, and automation scripts, while continuously learning ServiceNow best practices.',
            
        ]
    },
    {
        type: 'education' as const,
        title: 'Bachelor of Technology, CSE',
        institution: 'Bennett University, Greater Noida',
        date: '2022 - 2026',
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

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
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

export default Experience;
