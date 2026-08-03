"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    url: "https://www.mingalarrooms.com/",
    image: "/projects/mingalarrooms-preview.jpg",
    title: "Mingalarrooms",
    subtitle: "Real Estate Platform",
    description:
      "The first real estate platform of its kind in Singapore, letting users search for properties, post listings, and connect directly with agents. Built with my freelance team, HexDev.",
    tech_stacks: ["React", "Tailwind CSS", "Shadcn", "MySql", "Node.js"],
  },
  {
    url: "https://voice-chat-with-agora.vercel.app/",
    image: "/projects/agora-voice-chat-preview.jpg",
    title: "Voice Chat Rooms",
    subtitle: "Real-Time Voice & Video with Agora",
    description:
      "A live voice, video, and screen-share chat room app powered by Agora's Web SDK — pick an avatar, create or join a room, and talk with others in real time.",
    tech_stacks: ["JavaScript", "Agora SDK", "WebRTC", "Vite"],
  },
  {
    image: "/projects/Expense-guru.jpg",
    title: "Expense-Guru",
    subtitle: "Expense Tracker",
    description:
      "A personal finance app that helps users track expenses, set budgets, and manage their finances effectively, with insights into spending habits and financial health.",
    tech_stacks: ["Next.js", "Tailwind CSS", "MySql", "Node.js"],
  },
  {
    image: "/projects/foodfusion.jpeg",
    title: "FoodFusion",
    subtitle: "Recipe Sharing App",
    description:
      "A recipe sharing app that lets users discover, share, and save their favorite recipes, with a user-friendly interface for browsing and submitting recipes.",
    tech_stacks: ["PHP", "Bootstrap", "MySql"],
  },
];

function getHostname(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function ProjectCard({ project, index }) {
  const Wrapper = project.url ? motion.a : motion.div;
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d1117] shadow-lg transition-all duration-300 ${
        project.url
          ? "hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
          : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-[#161b22] border-b border-gray-200 dark:border-gray-800">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 flex-1 truncate rounded-md bg-gray-200/70 dark:bg-gray-800/70 px-3 py-1 text-xs text-gray-500 dark:text-gray-400 font-mono">
          {project.url ? getHostname(project.url) : "case-study"}
        </span>
        {project.url && (
          <ExternalLink className="w-3.5 h-3.5 shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors" />
        )}
      </div>

      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {project.url && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-lg bg-white/90 dark:bg-black/80 text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
              Visit Site <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-3">
          {project.subtitle}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech_stacks.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-mono"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default function Parallax() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
