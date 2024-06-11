import React from "react";

/**
 * Types for DefaultAReact.
 */
interface DefaultAReactType {
  title: string;
  url: string;
  className?: string;
  prefetch?: boolean;
  children: React.ReactNode;
}

/**
 * Component for rendering a link.
 */
const DefaultAReact: React.FC<DefaultAReactType> = ({
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

export { DefaultAReact, type DefaultAReactType };
