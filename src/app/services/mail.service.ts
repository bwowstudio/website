import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }
  sendmail(email, name, message, phone) {
    const object = {
      name,
      provider: 'bwow',
      from: email,
      to: 'hi@bwowstudio.com',
      subject: 'Nuevo mensaje en bwow!',
      message,
      phone
    };
    if (!email) {
      object.from = 'No ha dejado email';
    }
    if (!name) {
      object.name = 'No ha dejado nombre';
    }
    if (!message) {
      object.message = 'No ha dejado mensaje';
    }
    if (!phone) {
      object.phone = 'No ha dejado teléfono';
    }
    return this.http.post('http://emailing-microservice.herokuapp.com/send-email', object);
  }
}
