import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formlogin!: FormGroup;
  ngOnInit(): void {
    this.formlogin= new FormGroup({
      speudo: new FormControl('', [Validators.required, Validators.minLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(150)]),

    });
    
  } 
  
  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty);
}

}
