import { workExperiences } from "@/lib/constants";
import Container from "../common/container";
import Tag from "../common/tag";
import Typography from "../common/typography";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50" id="work-experience">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      <div className="rounded-lg border border-black-300;">
        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5 group"
            >
              <div className="flex flex-col h-full justify-start items-center py-6">
                <div className="work-content_logo">
                  <Image
                    className="w-[50px] sm:w-[70px]"
                    src={experience.imageSrc}
                    alt="company-logo"
                  />
                </div>
              </div>

              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-black">{experience.title}</p>
                <div className="flex flex-col w-full justify-between sm:flex-row">
                  <p className="text-sm sm:mb-5">{experience.designation}</p>
                  <p className="text-sm mb-5 italic text-muted-foreground">
                    {experience.duration}
                  </p>
                </div>
                <ul className="flex list-disc flex-col gap-2 md:gap-1 md:px-5 text-muted-foreground">
                  {experience.description?.map((sentence, index) => (
                    <Typography component="li" key={index}>
                      {sentence}
                    </Typography>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
