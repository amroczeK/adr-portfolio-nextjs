import { useRouter } from "next/router";
import NextLink from "./NextLink";
import { IBlog } from "../types/index";
import { MDXRemote } from "next-mdx-remote";

export default function BlogCard({ blog }: { blog: IBlog }) {
  const { asPath } = useRouter();
  return (
    <NextLink
      href={`${
        asPath === "/blogs" ? `${asPath}/${blog?.slug}` : `/blogs/${blog?.slug}`
      }`}
    >
      <div
        className={`flex flex-col w-72 h-full bg-secondary-dark rounded-xl shadow-sm hover:shadow-xl cursor-pointer hover:scale-105`}
      >
        <img
          className="object-cover w-full h-1/2 rounded-t-xl"
          src={blog.thumbnail.url}
        />
        <div className="p-4">
          <h3
            className={`text-alternative-light line-clamp-2 uppercase text-xl drop-shadow-lg tracking-widest pb-2`}
          >
            {blog.title}
          </h3>
          <div className="text-primary-light line-clamp-3">
            <MDXRemote {...blog.descMarkdown} />
          </div>
          <button
            className={`mt-4 px-4 py-2 uppercase bg-alternative-light rounded-xl tracking-wide w-full`}
          >
            Read More
          </button>
        </div>
      </div>
    </NextLink>
  );
}
