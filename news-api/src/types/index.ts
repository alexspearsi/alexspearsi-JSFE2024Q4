export interface NewsItem {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
      id: string;
      name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsSources {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface AppViewNews {
    statsu: string,
    totalResults: number,
    articles: NewsItem[]
}

export interface AppViewSoruces {
  status: string;
  sources: NewsSources[];
}

export type LoaderGeneric = Record<string, string>