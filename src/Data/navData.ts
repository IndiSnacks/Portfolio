interface NavLinks {
  id: string,
  name: string,
  targetId?: string,
  path?: string,
  type: "scroll" | "route" | "external";
}

export const navLinks: NavLinks[] = [
  {
    id: 'projects',
    name: "PROJECTS",
    targetId: "projects",
    type: "scroll",
  },
  {
    id: 'resume',
    name: "RESUME",
    path: "/resume",
    type: "route",
  },
  {
    id: 'github',
    name: "GITHUB",
    path: "https://github.com/IndiSnacks",
    type: "external",
  }
];
