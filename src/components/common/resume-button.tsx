"use client";
import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const resumeDriveLink =
  "https://drive.google.com/file/d/17IFXPJht7FSFV4UXUUA9o4yN5HA4-sW5/view?usp=drive_link";

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
