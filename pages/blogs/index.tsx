import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";
import { useWindowSize } from "../../hooks/WindowSize";

export default function Blogs({}) {
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
                <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                  <span className="text-secondary-light animate-pulse">
                    {"> "}
                  </span>
                  Blog Posts
                </h2>
              </div>
              <Pagination itemsPerPage={itemsPerPage}>
                <Card title="POST #1" slug="blog-post-1" />
                <Card title="POST #2" slug="blog-post-2" />
                <Card title="POST #3" slug="blog-post-3" />
                <Card title="POST #4" slug="blog-post-4" />
                <Card title="POST #5" slug="blog-post-5" />
                <Card title="POST #6" slug="blog-post-6" />
                <Card title="POST #7" slug="blog-post-7" />
                <Card title="POST #8" slug="blog-post-8" />
                <Card title="POST #9" slug="blog-post-9" />
                <Card title="POST #10" slug="blog-post-10" />
                <Card title="POST #11" slug="blog-post-11" />
                <Card title="POST #12" slug="blog-post-12" />
                <Card title="POST #13" slug="blog-post-13" />
                <Card title="POST #14" slug="blog-post-14" />
                <Card title="POST #15" slug="blog-post-15" />
                <Card title="POST #16" slug="blog-post-16" />
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
