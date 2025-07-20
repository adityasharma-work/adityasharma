import { MapPin } from "lucide-react";
import Image from "next/image";
import Typography from "../common/typography";
import Container from "../common/container";
import SocialIcons from "../common/social-icons";
import ProfileImage from "../../../public/assets/images/profile-image.jpg";

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center lg:order-last lg:flex-grow lg:justify-end">
          <div className="h-[380px] w-[380px] md:h-[380px] md:w-[380px]">
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="shadow-lg rounded-3xl z-10 h-[380px] w-[380px] max-md:left-5 md:left-0 md:top-0 md:h-[380px] md:w-[380px]"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-2 flex w-full lg:max-w-3xl flex-grow flex-col justify-center gap-8 lg:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Aditya{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              With more than 3.5 years of experience specializing in the MERN stack,
              I create intuitive and scalable web applications. My expertise
              lies in building dynamic user interfaces, integrating third-party
              services, and optimizing application performance. Passionate about
              innovation, I love solving complex technical challenges and
              delivering projects that exceed user expectations.
            </Typography>
            <Typography>Let’s build something amazing together!</Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Mohali, India</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Open to new opportunities!</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
