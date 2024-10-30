import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-teacher',
  standalone: true,
  imports: [MenuComponent, RouterLink],
  templateUrl: './list-teacher.component.html',
  styleUrl: './list-teacher.component.scss'
})
export class ListTeacherComponent {

}
