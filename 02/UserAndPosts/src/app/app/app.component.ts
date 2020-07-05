import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../interface/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../app.component.css']
})
export class AppComponent {
  title = 'UserAndPosts';
  user: User;
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(value => this.user = value);
  }
}
