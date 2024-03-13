import { GetStaticProps } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import {
  LocationMarkerIcon,
  FlagIcon,
  CakeIcon,
  MailIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { Github, Linkedin } from "@styled-icons/simple-icons";
import {
  IJobs,
  IJob,
  IEducations,
  IEducation,
  IAwards,
  IAward,
} from "../../types";
import MySkills from "../../components/MySkills";

export default function Resume({
  jobs,
  educations,
  awards,
}: {
  jobs: IJobs;
  educations: IEducations;
  awards: IAwards;
}) {
  return (
    <main className="page-container">
      <div id="resume" className="content-container">
        <div className="py-12 sm:py-24">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest mr-3">
              <span className="text-secondary-light animate-pulse">{"> "}</span>
              Resume
            </h1>
          </div>
          <div className="flex flex-col max-w-5xl mx-auto py-8 px-4 gap-8 bg-secondary-dark rounded-lg">
            <section
              id="about-me"
              className="flex flex-col sm:flex-row gap-8 justify-between"
            >
              <div>
                <h2 className="flex items-center text-2xl text-left text-primary-light tracking-widest">
                  Adrian Mroczek
                </h2>
                <h3 className="flex items-center text-sm text-left text-secondary-light tracking-widest pt-1">
                  Senior Software Engineer
                </h3>
                <p className="text-sm pt-2 text-primary-light tracking-widest sm:max-w-[45ch] md:max-w-[55ch] lg:max-w-[80ch]">
                  Skilled full-stack engineer with 6 years' experience. Proven
                  success in delivering projects and collaborating with
                  cross-functional teams. Expert in web applications,
                  microservices, and event-driven architectures. Proficient in
                  various languages, frameworks, and cloud platforms.
                </p>
              </div>
              <div
                //className="flex flex-col gap-2 text-right"
                className="grid grid-cols-2 gap-2"
              >
                <div className="flex gap-2 items-center">
                  <LocationMarkerIcon className="w-6 h-6 text-alternative-light" />
                  <p className="text-xs text-primary-light">Perth, WA</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FlagIcon className="w-6 h-6 text-alternative-light" />
                  <p className="text-xs text-primary-light">Australia</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CakeIcon className="w-6 h-6 text-alternative-light" />
                  <p className="text-xs text-primary-light">09/09/1990</p>
                </div>
                <div className="flex gap-2 items-center col-span-2">
                  <MailIcon className="w-6 h-6 text-alternative-light" />
                  <p className="text-xs text-primary-light">
                    mroczek9990@gmail.com
                  </p>
                </div>
                <div className="flex gap-2 items-center col-span-2 md:col-span-1">
                  <GlobeAltIcon className="w-6 h-6 text-alternative-light" />
                  <p className="text-xs text-primary-light">
                    <a href="https://amroczek.dev" target="_blank">
                      amroczek.dev
                    </a>
                  </p>
                </div>
                <div className="flex gap-2 items-center col-span-1 md:col-span-1">
                  <Github className="ml-0.5 w-5 h-5 text-alternative-light" />
                  <p className="text-xs text-primary-light">
                    <a href="https://github.com/amroczeK" target="_blank">
                      /amroczeK
                    </a>
                  </p>
                </div>
                <div className="flex gap-2 items-center col-span-1 md:col-span-1">
                  <Linkedin className="ml-0.5 w-5 h-5 text-alternative-light" />
                  <p className="text-xs text-primary-light">
                    <a
                      href="https://www.linkedin.com/in/adrianmroczek/"
                      target="_blank"
                    >
                      /adrianmroczek
                    </a>
                  </p>
                </div>
              </div>
            </section>
            <div className="h-1 w-full bg-secondary-light" />
            <section id="my-skills">
              <h2 className="text-xl text-primary-light">Technical Skills</h2>
              <MySkills small={true} />
            </section>
            <div className="h-1 w-full bg-primary-dark" />
            <section id="my-career">
              <h2 className="text-xl text-primary-light mb-8">Experience</h2>
              <div className="relative flex flex-col">
                {jobs.map((e: IJob, index: number) => (
                  <div key={index}>
                    <CareerCard job={e} />
                    {index !== jobs.length - 1 && (
                      <div className="flex w-full justify-center">
                        <div className="w-1.5 h-12 bg-secondary-light" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
            <div className="h-1 w-full bg-primary-dark" />
            <section id="my-education">
              <h2 className="text-xl text-primary-light mb-8">Education</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-x-4 gap-y-12">
                {educations.map((e: IEducation, index: number) => (
                  <EducationCard key={index} education={e} />
                ))}
              </div>
            </section>
            <div className="h-1 w-full bg-primary-dark" />
            <section id="my-awards">
              <h2 className="text-xl text-primary-light mb-8">
                Honors & Awards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-x-4 gap-y-12">
                {awards.map((e: IAward, index: number) => (
                  <AwardCard key={index} award={e} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function CareerCard({ job }: { job: IJob }) {
  return (
    <div className="relative w-full bg-primary-dark p-4 rounded-lg">
      <div className="flex w-full justify-center items-center">
        <div className="absolute flex bg-secondary-light p-2 mb-8 rounded-full justify-center">
          <BriefcaseIcon className="w-6 h-6 text-primary-dark" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-light text-lg">{job.role}</h2>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h3 className="text-secondary-light max-w-[20ch] sm:max-w-full">
              {job.company}
            </h3>
            <div className="flex gap-2 items-center">
              <LocationMarkerIcon className="w-4 h-4 text-alternative-light" />
              <p className="text-xs text-primary-light">{job.location}</p>
            </div>
          </div>
          <div className="flex justify-between text-alternative-light">
            <p className="text-xs max-w-[25ch] sm:max-w-full">{job.team}</p>
            <p className="text-xs text-right">{job.startEndDate}</p>
          </div>
          <details open={true} className="mt-4">
            <summary className="text-secondary-light cursor-pointer">
              <span className="text-primary-light tracking-widest drop-shadow-sm">
                Summary
              </span>
            </summary>
            <div className="text-sm text-primary-light mt-2 prose max-w-fit">
              <MDXRemote {...job.summaryMarkdown} />
            </div>
          </details>
          {job.accomplishments && (
            <details className="mt-4">
              <summary className="text-secondary-light cursor-pointer">
                <span className="text-primary-light tracking-widest drop-shadow-sm">
                  Accomplishments / Responsibilities
                </span>
              </summary>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-alternative-light mt-2">
                {job.accomplishments.map((e: string, index: number) => (
                  <li key={index}>
                    <span className="text-sm text-primary-light sm:max-w-[30ch] break-words">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}

function EducationCard({ education }: { education: IEducation }) {
  return (
    <div className="relative w-full bg-primary-dark p-4 rounded-lg">
      <div className="flex w-full justify-center items-center">
        <div className="absolute flex bg-secondary-light p-2 mb-8 rounded-full justify-center">
          <AcademicCapIcon className="w-6 h-6 text-primary-dark" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-light text-lg">{education.degree}</h2>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h3 className="text-secondary-light max-w-[18ch] lg:max-w-full">
              {education.major}
            </h3>
            <div className="flex gap-2 items-center">
              <LocationMarkerIcon className="w-4 h-4 text-alternative-light" />
              <p className="text-xs text-primary-light">{education.location}</p>
            </div>
          </div>
          <div className="flex justify-between text-alternative-light">
            <p className="text-xs">{education.university}</p>
            <p className="text-xs text-right">{education.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AwardCard({ award }: { award: IAward }) {
  return (
    <div className="relative w-full bg-primary-dark p-4 rounded-lg">
      <div className="flex w-full justify-center items-center">
        <div className="absolute flex bg-secondary-light p-2 mb-8 rounded-full justify-center">
          <StarIcon className="w-6 h-6 text-primary-dark" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-light text-lg">{award.award}</h2>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h3 className="text-secondary-light max-w-[20ch] sm:max-w-full">
              {award.placement}
            </h3>
            <div className="flex gap-2 items-center">
              <LocationMarkerIcon className="w-4 h-4 text-alternative-light" />
              <p className="text-xs text-primary-light">{award.location}</p>
            </div>
          </div>
          <div className="flex justify-between text-alternative-light">
            <p className="text-xs max-w-[20ch] sm:max-w-full">
              {award.company}
            </p>
            <p className="text-xs text-right">{award.date}</p>
          </div>
          <details className="mt-4">
            <summary className="text-secondary-light cursor-pointer">
              <span className="text-primary-light tracking-widest drop-shadow-sm">
                Summary
              </span>
            </summary>
            <div className="text-sm text-primary-light mt-2">
              <MDXRemote {...award.summaryMarkdown} />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API!);

  const query = gql`
    query GetAllJobsAndEducationAndAwards {
      jobs(orderBy: priority_ASC) {
        role
        company
        team
        location
        startEndDate
        summary
        accomplishments
      }
      educations {
        university
        degree
        major
        location
        duration
      }
      awards {
        award
        company
        location
        placement
        date
        summary {
          markdown
        }
      }
    }
  `;

  const data: {
    jobs: IJobs;
    educations: IEducations;
    awards: IAwards;
  } = await client.request(query);

  let jobs = data.jobs;
  if (jobs.length > 0) {
    // @ts-ignore: Object is possibly 'null'.
    for (const [index, job] of jobs.entries()) {
      const summaryMarkdown = await serialize(job.summary);
      jobs[index].summaryMarkdown = summaryMarkdown;
    }
  }
  let awards = data.awards;
  if (awards.length > 0) {
    // @ts-ignore: Object is possibly 'null'.
    for (const [index, award] of awards.entries()) {
      const summaryMarkdown = await serialize(award.summary.markdown);
      awards[index].summaryMarkdown = summaryMarkdown;
    }
  }
  return {
    props: {
      jobs,
      educations: data.educations,
      awards,
    },
    revalidate: 60 * 60 * 24, // Regenerate data every 24 hours
  };
};
