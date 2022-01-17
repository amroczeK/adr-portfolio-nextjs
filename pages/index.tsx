import Vanta from "../components/Vanta";
import Head from "next/head";
import Script from "next/script";
import NextLink from "../components/NextLink";
import MySkills from "../components/MySkills";
import Card from "../components/Card";
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
                  I am an experienced Software Engineer with a background in
                  Full Stack Development, Network Engineering and a keen
                  interest in Cyber Security.
                </p>
                <p className="text-primary-light drop-shadow-lg">
                  I've developed scalable and secure applications, automating
                  the deployment & configuration of Telstra Enterprise services,
                  network elements and developed complex microservice web
                  applications enabling a scalable and resilient presentation
                  layer for Telstra's 4G/5G RAN Networks. I am currently
                  developing solutions for Telstra's Data Hub product with the
                  Core and Solutions team using the latest shiny technologies.
                </p>
                <p className="text-primary-light drop-shadow-lg">
                  In my spare time I am proactively learning new technologies
                  through e-learning platforms and developing side projects. My
                  portfolio website was developed with Next.js, Typescript,
                  Tailwindcss, GraphCMS/GraphQL, Twilio SendGrid and deployed to
                  Vercel.
                </p>
                <p className="text-primary-light drop-shadow-lg">
                  Check out my GitHub and other developer links to follow my
                  development journey!
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 p-8">
                  <Card title="Blog post" />
                  <Card title="Blog post" />
                  <Card title="Blog post" />
                  <Card title="Blog post" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <button
                    className={`shadow-sm items-center mt-4 px-4 py-2 uppercase rounded-xl tracking-wide bg-alternative-light hover:bg-secondary-light hover:scale-105`}
                  >
                    VIEW ALL POSTS
                  </button>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 p-8">
                  <Card primary title="Recent project" />
                  <Card primary title="Recent project" />
                  <Card primary title="Recent project" />
                  <Card primary title="Recent project" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <button
                    className={`shadow-sm items-center mt-4 px-4 py-2 uppercase rounded-xl tracking-wide bg-secondary-light hover:bg-alternative-light hover:scale-105`}
                  >
                    VIEW ALL WORK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
