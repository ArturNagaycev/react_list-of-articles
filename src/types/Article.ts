interface Launch {
  id: string;
  provider: string;
}

interface Event {
  id: string;
  provider: string;
}

export interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}
