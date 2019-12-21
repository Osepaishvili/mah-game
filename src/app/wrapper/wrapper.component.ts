import { Component, OnInit } from '@angular/core';
import { Card } from '../_entities/card.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  
  cards: Card[] = [];

  constructor() { }
 ngOnInit() {
    this.initCards();
  }

  initCards() {
    this.createArr(50);
    this.shuffle(this.cards);
  }

  shuffle(array: Card[]) {
    array.sort(() => Math.random() - 0.5);
  }

  isPrime(num: number) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  createArr(num: number) {
    this.cards.push(new Card(2));
    this.cards.push(new Card(2));
    for (let i = 3; i < num; i++) {
      if (this.isPrime(i)) {
        this.cards.push(new Card(i));
        this.cards.push(new Card(i));
      }
    }
  }


}
