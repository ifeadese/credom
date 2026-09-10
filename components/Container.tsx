type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Centered content column: max-width 1240px, horizontal padding = the site
 * gutter (`--gutter`: 20px phone / 32px tablet / 40px desktop, see globals.css).
 * Every page-level column goes through this so left/right padding matches on
 * every page and section.
 * `w-full` is load-bearing inside a flex/grid parent — auto cross-axis margins
 * defeat `align-items: stretch`, so without it the column shrink-wraps its content.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-gutter ${className}`}>{children}</div>
  );
}
