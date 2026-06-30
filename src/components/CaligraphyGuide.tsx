type CaligraphyGuideProps = {
  trace?: string;
  rows?: number;
  compact?: boolean;
};

export function CaligraphyGuide({
  trace,
  rows = 4,
  compact = false,
}: CaligraphyGuideProps) {
  return (
    <div className={compact ? "caligraphy-guide compact" : "caligraphy-guide"}>
      {Array.from({ length: rows }, (_, index) => (
        <svg
          key={index}
          className="guide-row"
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          role="img"
          aria-label={trace && index === 0 ? trace : "writing line"}
        >
          <line
            className="guide-line guide-top"
            x1="0"
            x2="1000"
            y1="24"
            y2="24"
          />
          <line
            className="guide-line guide-middle"
            x1="0"
            x2="1000"
            y1="68"
            y2="68"
          />
          <line
            className="guide-line guide-base"
            x1="0"
            x2="1000"
            y1="108"
            y2="108"
          />
          <line
            className="guide-line guide-bottom"
            x1="0"
            x2="1000"
            y1="144"
            y2="144"
          />
          {trace && index === 0 ? (
            <text
              className="guide-trace"
              x="28"
              y="108"
              vectorEffect="non-scaling-stroke"
            >
              {trace}
            </text>
          ) : null}
        </svg>
      ))}
    </div>
  );
}
