import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";
import Pagination from "../../components/Pagination";
import BlogCard from "../../components/BlogCard";
import { useWindowSize } from "../../hooks/WindowSize";
import { IBlog, IBlogs } from "../../types";

export default function Blogs({ blogs }: { blogs: IBlogs }) {
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default 4 per page
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 768) {
      setItemsPerPage(4);
    } else if (width > 768 && width <= 1024) {
      setItemsPerPage(6);
    } else if (width > 1024) {
      setItemsPerPage(8);
    }
  }, [width, setItemsPerPage]);

  return (
    <div>
      <section>
        <div className="relative w-full constellation">
          <div id="recent-work" className="container relative mx-auto p-4">
            <div className="py-12 sm:py-24">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                  <span className="text-secondary-light animate-pulse">
                    {"> "}
                  </span>
                  Blog Posts
                </h2>
              </div>
              <Pagination itemsPerPage={itemsPerPage}>
                {blogs.map((e: IBlog, idx: number) => (
                  <BlogCard key={idx} blog={e} />
                ))}
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API!);

  const query = gql`
    query GetAllBlogs {
      blogs {
        title
        slug
        thumbnail {
          url
          fileName
        }
        description {
          markdown
        }
        content {
          markdown
        }
      }
    }
  `;

  const data: {
    blogs: IBlogs;
  } = await client.request(query);

  let blogs = data.blogs;
  if (blogs.length > 0) {
    // @ts-ignore: Object is possibly 'null'.
    for (const [index, blog] of blogs.entries()) {
      const descMarkdown = await serialize(blog.description.markdown);
      blogs[index].descMarkdown = descMarkdown;
    }
  }

  return {
    props: {
      blogs,
    },
    revalidate: 60 * 60 * 24, // Regenerate data every 24 hours
  };
};
