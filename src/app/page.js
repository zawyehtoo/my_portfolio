"use client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParallaxText from "./components/ParallexText.jsx";
import { Layout, Server, Database, ArrowRight, ArrowDown } from "lucide-react";
import Parallax from "./components/Parallex.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faLaravel,
  faPhp,
  faDocker,
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NAME = "Zaw Ye Htoo";
const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const DELAY_AFTER_TYPING = 1200;
const DELAY_AFTER_DELETING = 500;

const skills = [
  { icon: faHtml5, label: "HTML5", color: "#e34c26", expertise: 100 },
  { icon: faCss3Alt, label: "CSS3", color: "#1572B6", expertise: 90 },
  { icon: faJs, label: "JavaScript", color: "#f7df1e", expertise: 80 },
  { icon: faReact, label: "React", color: "#61dafb", expertise: 75 },
  { icon: faNodeJs, label: "Node.js", color: "#3c873a", expertise: 70 },
  { icon: faDatabase, label: "MySQL", color: "#00758f", expertise: 65 },
  { icon: faPhp, label: "PHP", color: "#777bb3", expertise: 80 },
  { icon: faLaravel, label: "Laravel", color: "#ff2d20", expertise: 70 },
  { icon: faDocker, label: "Docker", color: "#2496ed", expertise: 50 },
  { icon: faGit, label: "Git", color: "#f05032", expertise: 80 },
  { icon: faGithub, label: "GitHub", color: "var(--foreground)", expertise: 90 },
  { icon: "typescript", label: "Typescript", color: "#3178c6", expertise: 70 },
];
const socials = [
  {
    platform: "GitHub",
    icon: faGithub,
    url: "https://github.com/zawyehtoo",
    color: "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
  },
  {
    platform: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/zawyehtoo/",
    color: "text-blue-400 hover:text-blue-300",
  },
  {
    platform: "Email",
    icon: faEnvelope,
    url: "mailto:zawyehtoo29@gmail.com",
    color: "text-red-400 hover:text-red-300",
  },
];

const stack = [
  {
    icon: Layout,
    title: "Frontend",
    description:
      "Responsive, accessible interfaces built for speed and a smooth user experience.",
    tools: [faHtml5, faCss3Alt, faJs, faReact],
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "APIs and server-side logic that stay reliable under real traffic.",
    tools: [faNodeJs, faPhp, faLaravel],
  },
  {
    icon: Database,
    title: "Database & DevOps",
    description:
      "Data modeling, version control, and containerized deployments end to end.",
    tools: [faDatabase, faDocker, faGit],
  },
];

