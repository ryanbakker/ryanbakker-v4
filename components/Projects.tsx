import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

function Projects() {
  return (
    <section className="dark:bg-neutral-900">
      <div className="section-container pt-20">
        <h3 className="section-heading">
          <span>Projects</span>
          <span>Projects</span>
        </h3>

        <div className="app-showcase">
          <div className="w-full">
            <div className="showcaselayout">
              {/* Left */}
              <div className="first-project-wrapper">
                <Link
                  href="/"
                  className="hover:scale-[1.006] transition-transform"
                >
                  <div className="image-wrapper">
                    <Image
                      src="/projects/project1.png"
                      alt="project one"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="text-content">
                    <h2>
                      On-Demand Rides Made Simple with a Powerful, User-Friendly
                      App called Ryde
                    </h2>
                    <p className="text-white md:text-xl">
                      An app built with React Native, Expo, & TailwindCSS for a
                      fast, user-friendly experience.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Right */}
              <div className="project-list-wrapper overflow-hidden">
                <Link
                  href="/"
                  className="hover:scale-[1.008] transition-transform w-full"
                >
                  <div className="project">
                    <div className="image-wrapper bg-neutral-800">
                      <Image
                        src="/projects/project1.png"
                        alt="project two"
                        width={500}
                        height={500}
                      />
                    </div>
                    <h2>Library Management Platform</h2>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="hover:scale-[1.008] transition-transform w-full"
                >
                  <div className="project">
                    <div className="image-wrapper bg-neutral-800">
                      <Image
                        src="/projects/project1.png"
                        alt="project three"
                        width={500}
                        height={500}
                      />
                    </div>
                    <h2>YC Directory - A Startup App</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 px-10 py-5 flex items-center ">
          <Button asChild size="lg">
            <Link href="/">
              Explore more projects <MoveRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
