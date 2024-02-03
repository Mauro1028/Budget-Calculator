import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '/Users/cubil/Angular Apps/budget-app/src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.scss'
})
export class AddItemFormComponent {


  @Input()
  item!: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem!: boolean;

  constructor() { }

  ngOnInit(){
      // if item has a value
      if (this.item) {
        // this means that an existing item object was passed into this component
        // therefore this is not a new item
        this.isNewItem = false;
      }else {
        this.isNewItem = true;
        this.item = new BudgetItem('', 0);
      }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
