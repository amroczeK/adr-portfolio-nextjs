import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";
import Pagination from "../../components/Pagination";
import ProjectCard from "../../components/ProjectCard";
import { useWindowSize } from "../../hooks/WindowSize";
import { IProject, IProjects } from "../../types";

export default function Projects({ projects }: { projects: IProjects }) {
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
                <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest mr-3">
                  <span className="text-secondary-light animate-pulse">
                    {"> "}
                  </span>
                  Projects
                </h2>
              </div>
              <Pagination itemsPerPage={itemsPerPage}>
                {projects.map((e: IProject, idx: number) => (
                  <ProjectCard key={idx} project={e} />
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
    query GetAllProjects {
      projects {
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
    projects: IProjects;
  } = await client.request(query);

  let projects = data.projects;
  if (projects.length > 0) {
    // @ts-ignore: Object is possibly 'null'.
    for (const [index, project] of projects.entries()) {
      const descMarkdown = await serialize(project.description.markdown);
      projects[index].descMarkdown = descMarkdown;
    }
  }

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24, // Regenerate data every 24 hours
  };
};
