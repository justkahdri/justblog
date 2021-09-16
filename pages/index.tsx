import type {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import React, {useMemo, useState} from "react";

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
  const [search, setSearch] = useState("");
  const filteredPosts = useMemo(
    () =>
      posts.filter((frontMatter) => frontMatter.title.toLowerCase().includes(search.toLowerCase())),
    [posts, search],
  );

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
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            className="px-4 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white text-gray-900"
            placeholder="Search articles"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>

        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            className="block rounded border border-gray-200 p-4  hover:bg-gray-300"
            href={`/blog/${post.slug}`}
          >
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
