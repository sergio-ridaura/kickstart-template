import React from "react";

interface Props {
  title: string;
  url: string;
  className?: string;
  prefetch?: boolean;
  children: React.ReactNode;
}

const DefaultTsxA: React.FC<Props> = ({
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

export default DefaultTsxA;
