import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  private arr = [];
  
  constructor() { }

  ngOnInit() {
    this.initCards();
  }

  initCards() {
    this.createArr(50);
    this.shuffle(this.arr);
  }

  shuffle(array) {
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
    var arr = [2 ,2]
    for (let i = 3; i < num; i++) {
      if (this.isPrime(i)) {
        this.arr.push(i);
        this.arr.push(i);
      }
    }
  }

}
