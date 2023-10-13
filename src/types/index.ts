export interface BlogItem {
  releaseDate: string;
  description: string;
  tags: Array<string>;
  _id: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  readingTime: string;
  views: number;
  image: string;
  content: any;
}

export interface Headings {
  level: number;
  text: string;
  headingId: string;
}
