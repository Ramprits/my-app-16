import { IUser } from './../interface/IUser';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      addresses: this.fb.array([this.createAddress()]),
    });
  }

  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }

  createAddress(): FormGroup {
    return this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      country: [''],
    });
  }

  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  addAddress(): void {
    const addresses = this.userForm.get('addresses') as FormArray;
    addresses.push(this.createAddress());
  }

  submitForm(): void {
    const userData = this.userForm.value;
    console.log(userData);
    // this.userService.createUser(userData).subscribe((response) => {
    //   console.log('User created:', response);
    //   this.userForm.reset();
    // });
  }
}
