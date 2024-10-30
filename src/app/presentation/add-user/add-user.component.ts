import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { ReactiveFormsModule , FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  formAddUser!: FormGroup;
  ngOnInit(): void {
    this.formAddUser= new FormGroup({
      speudo: new FormControl('', [Validators.required, Validators.minLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(150)]),

    });
    
  } 
  
  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty);
}

}
