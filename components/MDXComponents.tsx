import React, {HTMLProps} from "react";
import Link, {LinkProps} from "next/link";
import Image from "next/image";

const CustomLink = (props: LinkProps & HTMLProps<HTMLAnchorElement>) => {
  const href = props.href;
  const isInternal = (href && href.startsWith("/")) || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a rel="noopener noreferrer" target="_blank" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  img: Image,
};

export default MDXComponents;
