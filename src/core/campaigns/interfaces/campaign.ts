import { Document } from 'mongoose';

export enum RoleTypes { Country = 1, DayOfWeek = 2, HourOfDay = 3, DevicePrice = 4 }

export interface Lander {
    name: String,
    url: String
}

export interface SplitOptions {
    equals?: String;
    contains?: String;
    gt?: [number, Date];
    lt?: [number, Date];
    in?: String[];
}

export interface Split {
    type: RoleTypes
    options: SplitOptions
}

export interface Endpoint {
    lander: Lander,
    splits: Split[]
    weight: Number
}

export interface Source {
    name: String,
}

export interface Country {
    name: String;
    iso2: String
}

export interface Campaign extends Document {
    name: String,
    slug: String,
    endpoints?: Endpoint[],
    sources?: Source[],
    countries?: Country[]
}