export interface Session {
    id?: number,
    campaign: number,
    ip: string,
    country: string,
    city: string,
    goals: object[],
    source: object[],
    params: object
    [k: string]: any
}
