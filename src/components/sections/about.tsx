import { Braces, GraduationCap, Puzzle } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../../public/assets/images/me-1.jpg";
import Container from "../common/container";
import Tag from "../common/tag";
import Typography from "../common/typography";
import { Button } from "../ui/button";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About Me" />
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="h-[380px] w-[380px] md:h-[480px] md:w-[480px] px-5">
          <Image
            src={ProfileImage}
            alt="Profile Image"
            className="shadow-lg rounded-3xl z-10 h-[380px] w-[380px] max-md:left-5 md:left-0 md:top-0 md:h-[480px] md:w-[480px]"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div className="flex w-full lg:max-w-xl flex-col gap-6 ">
          <Typography>
            I believe great web applications are more than just lines of
            code—they’re experiences that connect with people and solve
            real-world problems. With nearly 3 years of experience specializing
            in the MERN stack, I’ve been building innovative web applications that deliver exceptional user
            experiences.
          </Typography>
          <Typography>
            B.Tech graduate from the class of 2022, I’ve been diving deep into
            the world of development ever since, driven by a passion for
            learning and exploring new technologies. Whether it’s creating
            impactful web solutions or experimenting with cutting-edge tools, I
            love pushing the boundaries of what’s possible.
          </Typography>
          <Typography>
            When I’m not coding, you’ll find me playing cricket, singing, or
            trekking through the great outdoors.
          </Typography>

          <div className="ml-3 flex gap-4 items-center text-muted-foreground">
            <Button className="h-10 w-10">
              <GraduationCap className="h-12 w-12" />
            </Button>
            Bachelor of Technology in Computer Science
          </div>
          <div className="ml-3 flex gap-4 items-center text-muted-foreground">
            <Button className="h-10 w-10">
              <Puzzle className="h-12 w-12" />
            </Button>
            Certified ReactJS Developer
          </div>
          <div className="ml-3 flex gap-4 items-center text-muted-foreground">
            <Button className="h-10 w-10">
              <Braces className="h-12 w-12" />
            </Button>
            Problem Solving at Leetcode
          </div>
          <Typography>
            If you're looking for a developer who can turn ideas into impactful
            solutions, you're in the right place.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
