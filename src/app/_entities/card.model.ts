export class Card {
    public value: number;
    public isFlipped: boolean;
    public cardState: string;

    constructor(value: number) {
        this.value = value;
        this.isFlipped = false;
        this.cardState = '';
    }
}