import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
/**
 * Generated class for the PopoverMessagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-messages',
  templateUrl: 'popover-messages.html'
})
export class PopoverMessagesComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello PopoverMessagesComponent Component');
    this.text = 'Hello World';
  }

}
