import { TechType } from "../static/technologies/types";

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  techUsed: TechType[];
  link?: string;
  image: string;
};
