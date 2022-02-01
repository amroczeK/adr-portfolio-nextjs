import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface IJob {
  role: string;
  company: string;
  team: string;
  startEndDate: string;
  location: string;
  summary: string;
  accomplishments: [string];
  summaryMarkdown: MDXRemoteSerializeResult;
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
  };
  content: string;
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
  };
  content:  string;
  descMarkdown: MDXRemoteSerializeResult;
  contentMarkdown: MDXRemoteSerializeResult;
}

export interface IProjects extends Array<IProject> {
  [index: number]: IProject;
}

export interface IEducation {
  university: string;
  degree: string;
  major: string;
  location: string;
  duration: string;
}

export interface IEducations extends Array<IEducation> {
  [index: number]: IEducation;
}

export interface IAward {
  award: string;
  placement: string;
  company: string;
  location: string;
  date: string;
  summary: {
    markdown: string;
  };
  summaryMarkdown: MDXRemoteSerializeResult;
}

export interface IAwards extends Array<IAward> {
  [index: number]: IAward;
}
