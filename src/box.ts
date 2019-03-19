import fs from "fs";

interface IPage {
  title: string;
  created: number;
  updated: number;
  lines: string[];
}

interface IPages {
  name: string;
  displayName: string;
  exported: number;
  pages: IPage[];
}

export default class Box {
  public readonly filename: string;
  private readonly json: IPages;

  constructor(filename: string) {
    this.filename = filename;
    this.json = JSON.parse(
      fs.readFileSync(this.filename, "utf8")
    );
  }

  public name(): string {
    return this.json.name;
  }

  public exportedAt(): Date {
    return new Date(this.json.exported * 1000);
  }

  public pages(): string[] {
    return this.json.pages.sort((a, b) => b.updated - a.updated).map((p) => p.title);
  }
}
