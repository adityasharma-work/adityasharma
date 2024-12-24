import Image from "next/image";
import Container from "../common/container";
import Tag from "../common/tag";
import Typography from "../common/typography";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { personalProjects } from "@/lib/constants";

const ProjectSection = () => {
  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Projects" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
        {personalProjects?.map((project, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray shadow-md mx-auto flex w-full flex-col border-2"
          >
            <Link
              href={project.url}
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 bottom-0"
              target="_blank"
            >
              <Image
                src={project.previewImage}
                alt={`preview`}
                className="rounded-t-xl shadow-lg lg:h-[320px] "
                style={{ objectFit: "fill" }}
              />
            </Link>

            <div className="flex flex-col gap-5 px-4 py-6">
              <Typography
                variant="subtitle"
                className="font-semibold text-gray-900"
              >
                {project.name}
              </Typography>
              <Typography>{project.description}</Typography>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((technology, index) => (
                  <Tag key={index} label={technology} />
                ))}
              </div>
              <Link
                href={project.url}
                className="self-start rounded-lg p-1.5 hover:bg-gray-50 bottom-0"
                target="_blank"
              >
                <ExternalLink />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProjectSection;
