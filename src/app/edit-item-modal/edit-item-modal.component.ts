import { Component, OnInit, Inject } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrl: './edit-item-modal.component.scss'
})
export class EditItemModalComponent implements OnInit {

  constructor(
    public dialogRefL: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BudgetItem){ 
    this.dialogRefL.close(updatedItem);   
  }

}
