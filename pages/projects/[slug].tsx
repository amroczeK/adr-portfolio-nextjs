import { GetStaticProps, GetStaticPaths } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { IProjects, IProject } from "../../types";
import ImageExpand from "../../components/ImageExpand";

export default function Project({ project }: { project: IProject }) {
  return (
    <main className="page-container">
      <section>
        <div id={project.slug} className="content-container">
          <div className="py-12 sm:py-24">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                <span className="text-secondary-light animate-pulse">
                  {"> "}
                </span>
                {project.title}
              </h2>
              <div className="w-full sm:max-w-5xl sm:mx-auto text-primary-light prose mt-12 prose-headings:text-alternative-light prose-a:text-alternative-light prose-strong:text-alternative-light bg-secondary-dark px-4 sm:px-6 py-8 rounded-lg">
                <MDXRemote
                  components={{ img: ImageExpand }}
                  {...project.contentMarkdown}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API!);

  const slug = params?.slug as string;

  const query = gql`
    query GetProjectBySlug($slug: String!) {
      project(where: { slug: $slug }) {
        title
        slug
        thumbnail {
          url
          fileName
        }
        content
      }
    }
  `;

  const data: { project: IProject } = await client.request(query, {
    slug,
  });

  if (!data.project) {
    return {
      notFound: true,
    };
  }

  let project = data.project;

  const contentMarkdown = await serialize(project.content);

  return {
    props: {
      project: {
        ...project,
        contentMarkdown,
      },
    },
    revalidate: 60 * 60 * 24, // Regenerate data every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API!);

  const query = gql`
    query GetAllProjects {
      projects {
        slug
      }
    }
  `;

  const data: { projects: IProjects } = await client.request(query);

  return {
    paths: data.projects?.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: "blocking",
  };
};
