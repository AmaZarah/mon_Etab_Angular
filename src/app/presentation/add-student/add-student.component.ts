import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { ReactiveFormsModule, FormControl, FormGroup,AbstractControl,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [MenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  formAddStudent!: FormGroup;
  ngOnInit(): void {
    this.formAddStudent= new FormGroup({
      first_name : new FormControl('', [Validators.required, ]),
      last_name: new FormControl('', [Validators.required, ]),
      birthday: new FormControl('', [Validators.required, ]),
      phone_number: new FormControl('', [Validators.required, ]),
      url_picture: new FormControl('', [Validators.required, ]),
      matricule: new FormControl('', [Validators.required, ]),
      phone_number_father: new FormControl('', [Validators.required, ]),
      gender: new FormControl('', [Validators.required, ]),
      specialty: new FormControl('', [Validators.required,]),

    });
    
  } 
  
  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty);
}


}
