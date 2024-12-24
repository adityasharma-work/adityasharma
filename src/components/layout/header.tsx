"use client";
import useScroll from "@/hook/use-scroll";
import useWindowSize from "@/hook/use-window-size";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Typography from "../common/typography";
import { Download, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import IconButton from "../common/icon-button";
import ResumeButton from "../common/resume-button";

const Logo = () => (
  <Typography variant="h3" className="font-bold">
    {"<AS />"}
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100",
        scrolled ? "bg-gray/50 backdrop-blur-xl md:border-gray-100" : ""
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <ResumeButton />
          </div>
        </div>

        {/* Mobile Header */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle hidden>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription hidden>
              This action cannot be undone.
            </DrawerDescription>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <ResumeButton />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
