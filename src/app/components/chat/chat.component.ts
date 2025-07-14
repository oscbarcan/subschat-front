import { Component } from '@angular/core';
import { SideListComponent } from "./side-list/side-list.component";
import { MessagePanelComponent } from "./message-panel/message-panel.component";

@Component({
  selector: 'chat',
  imports: [SideListComponent, MessagePanelComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
