import { Project, ProjectCategory } from "./types";

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "1",
    title: "AeroLink Smart Tower",
    description:
      "A cloud-integrated aeroponic system featuring real-time environmental monitoring and remote nutrient management.",
    category: ProjectCategory.AI,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVCKQaUezMofpsygdwkqZopwKO4uRolYjiA&s",
    demoUrl: "https://github.com",
    creator: { name: "John Lloyd Tortor", url: "https://facebook.com" },
  },
  {
    id: "2",
    title: "AskU",
    description:
      "An AI-driven conversational interface designed to streamline university information and student administrative services.",
    category: ProjectCategory.CRYPTO,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmc30hw_vEasR_4V4CMel-JMIjuGQsXhqyw&s",
    demoUrl: "https://github.com",
    creator: { name: "John Lloyd Tortor", url: "https://facebook.com" },
  },
];
