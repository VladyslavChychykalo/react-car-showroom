export interface INavLinks {
  id: number;
  title: string;
  nodes: INodes[];
}

interface INodes {
  text: string;
  path?: string;
  items?: IItems[];
}

interface IItems {
  postText: string;
  path: string;
}
