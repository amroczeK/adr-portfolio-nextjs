import Pagination from "../../components/Pagination";
import Card from "../../components/Card";

export default function Blogs({}) {
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
              <Pagination itemsPerPage={8}>
                <Card title="POST #1" slug="blog-post-1" />
                <Card title="POST #2" slug="blog-post-2" />
                <Card title="POST #3" slug="blog-post-3" />
                <Card title="POST #4" slug="blog-post-4" />
                <Card title="POST #5" slug="blog-post-5" />
                <Card title="POST #6" slug="blog-post-6" />
                <Card title="POST #7" slug="blog-post-7" />
                <Card title="POST #8" slug="blog-post-8" />
                <Card title="POST #1" slug="blog-post-1" />
                <Card title="POST #2" slug="blog-post-2" />
                <Card title="POST #3" slug="blog-post-3" />
                <Card title="POST #4" slug="blog-post-4" />
                <Card title="POST #5" slug="blog-post-5" />
                <Card title="POST #6" slug="blog-post-6" />
                <Card title="POST #7" slug="blog-post-7" />
                <Card title="POST #8" slug="blog-post-8" />
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
