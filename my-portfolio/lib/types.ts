export type WorkDetail = {
  icon: string;
  title: string;
  description: string;
  techStack: string;
  collaboTools: string;
  link: string;
  screenshots_pc: string[];
  screenshots_mo: string[];
};

export type ServiceData = {
  icon: string;
  title: string;
  title2: string;
  description: string;
  link: string;
  tools: Tool[];
};

export type Tool = {
  title: string;
  src: string;
};
