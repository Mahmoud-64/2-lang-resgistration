import { Component, OnInit } from '@angular/core';
import { MerchantCategoriesService } from '../merchant-categories.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {

  constructor(private categoriesList: MerchantCategoriesService,
    private translate: TranslateService,
    private router: Router,
    private alertController: AlertController) {
    translate.setDefaultLang('en');
  }

  response: any;
  list = [];
  ngOnInit() {
    this.categoriesList.getAllCategories().subscribe(data => {
      console.log(data);
      this.response = data;
      this.list = this.response.result;
      console.log(this.list);

    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registration',
      message: '<strong>Successful</strong>',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/home'])
          }
        }
      ]
    });

    await alert.present();
  }

  showSelectValue(mySelect) {
    console.log(mySelect.value);
    if (mySelect.value === "en") { this.translate.use("en") }
    else if (mySelect.value === "es") { this.translate.use("es") }

  }
  logForm(f) {
    // here it is supposed to submit form to backend api to store users in database
    this.presentAlertConfirm();
    console.log(f);

  }


}
