export class Article {
  title: string;
  description: string;
  link: string[];
  photo: string;
  constructor(
    title: string,
    description: string,
    link: string[],
  ) {
    this.title = title;
    this.description = description;
    this.link = link;
  }
}
