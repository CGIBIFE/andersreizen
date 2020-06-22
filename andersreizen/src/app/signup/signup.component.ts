import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SignupService} from "../service/signup.service";
import {timeout} from "rxjs/operators";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    SignupForm : FormGroup
    singupForm: { firstName: string, lastName: string, businessName: string, email: string, password: string, repeat_password: string, role:[string] } = {
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        password: '',
        role: ["user"],
        repeat_password: ''
    }
    showAlter: boolean =  false
    alertMessage: string = '';
    alertType: string = '';

    constructor(private router: Router, private signupService: SignupService) {
    }

    ngOnInit() {
        this.SignupForm = new FormGroup({})
    }

    goto(path) {
        this.router.navigate([path])
    }

    signup() {
        if (this.SignupForm.status === 'VALID') {
            if(this.singupForm.password === this.singupForm.repeat_password){
                this.signupService.signup(this.singupForm).subscribe(data => {
                    if (data.status === 'SUCCESS') {
                        this.showAlter = true;
                        this.alertType ='SUCCESS'
                        this.alertMessage = data.comment;
                        setTimeout(() => {
                            this.goto('login')
                        }, 3000)
                    }else  {
                        if (data.status === 'FAIL') {
                            this.showAlter = true;
                            this.alertType ='FAIL'
                            this.alertMessage = data.message;
                        }
                    }
                })
            }

        }else {
            console.log('invalid form')
        }
    }

    updatefields(e, field) {
        this.singupForm[field] = e.target.value;
    }
}
