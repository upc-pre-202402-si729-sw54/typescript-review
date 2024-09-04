import { v4 as uuidv4 } from 'uuid';

export class SalesOrder{
    private readonly _id: string;
    private _date: Date;
    private _total: number;

    constructor(date: Date, total: number) {
        this._id = uuidv4();
        this._date = date;
        this._total = total;
    }

    get id(): string {
        return this._id;
    }

    get date(): Date {
        return this._date;
    }

    get total(): number {
        return this._total;
    }
}