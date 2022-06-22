import Link from "next/link";
import React, { ReactNode } from "react";

interface ILinkProps {
  href: string;
  anchorClassName?: string | undefined;
  children: ReactNode;
}

const RouterLink: React.FC<ILinkProps> = (props) => {
  const { href, anchorClassName, children, ...other } = props;
  return (
    <Link href={href} passHref>
      <a className={anchorClassName} {...other}>
        {children}
      </a>
    </Link>
  );
};

export default RouterLink;
