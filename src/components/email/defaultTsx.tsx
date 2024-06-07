import React from "react";

/**
 * Types for DefaultTsxEmail.
 */
export interface DefaultTsxEmailType {
  title: string;
  email: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Component for rendering a email link with React.js.
 */
export const DefaultTsxEmail: React.FC<DefaultTsxEmailType> = ({
  title,
  email,
  className,
  children,
}) => {
  return (
    <a href={`mailto:${email}`} aria-label={title} className={className}>
      {children}
    </a>
  );
};