const experience = [
  {
    company: "Triosys",
    role: "Senior Full-Stack Developer",
    period: "Oct 2025 — Present",
    location: "Bangkok, Thailand",
    current: true,
    highlights: [
      "Collaborated with project managers and led junior developers to deliver client projects to production.",
      "Developed scalable RESTful APIs and backend services using NestJS, Prisma, and PostgreSQL.",
      "Delivered multiple client projects, including microservices-based apps, RBAC systems, ERP systems, and corporate websites.",
      "Contributed to a microservices-based wedding invitation platform, improving scalability and maintainability.",
      "Optimized PostgreSQL databases with Prisma to improve performance and data integrity.",
      "Automated deployments with Jenkins CI/CD and Docker, managing production releases in Linux environments.",
    ],
  },
  {
    company: "HexDev",
    role: "Freelance Frontend Developer",
    period: "Nov 2024 — Mar 2025",
    location: null,
    current: false,
    highlights: [
      "Built a full-stack real estate platform using React.js, NestJS, Prisma, and PostgreSQL for property listing and management.",
      "Built responsive, reusable frontend components with React.js and ShadCN UI for a modern, intuitive user experience.",
      "Integrated frontend features with RESTful APIs to support property listings, bookings, and tenant management.",
      "Collaborated with the development team to ship production-ready, maintainable features.",
      "Worked directly with the client to refine requirements, resulting in positive feedback and satisfaction.",
    ],
  },
];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayed.length < NAME.length) {
      timeout = setTimeout(() => {
        setDisplayed(NAME.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && displayed.length === NAME.length) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(NAME.slice(0, displayed.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), DELAY_AFTER_DELETING);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-5 sm:px-20 py-4">
          <span className="text-xl font-bold">
            Zaw<span className="name">.</span>
          </span>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden sm:flex items-center gap-8 text-gray-600 dark:text-gray-300">
              <a href="#what-i-do" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                What I Do
              </a>
              <a href="#experience" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Skills
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-5 pt-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

        <span className="mb-6 px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-900/60">
          Available for new opportunities
        </span>

        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold">
          I am{" "}
          <span className="name border-r-2 border-gray-900 dark:border-white pr-1 animate-blink">
            {displayed}
          </span>
        </h1>
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mt-4 text-gray-600 dark:text-gray-300">
          Passionate Web Developer
        </h2>
        <p className="max-w-xl mt-6 text-gray-500 dark:text-gray-400">
          I build clean, modern web experiences from front to back &mdash;
          turning ideas into fast, reliable products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center gap-6 mt-10">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              aria-label={social.platform}
              className={`text-2xl transition-colors ${social.color}`}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
      <section className="h-60">
        <ParallaxText baseVelocity={-5}>Full-Stack Developer</ParallaxText>
        <ParallaxText baseVelocity={5}>Building Scalable Web Apps</ParallaxText>
      </section>
      <section id="what-i-do" className="py-20 px-5 sm:px-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Full-Stack <span className="name">Developer</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            I handle the entire pipeline — from what users see, to what powers
            it behind the scenes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-0 max-w-6xl mx-auto">
          {stack.map((layer, index) => (
            <Fragment key={layer.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-1 bg-gray-100 dark:bg-[#18181b] border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-lg shadow-[#9900ff]/10 dark:shadow-[#9900ff]/20"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-5">
                  <layer.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{layer.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {layer.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {layer.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
                    >
                      <FontAwesomeIcon
                        icon={tool}
                        className="text-lg text-gray-700 dark:text-gray-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
              {index < stack.length - 1 && (
                <div className="flex items-center justify-center px-2 py-2 md:px-4">
                  <ArrowRight className="hidden md:block w-6 h-6 text-purple-500 shrink-0" />
                  <ArrowDown className="md:hidden w-6 h-6 text-purple-500 shrink-0" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>
      <section id="experience" className="py-20 px-5 sm:px-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Work <span className="name">Experience</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Companies I&apos;ve worked with, and what I built while I was
            there.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <span
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-purple-500 ${
                    job.current
                      ? "bg-purple-500"
                      : "bg-gray-100 dark:bg-[#0d1117]"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h2 className="text-xl font-bold">
                    {job.role} ·{" "}
                    <span className="text-purple-600 dark:text-purple-400">
                      {job.company}
                    </span>
                  </h2>
                  {job.current && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-4">
                  {job.period}
                  {job.location ? ` • ${job.location}` : ""}
                </p>
                <ul className="space-y-2">
                  {job.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                    >
                      <span className="text-purple-500 mt-0.5 shrink-0">
                        ▹
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="flex flex-col px-5 sm:px-20 mb-4 my-8">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-4 ">
          My projects
        </h1>
        <div className="">
          <Parallax />
        </div>
      </section>
      <section id="skills" className="py-16 px-5 sm:px-20">
        <h1 className="text-center text-5xl mb-16 font-bold relative inline-block mx-auto">
          Skills I have
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div key={skill.label} className="relative group perspective-1000">
              <div className="relative h-40 transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front side */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg border border-gray-300 dark:border-gray-700">
                  {skill.icon === "typescript" ? (
                    <Image
                      src="/typescript-icon.svg"
                      alt="TypeScript"
                      width={48}
                      height={48}
                      className="mb-4"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={skill.icon}
                      size="3x"
                      style={{ color: skill.color }}
                      className="mb-4 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <span className="text-xl font-medium text-gray-700 dark:text-gray-200">
                    {skill.label}
                  </span>
                </div>

                {/* Back side */}
                <div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 flex items-center justify-center transform rotate-y-180"
                  style={{ border: `2px solid ${skill.color}` }}
                >
                  <div className="text-center" style={{ color: skill.color }}>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-3">
                      <div
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          backgroundColor: skill.color,
                          width: `${skill.expertise}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold">
                      {skill.expertise}% MASTERY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="py-20 px-5 sm:px-10 lg:px-20 my-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 font-mono">
            <span className="text-purple-600 dark:text-purple-400">&lt;</span>
            LetsConnect
            <span className="text-purple-600 dark:text-purple-400"> /&gt;</span>
          </h2>

          <p className="text-lg text-gray-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12 font-mono">
            <span className="text-gray-400 dark:text-gray-600">{"// "}</span>
            Have a project in mind or want to discuss opportunities? I would
            love to hear from you!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact info as a code editor window */}
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0d1117] shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-[#161b22] border-b border-gray-200 dark:border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-500 dark:text-gray-400 font-mono">
                  contact.js
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
                <div>
                  <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                  <span className="text-sky-600 dark:text-sky-300">contact</span> = {"{"}
                </div>
                <div className="pl-6">
                  <span className="text-sky-600 dark:text-sky-300">name</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-300">&quot;Zaw Ye Htoo&quot;</span>,
                </div>
                <div className="pl-6">
                  <span className="text-sky-600 dark:text-sky-300">role</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-300">
                    &quot;Web Developer&quot;
                  </span>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-sky-600 dark:text-sky-300">email</span>:{" "}
                  <a
                    href="mailto:zawyehtoo29@gmail.com"
                    className="text-amber-600 dark:text-amber-300 hover:text-pink-400 transition-colors underline-offset-4 hover:underline"
                  >
                    &quot;zawyehtoo29@gmail.com&quot;
                  </a>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-sky-600 dark:text-sky-300">phone</span>:{" "}
                  <a
                    href="tel:+660814085141"
                    className="text-amber-600 dark:text-amber-300 hover:text-pink-400 transition-colors underline-offset-4 hover:underline"
                  >
                    &quot;+66 0814085141&quot;
                  </a>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-sky-600 dark:text-sky-300">social</span>: {"{"}
                </div>
                {socials
                  .filter((social) => social.platform !== "Email")
                  .map((social) => (
                    <div key={social.platform} className="pl-12">
                      <span className="text-sky-600 dark:text-sky-300">
                        {social.platform.toLowerCase()}
                      </span>
                      :{" "}
                      <a
                        href={social.url}
                        className="text-amber-600 dark:text-amber-300 hover:text-pink-400 transition-colors underline-offset-4 hover:underline"
                      >
                        &quot;@zawyehtoo&quot;
                      </a>
                      ,
                    </div>
                  ))}
                <div className="pl-6">{"}"},</div>
                <div className="pl-6">
                  <span className="text-sky-600 dark:text-sky-300">status</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-300">
                    &quot;available_for_hire&quot;
                  </span>
                </div>
                <div>{"}"};</div>
              </div>
            </div>

            {/* Message form as a terminal window */}
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0d1117] shadow-2xl flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-[#161b22] border-b border-gray-200 dark:border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-500 dark:text-gray-400 font-mono">
                  send-message.sh
                </span>
              </div>

              <form className="p-6 font-mono text-sm space-y-5 flex-1 flex flex-col">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-green-600 dark:text-green-400 mb-2"
                  >
                    <span className="text-gray-500">$</span> whoami
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-purple-500 outline-none py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors"
                    placeholder="your_name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-green-600 dark:text-green-400 mb-2"
                  >
                    <span className="text-gray-500">$</span> cat email.txt
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-purple-500 outline-none py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="message"
                    className="block text-green-600 dark:text-green-400 mb-2"
                  >
                    <span className="text-gray-500">$</span> echo &quot;
                    <span className="text-gray-500">message</span>&quot;
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-purple-500 outline-none py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 resize-none transition-colors"
                    placeholder="Hey Zaw, I'd love to work with you on..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  ./send_message.sh
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
