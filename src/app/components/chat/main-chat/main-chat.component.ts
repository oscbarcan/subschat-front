import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'main-chat',
  imports: [NgClass],
  templateUrl: './main-chat.component.html',
  styleUrl: './main-chat.component.css'
})
export class MainChatComponent {
  messages = signal([
    {
      content: 'Hola como estas?',
      user: 'Oscar',
      time_stamp: '20:48'
    },
    {
      content: 'Bien y tu?',
      user: 'David',
      time_stamp: '20:49'
    },
    {
      content: 'Bueno aqui estamos pero menudo coñazo no?',
      user: 'Oscar',
      time_stamp: '20:50'
    },
    {
      content: 'Si la verdad vaya mierda',
      user: 'David',
      time_stamp: '20:51'
    },
    {
      content: 'YOOOOOOOO',
      user: 'Ivan',
      time_stamp: '20:52'
    },
    {
      content: 'YOOOOOOO',
      user: 'Oscar',
      time_stamp: '20:53'
    },
    {
      content: 'YOOOOOOOOOOOOOO',
      user: 'David',
      time_stamp: '20:54'
    },
    {
      content: 'Como estamos todo bien todo correcto y yo que me alegro mensaje largo para ver que pasa cuando el mesaje tiene muchas lineas para ver si se pasa a la parte de abajo bien y que da igual el limite de texto de el mensaje.',
      user: 'Oscar',
      time_stamp: '20:55'
    },
    {
      content: 'Todo bien la verdad',
      user: 'David',
      time_stamp: '20:56'
    },
    {
      content: 'Pues yo me alegro',
      user: 'Ivan',
      time_stamp: '20:57'
    },
    {
      content: 'Si si todo correcto',
      user: 'Oscar',
      time_stamp: '20:58'
    },
    {
      content: 'Fantastico pues',
      user: 'Oscar',
      time_stamp: '20:59'
    },
    {
      content: 'Hola como estas?',
      user: 'Oscar',
      time_stamp: '20:48'
    },
    {
      content: 'Bien y tu?',
      user: 'David',
      time_stamp: '20:49'
    },
    {
      content: 'Bueno aqui estamos pero menudo coñazo no?',
      user: 'Oscar',
      time_stamp: '20:50'
    },
    {
      content: 'Si la verdad vaya mierda',
      user: 'David',
      time_stamp: '20:51'
    },
    {
      content: 'YOOOOOOOO',
      user: 'Ivan',
      time_stamp: '20:52'
    },
    {
      content: 'YOOOOOOO',
      user: 'Oscar',
      time_stamp: '20:53'
    },
    {
      content: 'YOOOOOOOOOOOOOO',
      user: 'David',
      time_stamp: '20:54'
    },
    {
      content: 'Como estamos todo bien todo correcto y yo que me alegro mensaje largo para ver que pasa cuando el mesaje tiene muchas lineas para ver si se pasa a la parte de abajo bien y que da igual el limite de texto de el mensaje.',
      user: 'Oscar',
      time_stamp: '20:55'
    },
    {
      content: 'Todo bien la verdad',
      user: 'David',
      time_stamp: '20:56'
    },
    {
      content: 'Pues yo me alegro',
      user: 'Ivan',
      time_stamp: '20:57'
    },
    {
      content: 'Si si todo correcto',
      user: 'Oscar',
      time_stamp: '20:58'
    },
    {
      content: 'Fantastico pues',
      user: 'Oscar',
      time_stamp: '20:59'
    }
  ]);
}
