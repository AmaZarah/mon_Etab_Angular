import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup,AbstractControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  formEditUser!: FormGroup;
  ngOnInit(): void {
    this.formEditUser= new FormGroup({
      speudo: new FormControl('', [Validators.required, Validators.minLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(150)]),

    });
    
  } 
  
  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty);
}

}
