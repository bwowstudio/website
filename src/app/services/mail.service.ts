import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }
  sendmail(email, name) {
    return this.http.post('https://bwow-emails.herokuapp.com/api/email', {
      email, name
    });
  }
}
