import { Component, OnInit } from '@angular/core';
import { MerchantCategoriesService } from '../merchant-categories.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private categoriesList: MerchantCategoriesService) { }
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
  todo = {}
  logForm() {
  }
  options: any[] = [{ "val": "aaa" }, { "val": "bbbb" }];


}
