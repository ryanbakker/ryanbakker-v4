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
                  <div className="project">
                    <div className="image-wrapper bg-neutral-800 rounded-lg">
                      <Image
                        src="/projects/project-one.png"
                        alt="project one"
                        width={800}
                        height={800}
                        className="!object-contain !py-5"
                      />
                    </div>
                  </div>
                  <div className="text-content">
                    <h2>
                      TimeIt - Task manager for students to keep track of their
                      studies and take notes
                    </h2>
                    <p className="text-white md:text-xl">
                      An app built with Next.js 14 combined with the security
                      using Clerk Authentication and Shadcn for responsive
                      design.
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
                        src="/projects/project-two.png"
                        alt="project two"
                        width={500}
                        height={500}
                      />
                    </div>
                    <h2>
                      Shifter - Manage, Share & Explore Car Community Meetups
                    </h2>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="hover:scale-[1.008] transition-transform w-full"
                >
                  <div className="project">
                    <div className="image-wrapper bg-neutral-800">
                      <Image
                        src="/projects/project-three.png"
                        alt="project three"
                        width={500}
                        height={500}
                      />
                    </div>
                    <h2>ePass - Event Management & Ticket Purchasing</h2>
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
