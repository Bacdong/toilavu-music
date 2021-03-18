export class Song {
  public id: number;
  public name: string;
  public url: string;

  constructor(id: number, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}