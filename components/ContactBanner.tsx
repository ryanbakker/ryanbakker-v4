import { Mail, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function ContactBanner() {
  return (
    <section className="dark:bg-gradient-to-tr dark:from-slate-950 dark:via-indigo-950 dark:to-indigo-800 !z-50 relative overflow-hidden">
      <div className="section-container !z-50 relative flex flex-row justify-between">
        <div>
          <h3 className="section-heading mt-10">
            <span>Contact</span>
            <span>Contact</span>
          </h3>

          <Button className="mt-10 mb-10" size="lg">
            <Link
              href="mailto:ryanbakker@outlook.co.nz?subject=Website%20Enquiry"
              className="flex flex-row items-center gap-2"
            >
              Get in touch <SquareArrowOutUpRight />
            </Link>
          </Button>
        </div>

        <div className="absolute right-[40px] -bottom-[70px]">
          <Mail className="text-gray-900" size={260} />
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;
