import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row">
      <div className="section-container flex-col">
        <h3 className="section-heading">
          <span>About me</span>
          <span>About me</span>
        </h3>

        <div>
          <p className="mt-8 opacity-70 max-w-[46rem]">
            Welcome to the website of a generalist with just a sprinkle of ADHD.
            I&apos;ve been coding since I was thirteen, starting out with HTML
            and CSS in Notepad++. These days, I&apos;ve got two development
            diplomas under my belt and I&apos;m currently working toward a
            Bachelor's in Computer Science, with plans to major in data science
            so I can dive deeper into algorithms and big data.
            <br />
            <br />
            When I&apos;m not glued to a screen and running on a concerning
            amount of caffeine, you&apos;ll probably find me outdoors — camping,
            hiking, or mountain biking. (This is starting to sound like a dating
            app bio, isn&apos;t it?) I also enjoy photography, and drawing —
            badly. But hey, it&apos;s a creative outlet. Thanks for reading the
            About section of a potentially crazy person.
          </p>

          <ul className="flex flex-row gap-5 mt-8">
            <li>
              <a href="mailto:ryanbakker@outlook.co.nz?subject=Website%20Enquiry">
                <Mail className="opacity-70 hover:opacity-100 transition-all" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryan-bakker/">
                <Linkedin className="opacity-70 hover:opacity-100 transition-all" />
              </a>
            </li>
            <li>
              <a href="https://github.com/ryanbakker">
                <Github className="opacity-70 hover:opacity-100 transition-all" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Image
        src="/images/about-cover.jpeg"
        alt="photo of me under lights"
        width={400}
        height={400}
        className="mx-auto max-w-[100vw] md:w-[40vw] rounded-lg shadow-lg m-8"
      />
    </section>
  );
}

export default About;
