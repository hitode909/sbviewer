import fs from "fs";
import { IPages, Page } from "./Page";

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

  public pages(): Page[] {
    return this.json.pages.sort((a, b) => b.updated - a.updated).map((p) => new Page(p));
  }

  public getPage(pageName: string): Page|undefined {
    return this.pages().find((p) => p.title === pageName);
  }
}
