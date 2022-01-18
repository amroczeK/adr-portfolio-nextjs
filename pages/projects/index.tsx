import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";
import { useWindowSize } from "../../hooks/WindowSize";

export default function Projects({}) {
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
                  Projects
                </h2>
              </div>
              <Pagination itemsPerPage={itemsPerPage}>
                <Card title="PROJECT #1" slug="project-1" />
                <Card title="PROJECT #2" slug="project-2" />
                <Card title="PROJECT #3" slug="project-3" />
                <Card title="PROJECT #4" slug="project-4" />
                <Card title="PROJECT #5" slug="project-5" />
                <Card title="PROJECT #6" slug="project-6" />
                <Card title="PROJECT #7" slug="project-7" />
                <Card title="PROJECT #8" slug="project-8" />
                <Card title="PROJECT #9" slug="project-9" />
                <Card title="PROJECT #10" slug="project-10" />
                <Card title="PROJECT #11" slug="project-11" />
                <Card title="PROJECT #12" slug="project-12" />
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
