import { Component, signal } from '@angular/core';

@Component({
  selector: 'side-chat',
  imports: [],
  templateUrl: './side-chat.component.html',
  styleUrl: './side-chat.component.css'
})
export class SideChatComponent {
  chats = signal([
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'Pepe',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'Programacion',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?',
      time_stamp: '20:48'
    },
  ]);
}
