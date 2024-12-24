import { techStack } from "@/lib/constants";
import Container from "../common/container";
import Tag from "../common/tag";
import Typography from "../common/typography";
import ImageWrapper from "../common/image-wrapper";
import { StaticImageData } from "next/image";

export interface TechDetails {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
}

const SkillsSection = () => {
  return (
    <Container id="skills">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Technical Skills" />
        </div>
        {/* <Typography variant="subtitle" className="max-w-xl text-center">
          Tech Stack I have worked upon
        </Typography> */}
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {techStack.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <ImageWrapper
        src={logo}
        srcForDarkMode={darkModeLogo}
        alt={label}
        className="transition-transform duration-300 md:hover:scale-110"
      />
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};
