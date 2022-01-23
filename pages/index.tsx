import Vanta from "../components/Vanta";
import Head from "next/head";
import Script from "next/script";
import NextLink from "../components/NextLink";
import MySkills from "../components/MySkills";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import {
  Github,
  Linkedin,
  Npm,
  Stackoverflow,
} from "@styled-icons/simple-icons";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <Script src="three.r119.min.js" />
        <Script src="vanta.net.min.js" />
      </Head>

      <main>
        <section>
          <div className="relative w-full h-full ">
            <Vanta />
            <div id="about-me" className="container mx-auto p-4">
              <div className="p-4 prose max-w-[120ch] pt-12 sm:pt-24 pb-24 sm:pb-48 z-[999]">
                <h1 className="text-4xl text-primary-light drop-shadow-lg tracking-widest">
                  Welcome
                  <span className="text-secondary-light animate-pulse">.</span>
                </h1>
                <p className="text-primary-light drop-shadow-lg">
                  I am an experienced{" "}
                  <span className="text-secondary-light">
                    Software Engineer
                  </span>{" "}
                  with a background in{" "}
                  <span className="text-secondary-light">
                    Full Stack Development
                  </span>
                  ,{" "}
                  <span className="text-secondary-light">
                    Network Engineering
                  </span>{" "}
                  and a keen interest in Cyber Security.
                </p>
                <p className="text-primary-light drop-shadow-lg">
                  In my spare time I am proactively learning new technologies
                  through e-learning platforms and developing side projects. I
                  am currently focusing on upskilling myself in{" "}
                  <span className="text-secondary-light">
                    AWS, Azure, GCP, Kubernetes
                  </span>{" "}
                  and the latest scalable web development and database
                  technologies.
                </p>
                <p className="text-primary-light drop-shadow-lg">
                  My portfolio website was developed with{" "}
                  <span className="text-secondary-light">
                    Next.js, Typescript, Tailwindcss, GraphCMS/GraphQL, Twilio
                    SendGrid
                  </span>{" "}
                  and deployed to{" "}
                  <span className="text-secondary-light">Vercel</span>.
                </p>
                <p className="text-primary-light drop-shadow-lg underline-offset-4">
                  Check out my{" "}
                  <a
                    href="https://github.com/amroczeK"
                    target="_blank"
                    className="text-secondary-light"
                  >
                    Github
                  </a>{" "}
                  and other developer links to follow my development journey!
                </p>
                <div className="flex justify-start items-center gap-4 mt-8">
                  <NextLink href="https://github.com/amroczeK" target="_blank">
                    <Github className="text-[#727377] w-8 h-8 hover:text-primary-light" />
                  </NextLink>
                  <NextLink
                    href="https://www.linkedin.com/in/adrianmroczek/"
                    target="_blank"
                  >
                    <Linkedin className="text-[#727377] w-8 h-8 hover:text-primary-light" />
                  </NextLink>
                  <NextLink
                    href="https://stackoverflow.com/users/4134047/adr"
                    target="_blank"
                  >
                    <Stackoverflow className="text-[#727377] w-8 h-8 hover:text-primary-light" />
                  </NextLink>
                  <NextLink
                    href="https://www.npmjs.com/~amroczek90"
                    target="_blank"
                  >
                    <Npm className="text-[#727377] w-8 h-8 hover:text-primary-light" />
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative w-full bg-secondary-dark">
            <div id="skills" className="container relative mx-auto p-4">
              <div className="py-12 sm:py-24">
                <div className="flex flex-col items-center mb-12">
                  <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                    <span className="text-secondary-light animate-pulse">
                      {"> "}
                    </span>
                    My Skills
                  </h2>
                </div>
                <MySkills />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative w-full bg-primary-dark constellation">
            <div id="recent-posts" className="container relative mx-auto p-4">
              <div className="py-12 sm:py-24">
                <div className="flex flex-col items-center mb-12">
                  <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                    <span className="text-secondary-light animate-pulse">
                      {"> "}
                    </span>
                    Recent Posts
                  </h2>
                </div>
                <SearchBar placeholder="Search posts" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 p-8">
                  <Card title="Blog post #1" path="/blogs" slug="blog-post-1" />
                  <Card title="Blog post #2" path="/blogs" slug="blog-post-2" />
                  <Card title="Blog post #3" path="/blogs" slug="blog-post-3" />
                  <Card title="Blog post #4" path="/blogs" slug="blog-post-4" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <NextLink href="/blogs">
                    <button
                      className={`shadow-sm items-center mt-4 px-4 py-2 uppercase rounded-xl tracking-wide bg-alternative-light hover:bg-secondary-light hover:scale-105`}
                    >
                      VIEW ALL POSTS
                    </button>
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative w-full bg-secondary-dark">
            <div id="recent-work" className="container relative mx-auto p-4">
              <div className="py-12 sm:py-24">
                <div className="flex flex-col items-center mb-12">
                  <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                    <span className="text-secondary-light animate-pulse">
                      {"> "}
                    </span>
                    Recent Work
                  </h2>
                </div>
                <SearchBar placeholder="Search projects" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 p-8">
                  <Card
                    primary
                    title="Pproject #1"
                    path="/projects"
                    slug="project-1"
                  />
                  <Card
                    primary
                    title="Project #2"
                    path="/projects"
                    slug="project-2"
                  />
                  <Card
                    primary
                    title="Project #3"
                    path="/projects"
                    slug="project-3"
                  />
                  <Card
                    primary
                    title="Project #4"
                    path="/projects"
                    slug="project-4"
                  />
                </div>
                <div className="flex justify-center items-center w-full">
                  <NextLink href="/projects">
                    <button
                      className={`shadow-sm items-center mt-4 px-4 py-2 uppercase rounded-xl tracking-wide bg-secondary-light hover:bg-alternative-light hover:scale-105`}
                    >
                      VIEW ALL WORK
                    </button>
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
