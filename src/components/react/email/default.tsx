import React from "react";

/**
 * Types for DefaultTsxEmail.
 */
interface DefaultEmailReactType {
  title: string;
  email: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Component for rendering a email link.
 */
const DefaultEmailReact: React.FC<DefaultEmailReactType> = ({
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

export { DefaultEmailReact, type DefaultEmailReactType };
