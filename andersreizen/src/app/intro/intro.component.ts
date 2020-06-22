import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CreateProfileService} from "../service/create-profile.service";
import {GetCompanyDetailsService} from "../get-company-details.service";

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
    showAlter: boolean =  false
    alertMessage: string = '';
    alertType: string = '';
    private profileField: { email: string, telephone: string, companyName: string, companyType: string, averageFte: string, carsAverage: string, filledByName: string, date: string, location: string, travelAllowance: string, businessTrafficAllowance: string, description: string } = {
        email: '',
        telephone: '',
        companyName: '',
        companyType: '',
        averageFte: '',
        carsAverage: '',
        filledByName: '',
        date: '',
        location: '',
        travelAllowance: '',
        businessTrafficAllowance: '',
        description: ''
}
    profileForm: FormGroup

    constructor(private createProfileService:CreateProfileService, private getCompanyDetailsService: GetCompanyDetailsService) {

    }

    ngOnInit() {
        this.profileForm = new FormGroup({})
        this.getCompanyDetailsService.getCompanyDetails().subscribe(data => {
            window.localStorage.setItem('compId',data.introduction.companyId)
        })
    }

    updatefields(e,field){
        this.profileField[field] = e.target.value
    }

    saveCompanyDetails(){
            this.createProfileService.createProfile(this.profileField).subscribe(data => {
                if(data.introduction !== null){
                    localStorage.setItem('cmpid',data.id)
                    this.showAlter = true;
                    this.alertType ='SUCCESS'
                }else {
                    this.showAlter = true;
                    this.alertType ='FAIL'
                    this.alertMessage = data.error.message;
                }
            })
    }
}
