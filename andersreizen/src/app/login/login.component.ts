import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {LoginServiceService} from "../service/login-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {error} from "util";
import {catchError} from "rxjs/operators";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginfields: { username: string, password: string } = {username: '', password: ''}
    LoginForm: FormGroup

    constructor(private router: Router, private loginService: LoginServiceService) {
    }

    ngOnInit() {
        this.LoginForm = new FormGroup({})
    }

    goto(path) {
        this.router.navigate([path])
    }

    login() {
        // @ts-ignore
        if (this.LoginForm.status === 'VALID') {
            this.loginService.login(this.loginfields).subscribe((data) => {
                if (data.accessToken) {
                    window.localStorage.setItem('token', JSON.stringify(data))
                    this.goto('user')
                }
            },error => console.log(error))
        } else {
            console.log('invalid form')
        }

    }
    handelError(error){
        if (typeof(error() === 'object')){
            console.log(error)
        }else {
            console.log(error())
    }
    }

    updateUserCred(e, field) {
        this.loginfields[field] = e.target.value
    }

}
