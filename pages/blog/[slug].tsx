import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import {MDXRemote} from "next-mdx-remote";
import React from "react";

import MDXComponents from "../../components/MDXComponents";
import {getFiles, getFileBySlug} from "../../lib/mdx";

const DinamyPost: NextPage = (props: Post) => {
  console.log(props);

  return <>Hello World</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const post = await getFileBySlug("posts", String(params?.slug));

  return {
    props: {...post},
  };
};

export default DinamyPost;
