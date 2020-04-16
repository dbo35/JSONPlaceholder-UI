import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'bi-new-post',
  template: `
  <h1 mat-dialog-title>Create Post</h1>
<div mat-dialog-content>
  <mat-form-field>
    <mat-label>Title</mat-label>
    <input matInput [(ngModel)]="data?.user.title">
  </mat-form-field>
  <mat-form-field>
    <mat-label>Body</mat-label>
    <input matInput [(ngModel)]="data?.user.body">
  </mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="closeDialog()">cancel</button>
  <button mat-button (click)="closeDialog(data)" cdkFocusInitial>SUBMIT</button>
</div>
  `
})
export class NewPostComponent {
  data;
  constructor(public dialogRef: MatDialogRef<NewPostComponent> ) {
  }

  closeDialog(data?: any) {
    this.dialogRef.close(data);
  }
}
