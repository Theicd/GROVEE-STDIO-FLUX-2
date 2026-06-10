import { useEffect, useState } from "react";

import { useLocale } from "../i18n/LocaleContext";

/** Typewriter cycling through locale-specific intro phrases. */
export function useLocaleTypewriter(intervalMs = 3200): string {
  const { t } = useLocale();
  const phrases = t.intro.typewriter;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [phrases]);

  useEffect(() => {
    const phrase = phrases[index % phrases.length] ?? "";
    const doneTyping = text === phrase;
    const doneDeleting = deleting && text === "";

    let delay = deleting ? 28 : 42;
    if (doneTyping && !deleting) delay = intervalMs;
    if (doneDeleting) delay = 400;

    const timer = window.setTimeout(() => {
      if (doneTyping && !deleting) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
        return;
      }
      if (deleting) {
        setText(phrase.slice(0, Math.max(0, text.length - 1)));
      } else {
        setText(phrase.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, phrases, intervalMs]);

  return text;
}
