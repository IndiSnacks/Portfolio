interface NavLinkScroll {
  id: string;
  name: string;
  type: "scroll";
  targetId: string;
  path?: never;
}

interface NavLinkRoute {
  id: string;
  name: string;
  type: "route";
  path: string;
  targetId?: never;
}

interface NavLinkExternal {
  id: string;
  name: string;
  type: "external";
  path: string;
  targetId?: never;
}

export type NavLinkItem = NavLinkScroll | NavLinkRoute | NavLinkExternal;

export const navLinks: NavLinkItem[] = [
  {
    id: 'projects',
    name: "PROJECTS",
    path: "/",
    type: "route",
  },
  {
    id: 'about',
    name: 'ABOUT ME',
    path: '/about',
    type: 'route'
  },
  {
    id: 'resume',
    name: "RESUME",
    path: "/img/Sahil's_Resume.pdf",
    type: "external",
  },
  {
    id: 'github',
    name: "GITHUB",
    path: "https://github.com/IndiSnacks",
    type: "external",
  }
];
