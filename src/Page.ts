interface IPage {
  title: string;
  created: number;
  updated: number;
  lines: string[];
}
export class Page implements IPage {
  public title: string;
  public created: number;
  public updated: number;
  public lines: string[];

  constructor(params: IPage) {
    this.title = params.title;
    this.created = params.created;
    this.updated = params.updated;
    this.lines = params.lines;
  }

  public path(): string {
    return `/${this.title}`;
  }

  public updatedAt(): Date {
    return new Date(this.updated * 1000);
  }
}
export interface IPages {
  name: string;
  displayName: string;
  exported: number;
  pages: IPage[];
}
