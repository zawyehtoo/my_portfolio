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
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faEnvelope,
  faArrowUpRightFromSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
    platform: "Facebook",
    icon: faFacebook,
    url: "https://www.facebook.com/zaw.ye.htoo.788507",
    color: "text-sky-400 hover:text-sky-300",
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
      <div className="flex flex-col-reverse  sm:grid sm:grid-cols-3 sm:items-center p-20 ">
        <div className="text-center sm:text-left col-span-2">
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold">
            I am{" "}
            <span className="name border-r-2 border-black pr-1 animate-blink">
              {displayed}
            </span>
            ,
          </h1>
          <h2 className="lg:text-4xl md:text-2xl font-bold mt-4">
            Passionate Web Developer
          </h2>
        </div>
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/cartoon.jpg"
            className="rounded-full"
            alt="Cartoon"
            width={300}
            height={37}
            priority
          />
        </div>
      </div>
      <section className="h-60">
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </section>
      <section>
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
      <section className="flex flex-col px-5 sm:px-20 mb-4 my-8">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-4 ">
          My projects
        </h1>
        <div className="">
          <Parallax />
        </div>
      </section>
      <section className="py-16 px-5 sm:px-20">
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
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl mx-5 sm:mx-20 my-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 relative inline-block">
            Lets Connect
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </h2>

          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss opportunities? I wouldd
            love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Send me a message
              </h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Hey Zaw, I'd love to work with you on..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Find me online
                </h3>

                <div className="space-y-4">
                  {socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      className={`flex items-center space-x-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-2xl"
                      />
                      <span className="text-lg font-medium">
                        {social.platform}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="ml-auto text-sm opacity-70"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Direct contact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-gray-300 hover:text-white">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-2xl text-green-400"
                    />
                    <span className="text-lg">+66 0814085141</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-gray-300 hover:text-white">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-2xl text-red-400"
                    />
                    <span className="text-lg">hello@zawehtoo.dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
