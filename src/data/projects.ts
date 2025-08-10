export type Project = {
  id: number;
  title: string;
  tagline: string;
  image: string;
  year: string;
  link?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Summer Makeover",
    tagline: "Design system & marketing site",
    image: "/work1.png",
    year: "2025",
    link: "#",
    tags: ["React", "Vite", "SCSS"]
  },
  {
    id: 2,
    title: "Sockets Checklist",
    tagline: "E‑commerce storefront revamp",
    image: "/work2.png",
    year: "2024",
    link: "#",
    tags: ["Next.js", "Animations"]
  },
  {
    id: 3,
    title: "Color Matching",
    tagline: "E‑commerce storefront revamp",
    image: "/work3.png",
    year: "2024",
    link: "#",
    tags: ["Next.js", "Animations"]
  }
];
