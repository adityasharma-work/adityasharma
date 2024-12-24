import { Copyright } from "lucide-react";
import Typography from "../common/typography";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp; Developed by Aditya Sharma
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
