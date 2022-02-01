import { useRouter } from "next/router";
import NextLink from "./NextLink";
import { IProject } from "../types/index";
import { MDXRemote } from "next-mdx-remote";

export default function ProjectCard({
  project,
  primary = false,
}: {
  project: IProject;
  primary?: Boolean;
}) {
  const { asPath } = useRouter();
  return (
    <NextLink
      href={`${
        asPath === "/projects"
          ? `${asPath}/${project?.slug}`
          : `/projects/${project?.slug}`
      }`}
    >
      <div
        className={`flex flex-col w-72 h-full ${
          primary ? "bg-primary-dark" : "bg-secondary-dark"
        } bg-secondary-dark rounded-xl shadow-sm hover:shadow-xl cursor-pointer hover:scale-105`}
      >
        <img
          className="object-cover w-full h-1/2 max-h-[192px] rounded-t-xl"
          src={project.thumbnail.url}
        />
        <div className="p-4">
          <h3
            className={`text-secondary-light line-clamp-2 uppercase text-xl drop-shadow-lg tracking-widest pb-2`}
          >
            {project.title}
          </h3>
          <div className="text-primary-light line-clamp-3">
            <MDXRemote {...project.descMarkdown} />
          </div>
          <button
            className={`mt-4 px-4 py-2 uppercase bg-secondary-light rounded-xl tracking-wide w-full`}
          >
            Read More
          </button>
        </div>
      </div>
    </NextLink>
  );
}
