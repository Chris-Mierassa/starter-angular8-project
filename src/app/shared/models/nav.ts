export  class Nav {
  id: number;
  label: string;
  link: string[];

  constructor(
    id: number,
    label: string,
    link: string[]
  ) {
    this.id = id;
    this.label = label;
    this.link = link;
  }

}
