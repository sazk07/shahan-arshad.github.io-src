import type { InjectionKey } from "vue";

export const skillsKey = Symbol() as InjectionKey<skillsType>;

export const projectsKey = Symbol() as InjectionKey<ProjectsType[]>;

/* type defs */

export interface skillsType {
  programmingLanguages: {
    id: number;
    name: string;
  }[];
  frameworks: {
    id: number;
    name: string;
  }[];
  database: {
    id: number;
    name: string;
  }[];
  toolsAndTechnologies: {
    id: number;
    name: string;
  }[];
  analyticalSkills: {
    id: number;
    name: string;
  }[];
}

interface ProjectsType {
  id: number;
  link?: string;
  projectName: string;
  description: string;
}
