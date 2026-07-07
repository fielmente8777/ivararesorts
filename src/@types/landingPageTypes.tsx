import { JSX } from "react/jsx-runtime";

export interface ExperiencesProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  cta: {
    label: string;
    href: string;
  }[];
  cards: {
    image: string;
    title: string;
    description: string;
  }[];
}

export interface CuratedExcursionProps {
  tag: string;
  title: string;
  description: string;
  cards: {
    tagLin: string;
    icon: JSX.Element;
    title: string;
    description: string;
    image: string;
  }[];
  cta: {
    label: string;
    href: string;
  }[];
}