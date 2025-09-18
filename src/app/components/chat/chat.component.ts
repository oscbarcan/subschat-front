import { Component } from '@angular/core';
import { SideChatComponent } from "./side-chat/side-chat.component";
import { MainChatComponent } from "./main-chat/main-chat.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'chat',
  imports: [SideChatComponent, MainChatComponent, NavbarComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
