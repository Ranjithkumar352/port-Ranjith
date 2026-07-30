import resume from "../assets/projects/resume.png";
import importer from "../assets/projects/importer.png";
import sign from "../assets/projects/sign.png";

export const projects = [
  {
    title: "AI Resume Analyzer",
    image: resume,
    description:
      "AI-powered resume analyzer that extracts skills, calculates ATS score, detects missing keywords, and provides resume improvement suggestions.",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/Ranjithkumar352",
    live: "https://ai-resume-analyzer-frontend-teal.vercel.app/",
  },

  {
    title: "AI CSV Importer",
    image: importer,
    description:
      "Smart CSV importer with AI column mapping, validation, preview, and automatic data transformation.",
    tech: ["Next.js", "Express", "MongoDB", "Gemini"],
    github: "https://github.com/Ranjithkumar352",
    live: "https://groweasy-frontend-eight.vercel.app/",
  },

  {
    title: "AI Sign Language Recognition",
    image: sign,
    description:
      "Deep learning application that recognizes sign language gestures in real time using MediaPipe, CNN, and OpenCV.",
    tech: ["Python", "OpenCV", "CNN", "MediaPipe"],
    github: "https://github.com/Ranjithkumar352",
    live: "https://github.com/Ranjithkumar352/AI-sign-language-recognition-system.git",
  },
];