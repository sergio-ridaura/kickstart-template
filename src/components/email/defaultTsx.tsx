import React from "react";

interface Props {
  title: string;
  email: string;
  className?: string;
  children: React.ReactNode;
}

const DefaultTsxEmail: React.FC<Props> = ({
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

export default DefaultTsxEmail;
