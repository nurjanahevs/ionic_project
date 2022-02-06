import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import { UserService } from 'src/app/services/users/user.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
  ],

  declarations: [UsersPage],
  providers: [UserService],
})
export class UsersPageModule {}
