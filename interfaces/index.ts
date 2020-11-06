// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface IntroItem {
  title: string,
  subtitle: string,
  text: string | string[],
  image?: any,
  color?: string,
  reverse?: boolean,
  light?: boolean,
  id?: string,
  prev?: string,
  next?: string
}

export interface MenuLink {
  title: string,
  href: string
}