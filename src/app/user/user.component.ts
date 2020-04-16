import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'bi-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input() user: User;
userInitials: string;
  constructor() { }
  
  ngOnInit(): void {
    this.userInitials = this.user.name.split(' ')
      .map(v => v.charAt(0))
      .join('');
  }

}
