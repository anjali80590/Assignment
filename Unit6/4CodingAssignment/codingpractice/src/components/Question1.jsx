import React, { useState, useEffect, useRef } from "react";

const AnimatedBanner = ({
  texts = ["Learn React", "Build Projects", "Get Hired"],
  typingSpeed = 120,
  erasingSpeed = 60,
  delayBeforeErase = 1000,
  delayBeforeNext = 500,
  loop = true,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isTyping && !isDeleting) {
      if (displayText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeErase);
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setIsDeleting(false);
        if (currentIndex === texts.length - 1 && !loop) {
          return;
        }
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, delayBeforeNext);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [
    displayText,
    currentIndex,
    isTyping,
    isDeleting,
    texts,
    typingSpeed,
    erasingSpeed,
    delayBeforeErase,
    delayBeforeNext,
    loop,
  ]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="animated-banner" aria-live="polite">
      <span>{displayText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default AnimatedBanner;
