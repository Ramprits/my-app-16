import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from './interface/IUser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.component.html',
})
export class UserCardComponent implements OnInit {
  @Input() user?: IUser;
  @Input() index?: number;
  ngOnInit(): void {}
}
