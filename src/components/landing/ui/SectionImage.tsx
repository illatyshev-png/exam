interface SectionImageProps {
  src?: string;
  alt?: string;
  className?: string;
  /** 0 = left edge, 100 = right edge of container */
  offsetPercent?: number;
}

const IMAGE_SIZE = 134;

const SectionImage = ({ src, alt = "", className = "", offsetPercent }: SectionImageProps) => {
  const hasOffset = offsetPercent !== undefined;
  const imageMargin = hasOffset
    ? { marginLeft: `calc(${offsetPercent}% - ${(offsetPercent * IMAGE_SIZE / 100).toFixed(2)}px)` }
    : undefined;

  return (
    <div className={`${hasOffset ? "text-left" : "flex justify-center"} ${className}`}>
      <div className="w-[134px] h-[134px] inline-block" style={imageMargin}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full rounded-lg object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-muted/50">
            <svg
              className="w-10 h-10 text-muted-foreground/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionImage;
