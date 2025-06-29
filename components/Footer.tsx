import { FolderCode, Github, MailPlus } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <section className="section-container">
        <nav className="flex flex-row justify-between">
          <h3>© Ryan Bakker 2025</h3>
          <ul className="flex items-center gap-8 md:gap-10">
            <li>
              <Link
                href="/projects"
                className="flex flex-row items-center gap-2"
              >
                <FolderCode size={20} />
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/ryanbakker"
                target="_blank"
                className="flex flex-row items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="mailto:ryanbakker@outlook.co.nz?subject=Website%20Enquiry"
                className="flex flex-row items-center gap-2"
              >
                <MailPlus size={20} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
