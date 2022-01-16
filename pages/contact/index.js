import ContactForm from "../components/Forms/Contact";

export default function Contact({}) {
  return (
    <div className="h-[81vh] constellation">
      <main>
        <section>
          <div className="relative w-full">
            <div id="recent-work" className="container relative mx-auto p-4">
              <div className="py-12 sm:py-24">
                <div className="flex flex-col items-center mb-12">
                  <h2 className="text-primary-light text-center text-2xl drop-shadow-lg tracking-widest">
                    <span className="text-secondary-light animate-pulse">
                      {"> "}
                    </span>
                    Contact Me
                  </h2>
                </div>
                <div className="flex justify-center items-center">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
