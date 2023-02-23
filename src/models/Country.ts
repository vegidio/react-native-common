export class Country {
    constructor(
        readonly code: string,
        readonly name: Name,
        readonly region: string,
        readonly languages: Language[],
        readonly currencies: Currency[],
        readonly population: number,
        readonly area: number,
        readonly coordinates: number[],
        readonly flags: Flag,
        readonly capital?: string,
        readonly subRegion?: string,
    ) {}
}

class Name {
    constructor(readonly common: string, readonly official: string, readonly nativeName: NativeName[]) {}
}

class NativeName {
    constructor(readonly language: string, readonly common: string, readonly official: string) {}
}

class Language {
    constructor(readonly code: string, readonly name: string) {}
}

class Currency {
    constructor(readonly code: string, readonly name: string, readonly symbol?: string) {}
}

class Flag {
    constructor(readonly png: string, readonly svg: string) {}
}
