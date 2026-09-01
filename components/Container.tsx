type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Centered content column: max-width 1240px, 40px horizontal padding.
 * `w-full` is load-bearing inside a flex/grid parent — auto cross-axis margins
 * defeat `align-items: stretch`, so without it the column shrink-wraps its content.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-10 ${className}`}>{children}</div>
  );
}
