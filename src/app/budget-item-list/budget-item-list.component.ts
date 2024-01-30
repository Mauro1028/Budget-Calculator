import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.scss'
})
export class BudgetItemListComponent {
  @Input()
  budgetItems: BudgetItem[] = [];
  @Output() delete : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() cardClick : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);    
  }
  onCardClicked(){

  }

}
