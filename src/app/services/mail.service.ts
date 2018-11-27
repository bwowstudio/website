import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }
  sendmail(email, name) {
    const object = {
      email,
      name,
    };
    if (!email) {
      object.email = 'No ha dejado email';
    }
    if (!name) {
      object.name = 'No ha dejado name';
    }
    return this.http.post('https://bwow-emails.herokuapp.com/api/email', object);
  }
}
