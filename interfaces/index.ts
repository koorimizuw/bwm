export interface IntroItem {
  title: string;
  subtitle: string;
  text: string | string[];
  image?: string;
  color?: string;
  reverse?: boolean;
  light?: boolean;
  id?: string;
  prev?: string;
  next?: string;
}

export interface MenuLink {
  title: string;
  href: string;
}
