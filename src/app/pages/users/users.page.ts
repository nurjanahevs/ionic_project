import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  constructor(private userservice: UserService) {}

  ngOnInit() {}

  register() {}
}
