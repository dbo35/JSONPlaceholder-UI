import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bi-new-post',
  template: `
  <h1 mat-dialog-title>Create Post</h1>
<div mat-dialog-content>
  <mat-form-field>
    <mat-label>Title</mat-label>
    <input matInput [(ngModel)]="post.title">
  </mat-form-field>
  <mat-form-field>
    <mat-label>Body</mat-label>
    <input matInput [(ngModel)]="post.body">
  </mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="closeDialog()">cancel</button>
  <button mat-button (click)="closeDialog(post)" cdkFocusInitial>SUBMIT</button>
</div>
  `
})
export class NewPostComponent {
  data: any;
  post = {
    title: '',
    body: '',
    userId: null
  }
  constructor(public dialogRef: MatDialogRef<NewPostComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
  }

  closeDialog(data?: any) {
    this.post.userId = this.data.id;
    this.dialogRef.close(this.post);
  }
}
