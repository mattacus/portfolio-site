export interface IProjectData {
  title: string;
  logo?: string;
  logoHeight?: number;
  dates?: string;
  copy: string[];
  imgContent?: string[];
}

export interface GlobImages {
  [key: string]: string;
}
