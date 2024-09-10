export interface IMessage{
    id?: number;
    text: string;
    author: string;
    date?: Date;
    category: number;
}

export class Message implements IMessage{
    constructor(
        public id: number, 
        public text: string,
        public author: string,
        public date: Date,
        public category: number
    ) {}
}