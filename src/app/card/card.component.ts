import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../_entities/card.model';
import { changeShadow } from '../_animations/change-shadow.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations:[changeShadow]
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() handleCardSelect = new EventEmitter<Card>();
  
  constructor() { }

  ngOnInit() {
    
  }

  handleCardFlip() {
    this.handleCardSelect.next(this.card);
  }
}
