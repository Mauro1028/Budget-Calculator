import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrl: './budget-item-card.component.scss'
})
export class BudgetItemCardComponent implements OnInit {


  @Input()
  item!: BudgetItem;

  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onXButtonClick() {
    // emit event to delete here
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
