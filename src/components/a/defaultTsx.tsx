import React from "react";

/**
 * Types for DefaultTsxA.
 */
export interface DefaultTsxAType {
  title: string;
  url: string;
  className?: string;
  prefetch?: boolean;
  children: React.ReactNode;
}

/**
 * Component for rendering a link with React.js.
 */
export const DefaultTsxA: React.FC<DefaultTsxAType> = ({
  title,
  url,
  className,
  prefetch = true,
  children,
}) => {
  return (
    <a
      href={url}
      aria-label={title}
      className={className}
      {...(prefetch ? { "data-astro-prefetch": "true" } : {})}
    >
      {children}
    </a>
  );
};
