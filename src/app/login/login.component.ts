import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from '../_services/authentication.service';
import {LoginDTO} from '../_models/dto/dtoEntities';
import {Role} from '../_models/role';
import {HttpService} from '../_services/http.service';
import {CurrentUser, CustomResponse} from '../_models/entities';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    response: CustomResponse = new CustomResponse();

    constructor(private authenticationService: AuthenticationService,
                private httpService: HttpService,
                private toastController: ToastController,
                private router: Router,
                fb: FormBuilder) {

        if (this.authenticationService.getUser()) {
            console.log(this.authenticationService.getUser());
            this.router.navigate(['/dashboard']);
        }

        this.form = fb.group({
            username:
                ['', [Validators.required]],

            password:
                ['', [Validators.required]]
        });
    }

    ngOnInit() {}

    onSubmit() {
        const val = this.form.value;

        const loginDto = new LoginDTO(val.username, val.password, Role.SKITEACHER);

        this.httpService.login(loginDto).subscribe(data => {
            Object.assign(this.response, data);
            this.checkResponse();
        });

    }

    checkResponse() {
        switch (this.response.typ) {
            case 'hint':
                this.presentToast(this.response.message);
                // Refresh Form
                break;
            case 'data':
                const currentUser: CurrentUser = JSON.parse(JSON.stringify(this.response.data[0]));
                this.authenticationService.setUser(currentUser);
                this.router.navigate(['dashboard/home']);
                break;
        }
    }

    private async presentToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 4000,
            position: 'bottom',
            showCloseButton: true,
            keyboardClose: true
        });
        await toast.present();
    }
}
