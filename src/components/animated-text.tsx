'use client';

import { useState, useEffect } from 'react';

const skills = [
  "interactive websites.",
  "organic network.",
  "efficient backend systems.",
  "user-friendly applications."
];

const AnimatedText = () => {
  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % skills.length;
      const fullText = skills[i];

      setCurrentSkill(
        isDeleting
          ? fullText.substring(0, currentSkill.length - 1)
          : fullText.substring(0, currentSkill.length + 1)
      );

      if (!isDeleting && currentSkill === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentSkill === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentSkill, isDeleting, loopNum]);

  return (
    <span className="inline-block font-bold text-primary min-h-[48px] md:min-h-[64px] lg:min-h-[72px]">
      {currentSkill}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedText;
