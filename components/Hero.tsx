import React from "react";
import Header from "./Header";
import AnimatedBackground from "./AnimatedBackground";
import { Button } from "./ui/button";
import Link from "next/link";
import { CircleArrowDown, MoveRight } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <header className="relative flex flex-col min-h-[80vh] overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />

        <div className="py-22 px-20">
          <div className="flex flex-row justify-between items-center">
            <div className="min-w-[50vw]">
              <h1 className="text-6xl font-extrabold leading-18">
                Hi I&apos;m Ryan, <br />a Web Developer
              </h1>

              <h4 className="mt-8 text-lg max-w-[28rem]">
                Tech enthusiast and developer, <br /> studying computer science
                in Auckland, New Zealand.
              </h4>

              <div className="flex flex-row items-center gap-6 mt-8">
                <Button>
                  <Link href="/" className="flex items-center gap-2">
                    <CircleArrowDown /> View Projects
                  </Link>
                </Button>

                <Button variant="outline">
                  <Link href="/" className="flex items-center gap-2">
                    GitHub Profile <MoveRight />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex w-full items-center justify-center mx-auto">
              <Image
                src="/images/hero-graphic.png"
                alt="hero graphic"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10" />
    </header>
  );
}

export default Hero;
