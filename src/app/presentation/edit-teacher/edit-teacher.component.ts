import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { ReactiveFormsModule, FormGroup,FormControl, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [MenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.scss'
})
export class EditTeacherComponent {
  formEditTeacher!: FormGroup;
  ngOnInit(): void {
    this.formEditTeacher= new FormGroup({
      first_name : new FormControl('', [Validators.required, Validators.maxLength(50)]),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      birthday: new FormControl('', [Validators.required, Validators.required]),
      phone_number: new FormControl('', [Validators.required, Validators.minLength(150)]),
      url_picture: new FormControl('', [Validators.required, Validators.minLength(150)]),
      gender: new FormControl('', [Validators.required, Validators.minLength(150)]),
      specialty: new FormControl('', [Validators.required, Validators.minLength(150)]),
      
      

    });
    
  } 
  
  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty);
}

}
