import { Component } from '@angular/core';
import {Message} from '../appService/message.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  btnClick(){
    const msgService = new Message;
    msgService.msgAlert();
  }
}
