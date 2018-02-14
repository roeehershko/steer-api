import { Document } from 'mongoose';

export enum SplitTypes { Country = 1 }

export interface SplitOptions {
    equals?: string;
    contains?: string;
    gt?: [number, Date];
    lt?: [number, Date];
    in?: any[];
}

export interface Split {
    type: SplitTypes
    options: SplitOptions
}

export interface Lander {
    name: string,
    url: string
    weight: number
}

export interface Source {
    name: string,
    code: string,
    costs: {
        [key: string]: number
    }
}

export interface Country {
    name: string;
    iso2: string
}

export interface Campaign extends Document {
    name?: string,
    slug?: string,
    landers?: Lander[],
    sources?: Source[],
    // countries?: Country[]
}