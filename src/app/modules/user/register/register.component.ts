import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private validators = {
    name: [Validators.required, Validators.minLength(3)],
    email: [Validators.required, Validators.email],
    age: [Validators.required, Validators.min(18), Validators.max(120)],
    password: [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
      ),
    ],
    phone_number: [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ],
  };

  name = new FormControl('', this.validators.name);
  email = new FormControl('', this.validators.email);
  age = new FormControl('', this.validators.age);
  password = new FormControl('', this.validators.password);
  confirm_password = new FormControl('', [Validators.required]);
  phone_number = new FormControl('', this.validators.phone_number);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirm_password,
    phoneNumber: this.phone_number,
  });
}
