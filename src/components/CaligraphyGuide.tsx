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
        <div
          key={index}
          className="guide-row"
          role="img"
          aria-label={trace && index === 0 ? trace : "writing line"}
        >
          <svg
            className="guide-lines"
            viewBox="0 0 1000 160"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
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
          </svg>
          {trace && index === 0 ? (
            <span className="guide-trace" aria-hidden="true">
              {trace}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
