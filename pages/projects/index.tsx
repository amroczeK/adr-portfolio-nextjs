import Card from "../components/Card";

export default function Projects({}) {
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 p-8">
                <Card  title="PROJECT #1" />
                <Card  title="PROJECT #2" />
                <Card  title="PROJECT #3" />
                <Card  title="PROJECT #4" />
                <Card  title="PROJECT #5" />
                <Card  title="PROJECT #6" />
                <Card  title="PROJECT #7" />
                <Card  title="PROJECT #8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
