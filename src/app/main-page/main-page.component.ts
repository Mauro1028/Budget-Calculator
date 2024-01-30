import { Component } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {


  budgetItems: BudgetItem[] =new Array<BudgetItem>();

  constructor() { }

  ngOnInit(){

  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }

}
