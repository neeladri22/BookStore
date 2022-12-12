import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  }
  get f() { return this.loginForm.controls; }  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
       console.log(this.loginForm.value);

      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.loginUser(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token",response.result.accessToken);
      })
    }
  }

}
