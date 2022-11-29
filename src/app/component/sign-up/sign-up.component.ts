import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]]

    });
  }
  get f() { return this.signupForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {

      let reqdata = {
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.mobileNo,
      }
      this.user.signUpUser(reqdata).subscribe((response: any) => {
        console.log(response);
      })

    }

  }
}
