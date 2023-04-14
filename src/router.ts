export interface Router {
  name: string;
  title: string;
  path: string;
  children?: Link[];
}

export interface Link {
  name: string;
  title: string;
  path: string;
}

const router: Router[] = [
  {
    name: "introduction",
    title: "Introduction",
    path: "/introduction",
    children: [
      {
        name: "getting-started",
        title: "Getting Started",
        path: "/getting-started",
      },
      {
        name: "installation",
        title: "Installation",
        path: "/installation",
      },
      {
        name: "markdown",
        title: "Markdown",
        path: "/markdown",
      },
    ],
  },
  {
    name: "components",
    title: "Components",
    path: "/components",
    children: [
      {
        name: "button",
        title: "Button",
        path: "/button",
      },
    ],
  },
];

export default router;
