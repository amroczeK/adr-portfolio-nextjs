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
        className={`flex flex-col w-72 h-[26rem] bg-secondary-dark rounded-xl shadow-sm hover:shadow-xl cursor-pointer hover:scale-105`}
      >
        <div className="flex w-full rounded-t-xl justify-center">
          <img
            className="object-cover h-[192px] rounded-t-xl"
            src={blog.thumbnail.url}
          />
        </div>
        <div className="relative p-4 h-full">
          <h3
            className={`text-alternative-light line-clamp-2 uppercase text-xl drop-shadow-lg tracking-widest pb-2`}
          >
            {blog.title}
          </h3>
          <div className="text-primary-light line-clamp-3">
            <MDXRemote {...blog.descMarkdown} />
          </div>
          <div className="w-full flex justify-center">
            <button
              className={`absolute w-[90%] bottom-0 my-4 px-4 py-2 uppercase bg-alternative-light rounded-xl tracking-wide w-full`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </NextLink>
  );
}
