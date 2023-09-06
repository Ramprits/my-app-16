import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { IUser } from './interface/IUser';
import { UserCardComponent } from './user-card.component';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, CreateUserComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  constructor(private readonly userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
