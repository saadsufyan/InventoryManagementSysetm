import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.baseUrl}/admin/customers`);
  }
  getCustomerWithId(id) {
    return this.http.get(`${environment.baseUrl}/admin/appointments?customer_id=${id}`);
  }
}
