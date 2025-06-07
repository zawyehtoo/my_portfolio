"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const projects = [
  {
    image: "/projects/mingalarroms.png",
    title: "Mingalarrooms (Real-Estate project)",
    description: "Mingalarroms is the first real estate project in Singapore that allows users to search for properties, post listings, and connect with agents. This project was developed by my freelance team, HexDev",
    tech_stacks: ["React", "Tailwind CSS", "Shadcn", "MySql", "Node.js"],
  },
  {
    image: "/projects/Expense-guru.jpg",
    title: "Expense-Guru (Expense Tracker)",
    description: "Expense-Guru is a personal finance app that helps users track their expenses, set budgets, and manage their finances effectively. It provides insights into spending habits and financial health.",
    tech_stacks: ["Next.js", "Tailwind CSS", "MySql", "Node.js"],
  },
  {
    image: "/projects/foodfusion.jpeg",
    title: "FoodFusion",
    description: "FoodFusion is the recipe sharing app that allows users to discover, share, and save their favorite recipes. It features a user-friendly interface for browsing and submitting recipes.",
    tech_stacks: ["PHP", "Bootstrap", "MySql"],
  }
];

function ParallaxImage({ project, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div
        className={`img-and-text${reverse ? " flex-row-reverse" : ""}`}
        ref={ref}
      >
        <img src={project.image} alt={project.title} />
        <div className="img-text">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="tech-stack-list">
            {project.tech_stacks.map((tech, idx) => (
              <span className="tech-tag" key={idx}>#{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Parallax() {
  // const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example">
      {projects.map((project, idx) => (
        <ParallaxImage
          key={idx}
          project={project}
          reverse={idx % 2 === 1}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  );
}

function StyleSheet() {
  return (
    <style>{`
      #example {
        scroll-snap-type: y mandatory;
        position: relative;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      #example::-webkit-scrollbar {
        display: none;
      }
      .img-container {
        height: 100vh;
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
      }
      .img-and-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        max-width: 100%;
        background: transparent;
        margin: 0;
        overflow: visible;
        box-shadow: none;
        border-radius: 0;
      }
      .img-and-text.flex-row-reverse {
        flex-direction: row-reverse;
      }
      .img-and-text img {
        width: 50%;
        height: 400px;
        object-fit: cover;
        border-radius: 30px;
      }
      .img-text {
        width: 50%;
        padding: 32px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
      }
      .img-text h2 {
        color: white;
        margin: 0 0 12px 0;
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -3px;
        line-height: 1.2;
      }
      .img-text p {
        font-size: 18px;
        color: gray;
        margin: 0;
        font-family: inherit;
      }
      .tech-stack-list {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .tech-tag {
        background: #222;
        color: #8df0cc;
        border-radius: 9999px;
        padding: 4px 14px;
        font-size: 15px;
        font-family: inherit;
        font-weight: 500;
        letter-spacing: 0.5px;
        display: inline-block;
        user-select: none;
      }
      @media (max-width: 900px) {
        .img-and-text {
          flex-direction: column !important;
          width: 100%;
        }
        .img-and-text img {
          width: 100%;
          height: 300px;
          border-radius: 20px;
        }
        .img-text {
          width: 100%;
          padding: 18px 12px;
        }
      }
      @media (max-width: 500px) {
        .img-and-text {
          width: 100%;
        }
        .img-and-text img {
          height: 150px;
          border-radius:5px;
        }
        .img-text {
          width: 100%;
        }
        .img-text h2 {
          font-size: 28px;
        }
        .img-text p {
          font-size: 15px;
        }
        .tech-tag {
          font-size: 12px;
          padding: 2px 10px;
        }
      }
      .progress {
        position: sticky;
        left: 0;
        right: 0;
        height: 5px;
        background: #8df0cc;
        bottom: 0;
        transform: scaleX(0);
        z-index: 10;
      }
    `}</style>
  );
}
