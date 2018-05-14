import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  Messages: { Text: string, Type: any } [];

  constructor() { 
    this.Messages = [
      { Text: 'Welcome to the Exercise Tracker! Unfortunately the Facebook login integration is currently down. Please use Google login.', Type: 'warning' },
    ];
  }
}
