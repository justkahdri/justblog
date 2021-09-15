import type {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import React from "react";

import Link from "../components/Link";
import {getAllFilesFrontMatter} from "../lib/mdx";

type Props = {
  posts: {
    title: string;
    slug: string;
    image: string;
  }[];
};

const Home: NextPage<Props> = ({posts}) => {
  return (
    <div className="container px-5 mx-auto">
      <Head>
        <title>Just Blog</title>
        <meta
          content="Just a blog where I share what I learn through my journey in tech!"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="py-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
        ))}
      </main>

      <footer>
        <a href="https://github.com/justkahdri" rel="noopener noreferrer" target="_blank">
          Made by JustKahdri with 💚
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("posts");

  return {props: {posts}};
};

export default Home;
