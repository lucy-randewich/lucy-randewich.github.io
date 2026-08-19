import cowImage from "../../assets/images/projects/cow-identification.webp";
import rayTracerImage from "../../assets/images/projects/ray-tracer.webp";
import mlImage from "../../assets/images/projects/ml-method-analysis.webp";
import decisionsImage from "../../assets/images/projects/decisions-disruptions.webp";
import thesisPaper from "../../assets/documents/papers/cow-identification-thesis.pdf";
import mlPaper from "../../assets/documents/papers/ml-method-analysis.pdf";
import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    title: "Cow Identification",
    image: cowImage,
    imageDimensions: { width: 988, height: 988 },
    summary:
      "Deep metric learning for identifying individual cattle from depth imagery.",
    detail: "BSc thesis · Deep-learning research",
    skills: "Python · PyTorch · Dataset curation",
    link: thesisPaper,
    linkLabel: "Read thesis",
  },
  {
    title: "Ray Tracer",
    image: rayTracerImage,
    imageDimensions: { width: 300, height: 300 },
    summary: "A graphics renderer developed from first principles using C++.",
    detail: "Independent graphics project",
    skills: "C++ · Linear algebra · Rendering",
    link: "https://github.com/lucy-randewich/graphics",
    linkLabel: "View code",
  },
  {
    title: "ML Method Analysis",
    image: mlImage,
    imageDimensions: { width: 591, height: 591 },
    summary: "An empirical comparison of common machine-learning techniques.",
    detail: "Academic research paper",
    skills: "Python · Machine learning · Evaluation",
    link: mlPaper,
    linkLabel: "Read paper",
  },
  {
    title: "Decisions & Disruptions",
    image: decisionsImage,
    imageDimensions: { width: 1165, height: 1110 },
    summary:
      "An interactive game teaching practical cyber-security principles.",
    detail: "Bristol Cyber Security Group",
    skills: "Java · Swing · Cyber security",
    link: "https://www.decisions-disruptions.org",
    linkLabel: "Visit website",
  },
];
