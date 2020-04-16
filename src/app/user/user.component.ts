import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewPostComponent } from '../posts/new-post.component';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { PostItem } from '../models/post.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bi-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() filterBy = new EventEmitter<number>();
  @Output() reloadDataWith = new EventEmitter<PostItem>();
  userInitials: string;
  dialogRef: MatDialogRef<NewPostComponent>;
  constructor(private dialog: MatDialog, private service: JsonPlaceholderService) { }

  createPost(user: User) {
    this.dialogRef = this.dialog.open(NewPostComponent);
    this.dialogRef.afterClosed().subscribe( (next) => {
      if (next) {
        this.service.post(ENDPOINTS.POSTS, {userId: this.user.id, ...next})
          .subscribe( (post) => {
            this.reloadDataWith.emit(post as PostItem);
          });
      }
    });
  }

  filterPosts(clear?: boolean) {
    this.filterBy.emit(clear ? -1 : this.user.id);
  }

  ngOnInit(): void {
    if (this.user) {
      this.userInitials = this.user.name.split(' ')
        .map(v => v.charAt(0))
        .join('');
    }
  }

}
