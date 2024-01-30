import { Component, Input } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrl: './edit-item-modal.component.scss'
})
export class EditItemModalComponent {

  @Input()
  item!: BudgetItem;

  constructor() { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BudgetItem){
    
  }

}
