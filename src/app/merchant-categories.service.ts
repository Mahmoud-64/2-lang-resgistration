import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantCategoriesService {

  constructor(private http: HttpClient) { }
  public getAllCategories() {
    return this.http.get('https://ngo.worxcis.com/WLS/ciswsapi.php?op=getmerchantcategories');
  }
}
