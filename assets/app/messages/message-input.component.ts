import { Component } from "@angular/core";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
})

export class MessageInputComponent {
  constructor(private MessageService: MessageService) {}

  onSave(value: string) {
    const message = new Message(value, 'Marcel');
    this.MessageService.addMessage(message);
  }
}