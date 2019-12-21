import { Component, OnInit } from '@angular/core';
import { Card } from '../_entities/card.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  cards: Card[] = [];
  isStopCardSelecting = false;
  firstChosenCard: Card = null;

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

  onCardSelect(card) {
    if (card.isFlipped || this.isStopCardSelecting) {
      console.log('Cannot click!');
      return;
    }

    const checkIfFoundPair = () => {
      if (this.firstChosenCard.value !== card.value) {
        this.firstChosenCard.isFlipped = false;
        card.isFlipped = false;
        card.cardState = '';
        this.firstChosenCard.cardState = '';
      }
      else {
        card.cardState = 'matched';
        this.firstChosenCard.cardState = 'matched';
      }
      this.firstChosenCard = null;
      this.isStopCardSelecting = false;
    };
    
    card.isFlipped = true;
    card.cardState = 'selected';

    if (this.firstChosenCard) {
      this.isStopCardSelecting = true;
      setTimeout(checkIfFoundPair, 1000);
    } else {
      this.firstChosenCard = card;
    }
  }


}
