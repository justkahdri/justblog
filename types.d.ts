declare global {
  interface Post {
    frontMatter: {
      title: string;
      slug: string;
      image: string;
      wordCount: number;
      readingTime: {
        minutes: number;
        text: string;
        time: number;
        words: number;
      };
    };
    mdxSource: {
      compiledSource: string;
    };
  }
}

export {};
