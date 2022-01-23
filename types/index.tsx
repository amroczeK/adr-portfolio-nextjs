import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface IJob {
  role: string;
  company: string;
  team: string;
  startEndDate: string;
  location: string;
  summary: string;
  accomplishments: [string];
}

export interface IJobs extends Array<IJob> {
  [index: number]: IJob;
}

export interface IBlog {
  title: string;
  slug: string;
  thumbnail: {
    url: string;
    fileName: string;
  };
  description: {
    markdown: string;
    html: string;
    text: string;
  };
  content: {
    markdown: string;
    html: string;
    text: string;
  };
  descMarkdown: MDXRemoteSerializeResult;
  contentMarkdown: MDXRemoteSerializeResult;
}

export interface IBlogs extends Array<IBlog> {
  [index: number]: IBlog;
}

export interface IProject {
  title: string;
  slug: string;
  thumbnail: {
    url: string;
    fileName: string;
  };
  description: {
    markdown: string;
    html: string;
    text: string;
  };
  content: {
    markdown: string;
    html: string;
    text: string;
  };
  descMarkdown: MDXRemoteSerializeResult;
  contentMarkdown: MDXRemoteSerializeResult;
}

export interface IProjects extends Array<IProject> {
  [index: number]: IProject;
}
