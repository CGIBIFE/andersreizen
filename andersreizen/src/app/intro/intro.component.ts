import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CreateProfileService} from "../service/create-profile.service";
import {GetCompanyDetailsService} from "../service/get-company-details.service";
import {UpdateCompanyDetailsService} from "../service/update-company-details.service";

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
    showAlter: boolean =  false
    alertMessage: string = '';
    alertType: string = '';
    companyId: string;
    profileStatus: boolean;
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

    constructor(private createProfileService:CreateProfileService, private getCompanyDetailsService: GetCompanyDetailsService, private updateCompanyDetailsService:UpdateCompanyDetailsService) {

    }

    ngOnInit() {
        this.profileForm = new FormGroup({})

            this.getCompanyDetailsService.getCompanyDetails().subscribe(data => {
                window.localStorage.setItem('compDetails', JSON.stringify(data.introduction))
                if(data.introduction !== null){
                    window.localStorage.setItem('compId',data.introduction.companyId);
                    window.localStorage.setItem('profileCompleted','true');
                    this.companyId = data.introduction.companyId;
                    this.profileStatus = true
                }else {
                    window.localStorage.setItem('profileCompleted','false');
                    this.profileStatus = false
                }

                this.profileField.averageFte = data.introduction.averageFte;
                this.profileField.email = data.introduction.email,
                    this.profileField.telephone = data.introduction.telephone,
                    this.profileField.companyName = data.introduction.companyName,
                    this.profileField.companyType = data.introduction.companyType,
                    this.profileField.carsAverage = data.introduction.carsAverage,
                    this.profileField.filledByName = data.introduction.filledByName,
                    this.profileField.date = data.introduction.date,
                    this.profileField.location = data.introduction.location,
                    this.profileField.travelAllowance = data.introduction.travelAllowance,
                    this.profileField.businessTrafficAllowance = data.introduction.businessTrafficAllowance,
                    this.profileField.description = data.introduction.description

            })


    }

    updatefields(e,field){
        this.profileField[field] = e.target.value
    }

    saveCompanyDetails(){
        if (!this.profileStatus) {
            if (this.profileForm.valid) {
                this.createProfileService.createProfile(this.profileField).subscribe(data => {
                    if (data.introduction !== null) {
                        localStorage.setItem('cmpid', data.id)
                        this.showAlter = true;
                        this.alertType = 'SUCCESS'
                        this.alertMessage = 'Uw gegevens zijn succesvol opgeslagen!'
                    } else {
                        this.showAlter = true;
                        this.alertType = 'FAIL'
                        this.alertMessage = data.error.message;
                    }
                })
            } else {
                this.validateAllFormFields(this.profileForm);
            }
        }else {
            this.updateCompanyDetailsService.updateCompanyDetails(this.profileField, this.companyId).subscribe(data => {
                if (data.introduction !== null) {
                    localStorage.setItem('cmpid', data.id)
                    this.showAlter = true;
                    this.alertType = 'SUCCESS'
                    this.alertMessage = 'Uw gegevens zijn succesvol opgeslagen!'
                } else {
                    this.showAlter = true;
                    this.alertType = 'FAIL'
                    this.alertMessage = data.error.message;
                }
            })
        }
    }

    private validateAllFormFields(profileForm: FormGroup) {
        Object.keys(profileForm.controls).forEach(field => {
            const control = profileForm.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
