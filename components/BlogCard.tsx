import { useRouter } from "next/router";
import NextLink from "./NextLink";
import { IBlog } from "../types/index";
import { MDXRemote } from "next-mdx-remote";

export default function BlogCard({ blog }: { blog: IBlog }) {
  const { asPath } = useRouter();
  return (
    <div
      className={`w-72 h-full bg-secondary-dark rounded-xl shadow-sm hover:shadow-xl cursor-pointer hover:scale-105`}
    >
      <NextLink
        href={`${
          asPath === "/blogs"
            ? `${asPath}/${blog?.slug}`
            : `/blogs/${blog?.slug}`
        }`}
      >
        <img className="object-contain rounded-t-xl" src={blog.thumbnail.url} />
        <div className="p-4">
          <h3
            className={`text-alternative-light uppercase text-2xl drop-shadow-lg tracking-widest mb-2`}
          >
            {blog.title}
          </h3>
          <p className="text-primary-light line-clamp-3">
            <MDXRemote {...blog.descMarkdown} />
          </p>
          <button
            className={`mt-4 px-4 py-2 uppercase bg-alternative-light rounded-xl tracking-wide`}
          >
            Read More
          </button>
        </div>
      </NextLink>
    </div>
  );
}
