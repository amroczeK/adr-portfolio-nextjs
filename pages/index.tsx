import Vanta from "./components/Vanta";
import Head from "next/head";
import Script from "next/script";

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
            <div className="container mx-auto p-4">
              <div className="p-4 prose max-w-[120ch] pt-12 sm:pt-24 pb-24 sm:pb-48 z-[999]">
                <h1 className="text-4xl text-primary-light">
                  Welcome
                  <span className="text-secondary-light animate-pulse">.</span>
                </h1>
                <p className="text-primary-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  scelerisque lectus massa, nec vulputate lectus posuere sit
                  amet. Aenean eu sollicitudin nunc, at posuere nisi.
                  Pellentesque egestas eros velit, vitae hendrerit ex fringilla
                  vitae. Ut vehicula, augue eu vestibulum dictum, nulla sapien
                  ornare neque, nec vestibulum tortor dui sed justo. Integer
                  hendrerit nibh velit, nec mattis neque vehicula non. Sed quis
                  lacinia orci.
                </p>
                <p className="text-primary-light">
                  Ut posuere consequat ipsum vitae venenatis. Praesent dui odio,
                  condimentum at enim ut, malesuada rutrum velit. Nulla vitae
                  pulvinar nisi. Sed efficitur est magna, et dapibus ante
                  dapibus at. Curabitur rhoncus cursus posuere. Suspendisse
                  blandit tellus quis libero pretium pellentesque. Sed bibendum,
                  orci ac consectetur consequat, ex mi pellentesque justo, ut
                  sodales lorem tortor a felis. Phasellus vehicula risus massa,
                  a mattis diam molestie non.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative w-full h-96 bg-secondary-dark">
            <div id="skills" className="container relative mx-auto p-4">
              <div className="py-12 sm:py-24">
                <div className="flex flex-col items-center">
                  <h2 className="text-primary-light text-center text-2xl">
                    My Skills
                  </h2>
                  <div className="h-1 w-[8.25rem] mt-2 bg-secondary-light animate-pulse"/>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
