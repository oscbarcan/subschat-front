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
      lastmsg: 'hola como estas?'
    },
    {
      name: 'Pepe',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'Programacion',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'Crunchyroll Pack',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
    {
      name: 'David',
      last_message: 4,
      img: 'img/default-profile.jpg',
      lastmsg: 'hola como estas?'
    },
  ]);
}
