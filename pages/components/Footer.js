import { Github, Linkedin, Npm, Stackoverflow } from "@styled-icons/simple-icons";
import NextLink from "../components/NextLink"

export default function Footer() {
  return (
    <div className="container mx-auto p-4 text-primary-light text-sm bg-primary-dark w-full h-20 flex justify-between items-center">
      <div className="flex">
        <p>Copyright © 2022 Adrian Mroczek All Rights Reserved.</p>
      </div>
      <div className="flex items-center gap-4">
        <NextLink href="/">Home</NextLink>
        <NextLink href="/#about-me">About Me</NextLink>
        <NextLink href="/blogs">Blogs</NextLink>
        <NextLink href="/projects">Projects</NextLink>
        <NextLink href="/contact">Contact</NextLink>
      </div>
      <div className="flex gap-4">
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
    </div>
  );
}
