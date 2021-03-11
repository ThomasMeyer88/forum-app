import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { User } from '../models/user';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  error: Boolean = false;
  errorMessage: String = 'An error has occurred';
  
  createUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<UserSignupComponent>,
    ) {}

  ngOnInit(): void {
  }

  async onSubmit() {
  }

  passwordsMatch() {
    return this.createUser.value.password === this.createUser.value.confirmPassword;
  }


}
