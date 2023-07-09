import {
  Vercel,
  Dotnet,
  Scala,
  Microsoftazure,
  Typescript,
  Express,
  Spring,
  Java,
  Terraform,
  Ansible,
  ReactLogo,
  Nodedotjs,
  Javascript,
  Googlecloud,
  Amazonaws,
  Docker,
  Kubernetes,
  Python,
  Mongodb,
  Postgresql,
  Firebase,
  Amazondynamodb,
  Mysql,
  Tailwindcss,
  Css3,
  Graphql,
  Newrelic,
  Pagerduty,
  Nextdotjs,
  Nestjs,
} from "@styled-icons/simple-icons";

export default function ({ small = false }: { small?: Boolean }) {
  return (
    <>
      <details open className="p-4">
        <summary className="text-secondary-light cursor-pointer">
          <span
            className={`text-primary-light tracking-widest ${
              !small ? "text-lg" : "text-base"
            } drop-shadow-sm ml-1`}
          >
            Programming Languages
          </span>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-8 p-4 mt-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Javascript className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Javascript</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Typescript className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Typescript</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Graphql className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">GraphQL</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Terraform className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Terraform</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Ansible className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Ansible</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <div className="w-6 h-6 bg-alternative-light flex rounded-full justify-center items-center">
                <p className="text-primary-dark font-semibold sm:font-normal text-sm">
                  C#
                </p>
              </div>
              <h3 className="text-primary-light tracking-widest">C Sharp</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Java className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Java</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Python className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Python</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Scala className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Scala</h3>
            </div>
            <AdvancedBeginner />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Css3 className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">CSS</h3>
            </div>
            <Proficient />
          </div>
        </div>
      </details>
      <details className="p-4">
        <summary className="text-secondary-light cursor-pointer">
          <span
            className={`text-primary-light tracking-widest ${
              !small ? "text-lg" : "text-base"
            } drop-shadow-sm ml-1`}
          >
            Libraries and Frameworks
          </span>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-8 p-4 mt-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <ReactLogo className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">React.js</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Nodedotjs className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Node.js</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Express className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Express.js</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Nextdotjs className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Next.js</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Nestjs className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">NestJS</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Spring className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Spring</h3>
            </div>
            <Competent />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Dotnet className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">
                Dotnet Core
              </h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Tailwindcss className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">
                Tailwindcss
              </h3>
            </div>
            <Proficient />
          </div>
        </div>
      </details>

      <details className="p-4">
        <summary className="text-secondary-light cursor-pointer">
          <span
            className={`text-primary-light tracking-widest ${
              !small ? "text-lg" : "text-base"
            } drop-shadow-sm ml-1`}
          >
            Cloud Platforms
          </span>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-8 p-4 mt-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Amazonaws className="w-6 h-6 text-alternative-light" />
              <h3 className="text-lg text-primary-light tracking-widest">
                AWS
              </h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Microsoftazure className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Azure</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Googlecloud className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">GCP</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Vercel className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Vercel</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Newrelic className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">New Relic</h3>
            </div>
            <div className="flex gap-1 w-40 bg-primary-dark p-1">
              <div className="bg-secondary-light w-7 h-3" />
              <div className="bg-secondary-light w-7 h-3" />
              <div className="bg-secondary-light w-7 h-3 animate-pulse" />
            </div>
            <p className="text-xs text-primary-light tracking-widest text-right">
              Competent
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Pagerduty className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Pagerduty</h3>
            </div>
            <AdvancedBeginner />
          </div>
        </div>
      </details>
      <details className="p-4">
        <summary className="text-secondary-light cursor-pointer">
          <span
            className={`text-primary-light tracking-widest ${
              !small ? "text-lg" : "text-base"
            } drop-shadow-sm ml-1`}
          >
            Container Platforms
          </span>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-8 p-4 mt-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Docker className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Docker</h3>
            </div>
            <Proficient />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Kubernetes className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Kubernetes</h3>
            </div>
            <Competent />
          </div>
        </div>
      </details>
      <details className="p-4">
        <summary className="text-secondary-light cursor-pointer">
          <span
            className={`text-primary-light tracking-widest ${
              !small ? "text-lg" : "text-base"
            } drop-shadow-sm ml-1`}
          >
            Database Technologies
          </span>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-8 p-4 mt-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Amazondynamodb className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">DynamoDB</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Mongodb className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">MongoDB</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Postgresql className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">PostgreSQL</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Firebase className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">Firebase</h3>
            </div>
            <Competent />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-1">
              <Mysql className="w-6 h-6 text-alternative-light" />
              <h3 className="text-primary-light tracking-widest">MySQL</h3>
            </div>
            <Competent />
          </div>
        </div>
      </details>
    </>
  );
}

function Beginner() {
  return (
    <>
      <div className="flex gap-1 w-40 bg-primary-dark p-1">
        <div className="bg-secondary-light w-7 h-3 animate-pulse" />
      </div>
      <p className="text-xs text-primary-light tracking-widest text-right">
        Beginner
      </p>
    </>
  );
}

function AdvancedBeginner() {
  return (
    <>
      <div className="flex gap-1 w-40 bg-primary-dark p-1">
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3 animate-pulse" />
      </div>
      <p className="text-xs text-primary-light tracking-widest text-right">
        Advanced Beginner
      </p>
    </>
  );
}

function Competent() {
  return (
    <>
      <div className="flex gap-1 w-40 bg-primary-dark p-1">
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3 animate-pulse" />
      </div>
      <p className="text-xs text-primary-light tracking-widest text-right">
        Competent
      </p>
    </>
  );
}

function Proficient() {
  return (
    <>
      <div className="flex gap-1 w-40 bg-primary-dark p-1">
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3 animate-pulse" />
      </div>
      <p className="text-xs text-primary-light tracking-widest text-right">
        Proficient
      </p>
    </>
  );
}

function Expert() {
  return (
    <>
      <div className="flex gap-1 w-40 bg-primary-dark p-1">
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3" />
        <div className="bg-secondary-light w-7 h-3 animate-pulse" />
      </div>
      <p className="text-xs text-primary-light tracking-widest text-right">
        Expert
      </p>
    </>
  );
}
