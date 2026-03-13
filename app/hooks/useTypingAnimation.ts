"use client";

import { useState, useEffect, useRef } from "react";

export function useTypingAnimation(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseMs = 2000) {
  const [displayText, setDisplayText] = useState("");
  const stateRef = useRef({ wordIndex: 0, charIndex: 0, isDeleting: false });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const { wordIndex, charIndex, isDeleting } = stateRef.current;
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        stateRef.current.charIndex -= 1;

        if (stateRef.current.charIndex === 0) {
          stateRef.current.isDeleting = false;
          stateRef.current.wordIndex = (wordIndex + 1) % words.length;
        }
        timeout = setTimeout(tick, deletingSpeed);
      } else {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        stateRef.current.charIndex += 1;

        if (stateRef.current.charIndex === currentWord.length) {
          stateRef.current.isDeleting = true;
          timeout = setTimeout(tick, pauseMs);
          return;
        }
        timeout = setTimeout(tick, typingSpeed);
      }
    }

    timeout = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeout);
    // words array identity is stable — callers should memoize if needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayText;
}
