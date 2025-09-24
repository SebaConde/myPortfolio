"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ExternalLink } from "lucide-react";


interface ProjectLinkProps {
  link: string;
  text?: string;
}

export function ProjectLink({ link, text = "Ver Proyecto" }: ProjectLinkProps) {
  return (
    <div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 cursor-pointer w-38 h-10"
        onClick={() => window.open(link, '_blank')}
      >
        <span className="flex items-center">
          <ExternalLink className="w-5 h-5" />
          {text}
        </span>
      </HoverBorderGradient>
    </div>
  );
}
interface RepoLinkProps {
  link: string;
  text?: string;
}

export function RepoLink({ link, text = "Ver Repo" }: RepoLinkProps) {
  return (
    
    <div>
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 cursor-pointer w-32 h-10"
      onClick={() => window.open(link, '_blank')}
    >
      <span className="flex items-center">
      <i className="devicon-github-original"/> {text}
      </span>
    </HoverBorderGradient>
  </div>
  );
}

