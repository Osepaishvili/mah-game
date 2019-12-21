export class Card {
    public value: number;
    public isFlipped: boolean;
    public isMatched: boolean;

    constructor(value: number) {
        this.value = value;
        this.isFlipped = false;
        this.isMatched = false;
    }
}