import React from "react";
import {Link, LinkProps} from "@chakra-ui/react";
import {default as NextLink, LinkProps as NextLinkProps} from "next/link";

const CustomLink = (props: NextLinkProps & LinkProps) => {
  const href = props.href;
  const isInternal = (href && href.startsWith("/")) || href.startsWith("#");

  if (isInternal) {
    return (
      <NextLink href={href}>
        <Link {...props} />
      </NextLink>
    );
  }

  return <Link rel="noopener noreferrer" target="_blank" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
};

export default MDXComponents;
