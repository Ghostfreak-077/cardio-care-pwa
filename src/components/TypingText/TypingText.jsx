import React, { useEffect, useState , useMemo } from 'react';
import styles from './TypingText.module.scss';

const TypingText = () => {
    const lines = useMemo(() => [
    "“The problem with heart disease is that the first symptom is often fatal.”",
    "“Live healthy, stay young at heart.”",
    "“Healthy habits are your heart’s desire.”",
    "We prioritize security and ensure your data is protected.",
    "“With a healthy heart, the beat goes on.”",
    "“Heart disease kills more women than all cancers combined.”"
], []);

  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < lines[lineIndex].length) {
        setDisplayedText(prev => prev + lines[lineIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === lines[lineIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLineIndex(prev => (prev + 1) % lines.length); 
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 100);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, lineIndex, lines]);

  return (
    <div className={styles.typingText}>
      {displayedText}<span className={styles.cursor}>|</span>
    </div>
  );
};

export default TypingText;
