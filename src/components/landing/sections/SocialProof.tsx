import { useState, useEffect, useRef, useCallback } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import SectionImage from "../ui/SectionImage";

interface SocialProofProps {
  headline: string;
  images: string[];
  autoScrollInterval?: number;
}

const SocialProof = ({
  headline,
  images,
  autoScrollInterval = 3000,
}: SocialProofProps) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPausedRef.current || total <= 1) return;

    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, autoScrollInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, autoScrollInterval, total]);

  const pauseAutoScroll = useCallback(() => {
    isPausedRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);

    pauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      setCurrent((c) => (c + 1) % total);
    }, 5000);
  }, [total]);

  const handlePrev = () => {
    pauseAutoScroll();
    prev();
  };

  const handleNext = () => {
    pauseAutoScroll();
    next();
  };

  const handleDot = (i: number) => {
    pauseAutoScroll();
    goTo(i);
  };

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  if (total === 0) return null;

  return (
    <Section id="testimonials" variant="muted">
      <Container>
        <SectionImage src="/sections/testimonials.png" className="hidden md:block mb-4" offsetPercent={66.67} />
        <div className="flex items-center gap-3 mb-6 md:block md:mb-10">
          <img src="/sections/testimonials.png" alt="" className="w-14 h-14 rounded-lg object-cover shrink-0 md:hidden" />
          <Heading as="h2" className="md:text-center">
            {headline}
          </Heading>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg bg-muted/30">
            <div
              className="flex transition-transform duration-500 ease-in-out items-center"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((src, i) => (
                <div key={i} className="w-full shrink-0 flex items-center justify-center max-h-[70vh]">
                  <img
                    src={src}
                    alt={`Отзыв ${i + 1}`}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-1 top-1/2 -translate-y-1/2 md:left-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 md:right-0 md:translate-x-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Следующий отзыв"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current
                    ? "bg-accent"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SocialProof;
