import { ContactForm } from '@/components/contact-form';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 font-headline">Get In Touch</h2>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to drop me a line.
        </p>
        <div className="flex justify-center items-center gap-2 mb-12">
            <Mail className="h-5 w-5 text-primary"/>
            <a href="mailto:your.email@example.com" className="text-lg text-primary hover:underline">
                your.email@example.com
            </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
