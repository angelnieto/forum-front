export interface ICategory{
    id?: number;
    description: string;
}

export class Category implements ICategory{
    constructor(public id: number, public description: string) {}
}