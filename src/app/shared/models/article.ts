export class Article {
  title: string;
  description: string;
  link: string[];
  photo: any;
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
