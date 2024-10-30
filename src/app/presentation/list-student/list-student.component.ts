import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [MenuComponent, RouterLink], 
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.scss'
})
export class ListStudentComponent {

}
