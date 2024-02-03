import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';
import{ MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.scss',
})

@Injectable()
export class BudgetItemListComponent {

  @Input()
  budgetItems: BudgetItem[] = [];
  @Output() delete : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem){
    // show the edit modal through angular material 
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result) {

        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
