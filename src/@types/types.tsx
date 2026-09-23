import { JSX } from "react";

export interface AddCardDataPropsTypes {
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
}
export interface WeddingServicesPropsTypes {
  title: string;
  cards: {
    src: string;
    alt: string;
    name: string;
  }[];
}
export type FaqData = {
  Answer: string;
  Question: string;
  _id: number;
}[]

export interface navLinkProps {
  id: number;
  label: string;
  href: string;
}

export interface socialLinkProps {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
}

export interface footerLinkProps {
  id: number;
  title: string;

  links: {
    id: number;
    icon?: JSX.Element;
    title?: string;
    label: string;
    href: string;
  }[];
}

export interface NearByPlacesSliderPropsTypes {
  cards: {
    src: string;
    title: string;
    description: string;
  }[];
}

export interface BannerPropsTypes {
  images?: string[];
  title: string;
  subTitle?: string;
  description?: string;
}

export interface OfferSliderPropsTypes {
  title: string;
  cards: {
    src: string;
    alt: string;
  }[];
}
export interface AboutWeddingPropsTypes {
  src: string;
  title: string;
  subTitle: string;
  description: string;
  links: {
    href: string;
    label: string;
  }[];
}