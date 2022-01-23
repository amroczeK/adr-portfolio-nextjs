import { useRouter } from "next/router";
import NextLink from "./NextLink";
import { IProject } from "../types/index";
import { MDXRemote } from "next-mdx-remote";

export default function ProjectCard({ project }: { project: IProject }) {
  const { asPath } = useRouter();
  return (
    <div
      className={`w-72 h-full bg-secondary-dark rounded-xl shadow-sm hover:shadow-xl cursor-pointer hover:scale-105`}
    >
      <NextLink
        href={`${
          asPath === "/projects"
            ? `${asPath}/${project?.slug}`
            : `/projects/${project?.slug}`
        }`}
      >
        <img
          className="object-contain rounded-t-xl"
          src={project.thumbnail.url}
        />
        <div className="p-4">
          <h3
            className={`text-secondary-light uppercase text-2xl drop-shadow-lg tracking-widest mb-2`}
          >
            {project.title}
          </h3>
          <div className="text-primary-light line-clamp-3">
            <MDXRemote {...project.descMarkdown} />
          </div>
          <button
            className={`mt-4 px-4 py-2 uppercase bg-secondary-light rounded-xl tracking-wide`}
          >
            Read More
          </button>
        </div>
      </NextLink>
    </div>
  );
}
