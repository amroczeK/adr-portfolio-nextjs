import {
  LocationMarkerIcon,
  FlagIcon,
  CakeIcon,
  MailIcon,
  GlobeAltIcon,
  BriefcaseIcon,
} from "@heroicons/react/solid";
import { Github, Linkedin } from "@styled-icons/simple-icons";

export default function Resume({}) {
  return (
    <div>
      <section>
        <div className="relative w-full constellation">
          <div id="recent-work" className="container relative mx-auto p-4">
            <div className="py-12 sm:py-24">
              <div className="flex flex-col items-center mb-12">
                <h1 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                  <span className="text-secondary-light animate-pulse">
                    {"> "}
                  </span>
                  Resume
                </h1>
              </div>
              <div className="flex flex-col py-8 px-4 gap-8 bg-secondary-dark rounded-lg">
                <div className="flex flex-col sm:flex-row gap-8 justify-between">
                  <div>
                    <h2 className="flex items-center text-2xl text-left text-primary-light tracking-widest">
                      Adrian Mroczek
                    </h2>
                    <h3 className="flex items-center text-sm text-left text-secondary-light tracking-widest pt-1">
                      Fullstack Engineer
                    </h3>
                    <p className="text-xs pt-2 text-alternative-light tracking-widest sm:max-w-[45ch] md:max-w-[55ch] lg:max-w-[80ch]">
                      Experienced Software Engineer with a background in Full
                      Stack Development, Network Engineering, DevOps and
                      interest in Cyber Security. that loves learning and
                      playing with new technologies.
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
                    <div className="flex gap-2 items-center col-span-2 md:col-span-1">
                      <Github className="ml-0.5 w-5 h-5 text-alternative-light" />
                      <p className="text-xs text-primary-light">
                        <a href="https://github.com/amroczeK" target="_blank">
                          /amroczeK
                        </a>
                      </p>
                    </div>
                    <div className="flex gap-2 items-center col-span-2 md:col-span-1">
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
                </div>
                <div className="h-1 w-full bg-secondary-light" />
                <div>
                  <h2 className="text-xl text-primary-light mb-8">Career</h2>
                  <div>
                    <CareerCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CareerCard ({}){
  return (
    <div className="relative w-full bg-primary-dark p-4 rounded-lg">
      <div className="flex w-full justify-center items-center">
        <div className="absolute flex bg-secondary-light p-2 mb-8 rounded-full justify-center">
          <BriefcaseIcon className="w-6 h-6 text-primary-dark" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-primary-light">Software Engineer</h2>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h3 className="text-secondary-light">Telstra</h3>
            <div className="flex gap-2 items-center">
              <LocationMarkerIcon className="w-4 h-4 text-alternative-light" />
              <p className="text-xs text-primary-light">Perth, WA</p>
            </div>
          </div>
          <div className="flex justify-between text-alternative-light">
            <p className="text-xs">IoT Domain Engineering</p>
            <p className="text-xs">July 2021 - Present</p>
          </div>
          <p className="text-sm text-primary-light mt-4">
            Working in the IoT Domain Engineering team developing Azure Cloud
            Applications and products for the IoT Software Solutions group,
            enabling businesses to utilize, visualize, analyse and share the
            data their IoT devices generate through Telstra's NB-IoT network on
            the Telstra Data Hub platform.
          </p>
        </div>
      </div>
    </div>
  );
}