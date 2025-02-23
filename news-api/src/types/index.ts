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
    country: Countries;
    description: string;
    id: string;
    language: Languages;
    name: string;
    url: string;
}

export interface AppViewNews {
    status: string;
    totalResults: number;
    articles: NewsItem[];
}

export interface AppViewSoruces {
    status: string;
    sources: NewsSources[];
}

export type LoaderGeneric = Record<string, string>;

export type SourcesCallback = (data: AppViewSoruces, error?: Error) => void;
export type NewsCallback = (data: AppViewNews, error?: Error) => void;

export enum Languages {
    English = 'en',
    Norwegian = 'no',
    Italian = 'it',
    Arabic = 'ar',
    Urdu = 'ud',
    German = 'de',
    Portuguese = 'pt',
    Spanish = 'es',
    French = 'fr',
    Hebrew = 'he',
    Russian = 'ru',
    Swedish = 'sv',
    Dutch = 'nl',
    Chinese = 'zh',
}

export enum Countries {
    UnitedStates = 'us',
    Australia = 'au',
    Norway = 'no',
    Italy = 'it',
    SaudiArabia = 'sa',
    Pakistan = 'pk',
    UnitedKingdom = 'gb',
    Germany = 'de',
    Brazil = 'br',
    Canada = 'ca',
    Spain = 'es',
    Argentina = 'ar',
    France = 'fr',
    India = 'in',
    Israel = 'is',
    Russia = 'ru',
    Sweden = 'se',
    SouthAfrica = 'za',
    Ireland = 'ie',
    Netherlands = 'nl',
    China = 'zh',
}
