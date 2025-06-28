import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FolderCode, Github, MailPlus } from "lucide-react";

function Header() {
  return (
    <nav className="px-8 mx-auto md:max-w-[75rem] flex justify-between items-center py-4 w-full desktop-nav">
      <div className="text-2xl font-bold">
        <h2>Ryan Bakker</h2>
      </div>

      <ul className="flex items-center gap-8 md:gap-10">
        <li>
          <Link href="/projects" className="desktop-nav-link">
            <FolderCode size={20} />
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/ryanbakker"
            target="_blank"
            className="desktop-nav-link"
          >
            <Github size={20} />
            GitHub
          </Link>
        </li>
        <li>
          <Link
            href="mailto:ryanbakker@outlook.co.nz?subject=Website%20Enquiry"
            className="desktop-nav-link"
          >
            <MailPlus size={20} />
            Contact
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
