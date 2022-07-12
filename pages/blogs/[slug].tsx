import { GetStaticProps, GetStaticPaths } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { IBlogs, IBlog } from "../../types";
import ImageExpand from "../../components/ImageExpand";

export default function Blog({ blog }: { blog: IBlog }) {
  return (
    <main className="page-container">
      <section>
        <div id={blog.slug} className="content-container">
          <div className="py-12 sm:py-24">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                <span className="text-secondary-light animate-pulse">
                  {"> "}
                </span>
                {blog.title}
              </h2>
              <div className="w-full sm:max-w-5xl sm:mx-auto text-primary-light prose mt-12 prose-headings:text-alternative-light prose-a:text-alternative-light prose-strong:text-alternative-light bg-secondary-dark px-4 sm:px-6 py-8 rounded-lg">
                <MDXRemote
                  components={{ img: ImageExpand }}
                  {...blog.contentMarkdown}
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
    query GetBlogBySlug($slug: String!) {
      blog(where: { slug: $slug }) {
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

  const data: { blog: IBlog } = await client.request(query, {
    slug,
  });

  if (!data.blog) {
    return {
      notFound: true,
    };
  }

  let blog = data.blog;

  const contentMarkdown = await serialize(blog.content);

  return {
    props: {
      blog: {
        ...blog,
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
      blogs {
        slug
      }
    }
  `;

  const data: { blogs: IBlogs } = await client.request(query);

  return {
    paths: data.blogs?.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: "blocking",
  };
};
