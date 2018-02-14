export interface Job {

    run(done): Promise<any>
}