export class Song {
  constructor(public id: number,
              public name: string,
              public author: string,
              public album: string,
              public dateAdded: string,
              public duration: string,
              public songKey: string,
              public image: string
  ) {}
}
