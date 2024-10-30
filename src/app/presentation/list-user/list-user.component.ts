import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [MenuComponent, RouterLink],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {

}
