import React from "react";
import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import {MDXRemote} from "next-mdx-remote";

import MDXComponents from "../../components/MDXComponents";
import {getFiles, getFileBySlug} from "../../lib/mdx";

const DinamyPost: NextPage<Post> = ({frontMatter, mdxSource}) => {
  return (
    <div className="container px-5 mx-auto">
      <h1 className="mb-8 text-4xl text-center font-bold">{frontMatter.title}</h1>
      <article className="prose">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </article>
    </div>
  );
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
