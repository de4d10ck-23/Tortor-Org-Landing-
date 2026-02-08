import { Project, ProjectCategory } from "./types";

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "1",
    title: "AeroLink Smart Tower",
    description:
      "An autonomous aeroponic controller featuring a localized Wi-Fi dashboard and direct-drive pump automation via ESP32.",
    category: ProjectCategory.IOT,
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
    category: ProjectCategory.AI,
    imageUrl:
      "https://res.cloudinary.com/dmdxs1srn/image/upload/w_500/v1770562838/askU_oq0pe2.png",
    demoUrl: "https://github.com",
    creator: { name: "John Lloyd Tortor", url: "https://facebook.com" },
  },
];
