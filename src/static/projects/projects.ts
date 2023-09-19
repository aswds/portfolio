import { ProjectType } from "../../types/ProjectType";
import PattyImage from "../images/cards/Frame 6.png";
import MappyImage from "../images/cards/Frame 7.png";
import Shoowy from "../images/cards/Frame 8.png";
export const projectsList: ProjectType[] = [
  {
    id: 1,
    title: "Patty",
    description: "Mobile application for finding parties",
    techUsed: [],
    link: "https://play.google.com/store/apps/details?id=com.bendzeit.patty",
    image: PattyImage,
  },
  {
    id: 2,
    title: "Mappy (unreleased)",
    description: "Mobile app for traveling",
    techUsed: [],
    link: "https://github.com/aswds/Mappy",
    image: MappyImage,
  },
  {
    id: 3,
    title: "Shoowy (in progress)",
    description: "No more ",
    techUsed: [],
    link: "https://github.com/aswds/Shoowy",
    image: Shoowy,
  },
];
