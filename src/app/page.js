"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ParallaxText from "./components/ParallexText.jsx";
import { Brush, CodeXml, Terminal } from "lucide-react";
import Parallax from "./components/Parallex.jsx";
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
  { icon: faGithub, label: "GitHub", color: "#ffff", expertise: 90 },
  { icon: "typescript", label: "Typescript", color: "#3178c6", expertise: 70 },
];
const socials = [
  {
    platform: "GitHub",
    icon: faGithub,
    url: "https://github.com/zawyehtoo",
    color: "text-gray-300 hover:text-white",
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
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
        <div className="flex items-center justify-between px-5 sm:px-20 py-4">
          <span className="text-xl font-bold">
            Zaw<span className="name">.</span>
          </span>
          <div className="hidden sm:flex items-center gap-8 text-gray-300">
            <a href="#what-i-do" className="hover:text-white transition-colors">
              What I Do
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-5 pt-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

        <span className="mb-6 px-4 py-1.5 rounded-full border border-gray-700 text-sm text-gray-300 bg-gray-900/60">
          Available for new opportunities
        </span>

        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold">
          I am{" "}
          <span className="name border-r-2 border-black pr-1 animate-blink">
            {displayed}
          </span>
        </h1>
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mt-4 text-gray-300">
          Passionate Web Developer
        </h2>
        <p className="max-w-xl mt-6 text-gray-400">
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
            className="px-8 py-3 rounded-lg border border-gray-700 text-white font-medium hover:bg-gray-800 transition-all"
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
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </section>
      <section id="what-i-do">
        <div className="xl:grid xl:grid-cols-6 sm:px-20 px-5">
          <h1 className="text-6xl font-bold col-span-2 mb-5">
            What I <span className="name">Do</span>
          </h1>
          <div className="col-span-4 space-y-6">
            <div
              className="card bg-gray-800 shadow-[#9900ff] p-10 rounded-lg shadow-lg md:grid md:grid-cols-3 md:items-center space-y-3"
              style={{ backgroundColor: "#18181b" }}
            >
              <h1 className="md:text-5xl text-3xl font-bold">01/</h1>
              <div className="flex flex-row items-center space-x-4">
                <Brush />
                <h2 className="text-2xl font-bold">Design</h2>
              </div>
              <div>
                <p>
                  I create visually appealing and user-friendly designs that
                  enhance the user experience.
                </p>
              </div>
            </div>
            <div
              className="card bg-gray-800 shadow-[#9900ff] p-10 rounded-lg shadow-lg md:grid md:grid-cols-3 md:items-center space-y-3"
              style={{ backgroundColor: "#18181b" }}
            >
              <h1 className="md:text-5xl text-3xl font-bold">02/</h1>
              <div className="flex flex-row items-center space-x-4">
                <CodeXml />
                <h2 className="text-2xl font-bold">Frontend</h2>
              </div>
              <div>
                <p>
                  I create visually appealing and user-friendly designs that
                  enhance the user experience.
                </p>
              </div>
            </div>
            <div
              className="card bg-gray-800 shadow-[#9900ff] p-10 rounded-lg shadow-lg md:grid md:grid-cols-3 md:items-center space-y-3"
              style={{ backgroundColor: "#18181b" }}
            >
              <h1 className="md:text-5xl text-3xl font-bold">03/</h1>
              <div className="flex flex-row items-center space-x-4">
                <Terminal />
                <h2 className="text-2xl font-bold">Backend</h2>
              </div>
              <div>
                <p>
                  I create visually appealing and user-friendly designs that
                  enhance the user experience.
                </p>
              </div>
            </div>
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
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg border border-gray-700">
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
                  <span className="text-xl font-medium text-gray-200">
                    {skill.label}
                  </span>
                </div>

                {/* Back side */}
                <div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 flex items-center justify-center transform rotate-y-180"
                  style={{ border: `2px solid ${skill.color}` }}
                >
                  <div className="text-center" style={{ color: skill.color }}>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
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
            <span className="text-purple-400">&lt;</span>
            LetsConnect
            <span className="text-purple-400"> /&gt;</span>
          </h2>

          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12 font-mono">
            <span className="text-gray-600">{"// "}</span>
            Have a project in mind or want to discuss opportunities? I would
            love to hear from you!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact info as a code editor window */}
            <div className="rounded-xl overflow-hidden border border-gray-700 bg-[#0d1117] shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  contact.js
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">contact</span> = {"{"}
                </div>
                <div className="pl-6">
                  <span className="text-sky-300">name</span>:{" "}
                  <span className="text-amber-300">&quot;Zaw Ye Htoo&quot;</span>,
                </div>
                <div className="pl-6">
                  <span className="text-sky-300">role</span>:{" "}
                  <span className="text-amber-300">
                    &quot;Web Developer&quot;
                  </span>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-sky-300">email</span>:{" "}
                  <a
                    href="mailto:zawyehtoo29@gmail.com"
                    className="text-amber-300 hover:text-pink-400 transition-colors underline-offset-4 hover:underline"
                  >
                    &quot;zawyehtoo29@gmail.com&quot;
                  </a>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-sky-300">phone</span>:{" "}
                  <a
                    href="tel:+660814085141"
                    className="text-amber-300 hover:text-pink-400 transition-colors underline-offset-4 hover:underline"
                  >
                    &quot;+66 0814085141&quot;
                  </a>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-sky-300">social</span>: {"{"}
                </div>
                {socials
                  .filter((social) => social.platform !== "Email")
                  .map((social) => (
                    <div key={social.platform} className="pl-12">
                      <span className="text-sky-300">
                        {social.platform.toLowerCase()}
                      </span>
                      :{" "}
                      <a
                        href={social.url}
                        className="text-amber-300 hover:text-pink-400 transition-colors underline-offset-4 hover:underline"
                      >
                        &quot;@zawyehtoo&quot;
                      </a>
                      ,
                    </div>
                  ))}
                <div className="pl-6">{"}"},</div>
                <div className="pl-6">
                  <span className="text-sky-300">status</span>:{" "}
                  <span className="text-amber-300">
                    &quot;available_for_hire&quot;
                  </span>
                </div>
                <div>{"}"};</div>
              </div>
            </div>

            {/* Message form as a terminal window */}
            <div className="rounded-xl overflow-hidden border border-gray-700 bg-[#0d1117] shadow-2xl flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  send-message.sh
                </span>
              </div>

              <form className="p-6 font-mono text-sm space-y-5 flex-1 flex flex-col">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-green-400 mb-2"
                  >
                    <span className="text-gray-500">$</span> whoami
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none py-2 text-white placeholder-gray-600 transition-colors"
                    placeholder="your_name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-green-400 mb-2"
                  >
                    <span className="text-gray-500">$</span> cat email.txt
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none py-2 text-white placeholder-gray-600 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="message"
                    className="block text-green-400 mb-2"
                  >
                    <span className="text-gray-500">$</span> echo &quot;
                    <span className="text-gray-500">message</span>&quot;
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none py-2 text-white placeholder-gray-600 resize-none transition-colors"
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
