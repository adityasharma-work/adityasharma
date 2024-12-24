"use client";
import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const resumeDriveLink =
  "https://drive.google.com/file/d/1DgJxyoNKvvhQjg9lMCETtFKO-5Qwetx3/view?usp=sharing";

const ResumeButton = () => {
  return (
    <Button
      className="shadow-lg"
      onClick={() => window?.open(resumeDriveLink, "_blank")}
    >
      <Download className="h-4 w-4" />
      Resume{" "}
    </Button>
  );
};

export default ResumeButton;
