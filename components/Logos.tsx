import { logoIconsList } from "@/constants";
import Image from "next/image";

interface LogoIconProps {
  icon: {
    imgPath: string;
    icon: string;
  };
}

const LogoIcon = ({ icon }: LogoIconProps) => {
  return (
    <div className="flex-none flex-center marquee-item p-2 rounded-lg">
      <div className="h-16 flex items-center justify-center">
        <Image
          src={icon.imgPath}
          alt={icon.icon || ""}
          width={250}
          height={20}
          className="object-contain max-h-[60px] saturate-0 invert"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

function Logos() {
  return (
    <section>
      <h3 className="section-heading-logos mb-1">
        <span>Experience Using</span>
        <span>Experience Using</span>
      </h3>

      <div className="relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={index} icon={icon} />
            ))}

            {logoIconsList.map((icon, index) => (
              <LogoIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logos;
