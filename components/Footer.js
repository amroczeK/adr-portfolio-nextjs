import {
  Github,
  Linkedin,
  Npm,
  Stackoverflow,
} from "@styled-icons/simple-icons";
import NextLink from "../components/NextLink";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto p-4 gap-4 text-primary-light text-sm bg-primary-dark w-full">
        <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-8 p-4">
          <div className="flex justify-center sm:justify-end items-center gap-4">
            <NextLink href="https://github.com/amroczeK" target="_blank">
              <Github className="text-primary-light/40 w-8 h-8 hover:text-primary-light" />
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/in/adrianmroczek/"
              target="_blank"
            >
              <Linkedin className="text-primary-light/40 w-8 h-8 hover:text-primary-light" />
            </NextLink>
            <NextLink
              href="https://stackoverflow.com/users/4134047/adr"
              target="_blank"
            >
              <Stackoverflow className="text-primary-light/40 w-8 h-8 hover:text-primary-light" />
            </NextLink>
            <NextLink href="https://www.npmjs.com/~amroczek90" target="_blank">
              <Npm className="text-primary-light/40 w-8 h-8 hover:text-primary-light" />
            </NextLink>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <NextLink
              href="/"
              className="hover:underline hover:underline-offset-8"
            >
              Home
            </NextLink>
            <NextLink
              href="/#about-me"
              className="hover:underline hover:underline-offset-8"
            >
              About Me
            </NextLink>
            <NextLink
              href="/blogs"
              className="hover:underline hover:underline-offset-8"
            >
              Blogs
            </NextLink>
            <NextLink
              href="/projects"
              className="hover:underline hover:underline-offset-8"
            >
              Projects
            </NextLink>
            <NextLink
              href="/contact"
              className="hover:underline hover:underline-offset-8"
            >
              Contact
            </NextLink>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row break-words justify-center text-center p-4">
          <p>Copyright © 2022 Adrian Mroczek. All Rights Reserved.</p>
          {/* <p>All Rights Reserved.</p> */}
        </div>
      </div>
    </footer>
  );
}
