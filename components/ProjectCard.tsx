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
        className={`relative flex flex-col w-72 h-[26rem] ${
          primary ? "bg-primary-dark" : "bg-secondary-dark"
        } bg-secondary-dark rounded-xl shadow-sm hover:shadow-xl cursor-pointer hover:scale-105`}
      >
        <div className="flex w-full rounded-t-xl justify-center">
          <img
            className="object-cover h-[192px] rounded-t-xl"
            src={project.thumbnail.url}
          />
        </div>
        <div className="relative p-4 h-full">
          <h3
            className={`text-secondary-light line-clamp-2 uppercase text-xl drop-shadow-lg tracking-widest pb-2`}
          >
            {project.title}
          </h3>
          <div className="text-primary-light line-clamp-3">
            <MDXRemote {...project.descMarkdown} />
          </div>

          <div className="w-full flex justify-center">
            <button
              className={`absolute w-[90%] bottom-0 my-4 px-4 py-2 uppercase bg-secondary-light rounded-xl tracking-wide w-full`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </NextLink>
  );
}
