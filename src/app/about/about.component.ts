import { Component } from '@angular/core';
import {Message} from '../appService/message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  btnClick(){
    const msgService = new Message;
    msgService.msgAlert();
  }

}
