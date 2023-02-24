export interface Country {
    code: string;
    name: Name;
    capital?: string;
    region: string;
    subRegion?: string;
    languages: Language[];
    currencies: Currency[];
    population: number;
    area: number;
    coordinates: number[];
    flags: Flag;
}

interface Name {
    common: string;
    official: string;
    nativeName: NativeName[];
}

interface NativeName {
    language: string;
    common: string;
    official: string;
}

interface Language {
    code: string;
    name: string;
}

interface Currency {
    code: string;
    name: string;
    symbol?: string;
}

interface Flag {
    png: string;
    svg: string;
}
