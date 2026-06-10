import { useEffect, useState } from "react";

export function useTypewriter(phrases: readonly string[], typingMs = 42, pauseMs = 2200) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex] ?? "";
    const doneTyping = !deleting && charIndex === phrase.length;
    const doneDeleting = deleting && charIndex === 0;

    let delay = typingMs;
    if (doneTyping) delay = pauseMs;
    else if (doneDeleting) delay = 480;
    else if (deleting) delay = Math.max(18, typingMs * 0.45);

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
        return;
      }
      const next = deleting ? charIndex - 1 : charIndex + 1;
      setCharIndex(next);
      setText(phrase.slice(0, next));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phrases, phraseIndex, charIndex, deleting, typingMs, pauseMs]);

  return text;
}
