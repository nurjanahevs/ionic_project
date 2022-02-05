import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  logininteface = {
    email: '',
    password: '',
  };

  constructor(private userservice: UserService) {}

  ngOnInit() {}

  login() {
    this.userservice.loginUser(this.logininteface).subscribe((res) => {
      console.log(res);
    });
  }
}
